import { createContext, useEffect, useState } from 'react';

import { auth } from '../firebase/firebase.config';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
  sendPasswordResetEmail,
  confirmPasswordReset,
  updateProfile,
} from 'firebase/auth';

import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
        navigate('/');
      } else {
        setUser(null);
      }
    });
  }, [navigate]);

  const register = async (name, email, password) => {
    await createUserWithEmailAndPassword(auth, email, password).then(() => {
      return updateProfile(auth.currentUser, {
        displayName: name,
      });
    });
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const googleLogin = async () => {
    const googleProvider = new GoogleAuthProvider();
    return await signInWithPopup(auth, googleProvider);
  };

  const logOut = async () => {
    await signOut(auth);
  };

  const recoverPassword = async (email) => {
    await sendPasswordResetEmail(auth, email);
  };

  const resetPassword = async (oobCode, newPassword) => {
    return await confirmPasswordReset(auth, oobCode, newPassword);
  };

  return (
    <AuthContext.Provider
      value={{
        register,
        login,
        googleLogin,
        user,
        logOut,
        recoverPassword,
        resetPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
