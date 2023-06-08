import { AuthProvider } from './context/AuthContext';

import { Routes, Route } from 'react-router-dom';

import { Home } from './components/Home.jsx';
import { LoginForm } from './components/LoginForm.jsx';
import { RegisterForm } from './components/RegisterForm.jsx';
import { ErrorPage } from './components/ErrorPage.jsx';
import { ProtectedRoute } from './components/ProtectedRoute';
import { RecoverPassword } from './components/RecoverPassword';
import { ResetPassword } from './components/ResetPassword';

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/recover-password" element={<RecoverPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
