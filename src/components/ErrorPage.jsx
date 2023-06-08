import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <div className="h-screen bg-gradient-to-br from-indigo-500 to-indigo-900 flex items-center justify-center text-white px-14">
      <div>
        <h1 className="text-9xl opacity-75">404</h1>
        <h2 className="text-7xl mt-4 font-bold">Not Found</h2>
        <p className="text-base tracking-wider mt-4">
          Sorry, looks like we were unable to find that page, go back to the{' '}
          <Link className="font-bold hover:underline" to={'/'}>
            Home
          </Link>{' '}
          page...
        </p>
      </div>
    </div>
  );
};
