import { useContext, useState } from 'react';

import { AuthContext } from '../context/AuthContext';

import { MdAlternateEmail, MdLockOutline } from 'react-icons/md';
import Swal from 'sweetalert2';

import { Link, useNavigate } from 'react-router-dom';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();
  const { googleLogin, login } = useContext(AuthContext);

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate('/');
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: error.message,
        icon: 'error',
        confirmButtonText: 'Try again',
      });
    }
  };

  const handleGoogleLogin = async () => {
    await googleLogin();
    navigate('/');
  };

  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex items-center justify-center">
        <div className="bg-white lg:px-32 px-10 py-20 rounded-3xl shadow-sm">
          <h1 className="text-5xl font-semibold text-indigo-500">Log in</h1>
          <p className="font-medium text-lg text-gray-500 mt-4">
            Please enter your credentials below to start
          </p>
          <div className="mt-8">
            <div>
              <label
                htmlFor="email"
                className="text-lg font-medium text-gray-800"
              >
                Email
              </label>
              <div className="relative flex items-center justify-end">
                <MdAlternateEmail className="w-5 h-5 absolute mr-5 text-gray-400" />
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="Type your email"
                  id="email"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent text-gray-800 focus:outline-indigo-300"
                />
              </div>
            </div>
            <div className="mt-8">
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
                  placeholder="Type your password"
                  id="password"
                  className="w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent focus:outline-indigo-300 text-gray-800"
                />
              </div>
            </div>
            <div className="mt-4 flex justify-between items-center">
              <div>
                <input
                  type="checkbox"
                  id="remember"
                  className="accent-indigo-500 active:scale-[1.2] active:duration-75 transition-all"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 font-medium text-base"
                >
                  Remember me
                </label>
              </div>
              <Link
                to={'/recover-password'}
                className="font-medium text-base text-indigo-500 hover:underline cursor-pointer"
              >
                Forgot password?
              </Link>
            </div>
            <div className="mt-8 flex flex-col gap-y-4">
              <button
                onClick={handleLogin}
                className="bg-indigo-500 text-white text-xl font-bold rounded-xl py-3 hover:bg-indigo-600 hover:scale-[1.01] ease-in-out active:scale-[.98] active:duration-75 transition-all"
              >
                Sign In
              </button>
              <button
                onClick={handleGoogleLogin}
                className="flex border-2 border-gray-100 py-3 rounded-xl items-center justify-center gap-2 hover:scale-[1.01] ease-in-out active:scale-[.98] active:duration-75 transition-all"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z"
                    fill="#EA4335"
                  />
                  <path
                    d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z"
                    fill="#34A853"
                  />
                  <path
                    d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z"
                    fill="#4A90E2"
                  />
                  <path
                    d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z"
                    fill="#FBBC05"
                  />
                </svg>
                Sign In with Google
              </button>
            </div>
            <div className="mt-8 flex justify-center items-center gap-2">
              <p className="font-medium text-base">
                Don&apos;t have an account yet?
              </p>
              <Link
                to={'/register'}
                className="text-indigo-500 font-bold text-base hover:underline"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden lg:grid h-full bg-gradient-to-br from-indigo-500 to-indigo-900 text-center content-center px-20">
        <h2 className="text-white text-3xl font-bold tracking-wide">
          Welcome! 👋
        </h2>
        <p className="font-light text-lg text-white mt-4">
          Take a look at my login <strong>Front-End Developer App</strong>, here
          you will see validations, auth with Google and so much more...
        </p>
      </div>
    </div>
  );
};
