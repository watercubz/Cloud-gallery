import { Github } from '@react-symbols/icons';
import { useNavigate } from 'react-router-dom';
import { GoArrowRight } from 'react-icons/go';
import { FaXTwitter } from 'react-icons/fa6';
import ThemeDropdown from './DropdownTheme';

export default function Hero() {
  const navigate = useNavigate();
  const handleApp = () => {
    navigate('/App');
  };

  return (
    <div>
      <div className="relative mx-auto h-screen w-full max-w-7xl px-6 md:px-8 lg:px-12">
        <header className="flex items-center justify-between py-8">
          <div />
          <nav className="flex flex-wrap items-center gap-6 lg:justify-end lg:ml-0 ml-10">
            <a
              href="https://x.com/watercubz"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-black dark:text-white hover:text-neutral-400"
            >
              <FaXTwitter
                className="h-6 w-8 text-neutral-600 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                strokeWidth={5}
              />
              Twitter
            </a>
            <a
              href="https://github.com/watercubz/Cloud-gallery"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-black dark:text-white hover:text-neutral-400"
            >
              <Github
                className="h-6 w-8 text-neutral-600 transition-colors hover:text-neutral-600 dark:text-neutral-200 dark:hover:text-neutral-400"
                strokeWidth={5}
              />
              Github
            </a>
            <ThemeDropdown />
          </nav>
        </header>
        <div className="pt-8">
          <div className="relative mx-auto flex max-w-2xl flex-col items-center">
            <div className="mb-8 flex">
              <a
                href="https://github.com/watercubz/Cloud-gallery"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex"
              >
                <span className="relative inline-block overflow-hidden rounded-full p-[1px]">
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#a9a9a9_0%,#0c0c0c_50%,#a9a9a9_100%)] dark:bg-[conic-gradient(from_90deg_at_50%_50%,#171717_0%,#737373_50%,#171717_100%)]" />
                  <div className="inline-flex h-full w-full cursor-pointer justify-center rounded-full bg-gray-50 px-3 py-1 text-xs font-medium leading-5 text-black dark:text-white backdrop-blur-xl dark:bg-black">
                    New <span className="ml-2">features ⚡️</span>
                    <span className="inline-flex items-center pl-2  text-black dark:text-white">
                      Read more{' '}
                      <GoArrowRight className="ml-2 w-5 h-5 text-gray-400 font-bold" />
                    </span>
                  </div>
                </span>
              </a>
            </div>
            <h2 className="text-center text-3xl font-medium text-gray-700 sm:text-6xl">
              Collection of photos from around the world{' '}
              <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-600 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent ">
                share and have fun
              </span>
            </h2>
            <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200">
              Share your photos with the world and generate stories with AI,
              <span className="cursor-wait opacity-90"> chat</span> integration
              with everyone
            </p>
            <div className="mt-10 flex gap-4"></div>
          </div>
        </div>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black dark:text-white rounded-lg bg-primary-700 hover:text-gray-300"
            onClick={handleApp}
          >
            Get Started
            <svg
              className="ml-2 -mr-1 w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
