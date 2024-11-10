import CloudLogo from '../../../assets/img/Logo-cloudv2.png';
import { Github } from '@react-symbols/icons';
import { FaGoogle } from 'react-icons/fa';
import useAuthSession from '../../../hooks/useAuthSession';

export default function AuthComponent() {
  const { handleLoginGithub, handleLoginGoogle, handleHome } = useAuthSession();

  return (
    <section className="bg-gray-50 dark:bg-gray-900 min-h-screen flex items-center justify-center">
      <button
        className="absolute top-4 left-4 py-2 px-4 text-black dark:text-white transition-colors duration-150 border border-zinc-500 rounded-lg bg-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 z-20"
        onClick={handleHome}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className=" text-black dark:text-white"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div className="flex flex-col items-center justify-center w-full max-w-md px-6 py-8 mx-auto">
        <a
          href="#"
          className="flex items-center mb-6 text-2xl font-medium text-amber-600"
        >
          <img className="w-20 h-20 mr-2" src={CloudLogo} alt="logo" />
          Cloud Gallery
        </a>
        <section className="w-full bg-gray-100 rounded-lg shadow dark:border dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <article className="space-y-4 md:space-y-6">
              <div>
                <button
                  className="bg-gray-100   dark:bg-gray-900 border  text-black dark:text-white  border-gray-300 rounded-lg w-full p-2.5 hover:text-gray-500 flex items-center justify-center space-x-2 m-4"
                  onClick={handleLoginGithub}
                >
                  <span className="inline-flex items-center">
                    {' '}
                    <Github className="w-6 h-6 mr-2  text-black dark:text-white " />{' '}
                    Github
                  </span>
                </button>

                <button
                  className="bg-gray-100 dark:bg-gray-900 border border-gray-300 text-black dark:text-white rounded-lg w-full p-2.5 hover:text-gray-500 flex items-center justify-center space-x-2 m-4"
                  onClick={handleLoginGoogle}
                >
                  <span className="inline-flex items-center">
                    {' '}
                    <FaGoogle className="w-6 h-6 mr-2 text-black dark:text-white " />{' '}
                    Google
                  </span>
                </button>
              </div>
            </article>
          </div>
        </section>
      </div>
    </section>
  );
}
