import { useState, useContext } from 'react';
import { MdLockOutline } from 'react-icons/md';

import { AuthContext } from '../context/AuthContext';
import { useLocation, useNavigate } from 'react-router-dom';

import toast from 'react-hot-toast';

export const ResetPassword = () => {
  const location = useLocation();
  const getQuery = () => {
    return new URLSearchParams(location.search);
  };

  const query = getQuery();
  const oobCode = query.get('oobCode');

  const { resetPassword } = useContext(AuthContext);

  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');

  const notifyError = (error) => toast.error(error);
  const notifySuccess = () =>
    toast.success('Great!! You just changed your password');
  const navigate = useNavigate();

  const handleResetPassword = async () => {
    if (password) {
      if (password === password2) {
        try {
          await resetPassword(oobCode, password);
          notifySuccess();
          navigate('/');
        } catch (error) {
          notifyError(error.message);
        }
      } else {
        notifyError('Your new password does not match');
      }
    } else {
      notifyError('Please type your new password');
    }
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center px-10">
        <div className="bg-white lg:px-32 px-10 py-20 rounded-3xl shadow-sm">
          <h1 className="text-4xl lg:text-5xl font-semibold text-indigo-500">
            Create a new password
          </h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please type your new password
          </p>
          <div className="mt-8">
            <div>
              <label
                htmlFor="password"
                className="text-lg font-medium text-gray-800"
              >
                Password
              </label>
              <div className="relative flex items-center justify-end">
                <MdLockOutline className="w-5 h-5 absolute mr-5 text-gray-400" />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Type your new password"
                  id="password"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-gray-800 focus:outline-indigo-300"
                />
              </div>
            </div>
            <div className="mt-4">
              <label
                htmlFor="password"
                className="text-lg font-medium text-gray-800"
              >
                Confirm your password
              </label>
              <div className="relative flex items-center justify-end">
                <MdLockOutline className="w-5 h-5 absolute mr-5 text-gray-400" />
                <input
                  onChange={(e) => setPassword2(e.target.value)}
                  type="password"
                  placeholder="Confirm your new password"
                  id="password2"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-gray-800 focus:outline-indigo-300"
                />
              </div>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={handleResetPassword}
                className="bg-indigo-500 text-white text-xl font-bold rounded-xl py-3 hover:bg-indigo-600 hover:scale-[1.01] ease-in-out active:scale-[.98] active:duration-75 transition-all"
              >
                Reset password
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
