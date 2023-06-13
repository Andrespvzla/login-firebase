import { useContext } from 'react';

import { AuthContext } from '../context/AuthContext';

import {
  IoLogoGithub,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoInstagram,
} from 'react-icons/io5';

export const Home = () => {
  const { logOut, user } = useContext(AuthContext);

  const handleLogOut = async () => {
    await logOut();
  };

  return (
    <div className="h-screen bg-gradient-to-br from-indigo-500 to-indigo-900 flex items-center justify-center px-14">
      <div className="px-10 py-10 bg-white rounded-3xl shadow-sm">
        <h1 className="text-4xl text-gray-800 font-bold">
          Welcome {user.displayName}! 👋
        </h1>
        <p className="font-medium text-lg text-gray-500 mt-4">
          You&apos;re successfully logged into this app, you will be able to
          learn more about me in my social media
        </p>
        <div className="flex gap-5 mt-4 text-2xl text-indigo-500">
          <a href="">
            <IoLogoGithub className="hover:scale-[1.2] transition-all" />
          </a>
          <a href="">
            <IoLogoLinkedin className="hover:scale-[1.2] transition-all" />
          </a>
          <a href="">
            <IoLogoTwitter className="hover:scale-[1.2] transition-all" />
          </a>
          <a href="">
            <IoLogoInstagram className="hover:scale-[1.2] transition-all" />
          </a>
        </div>
        <button
          onClick={handleLogOut}
          className="bg-indigo-500 text-white text-xl font-bold rounded-xl py-2 px-4 mt-4 hover:bg-indigo-600 hover:scale-[1.01] ease-in-out active:scale-[.98] active:duration-75 transition-all"
        >
          Log out
        </button>
      </div>
    </div>
  );
};
