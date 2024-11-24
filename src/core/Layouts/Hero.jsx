import Testimonials from '../../testimonials/components/Testimonials';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import hero_dashboard from '../../assets/img/dashboard_img.webp';

export default function Hero() {
  const [promo, setPromo] = useState(() => {
    return localStorage.getItem('promo') === 'true';
  });
  const navigate = useNavigate();

  const { t } = useTranslation();

  const Cancel = () => {
    setPromo(true);
    localStorage.setItem('promo', 'true');
  };

  const handleLogin = () => {
    navigate('/app');
  };

  return (
    <>
      {!promo && (
        <div id="promo">
          <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="rounded-lg bg-indigo-600 p-2 shadow-lg sm:p-3">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex w-0 flex-1 items-center">
                    <span className="flex rounded-lg bg-indigo-800 p-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      >
                        <path d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path>
                      </svg>
                    </span>
                    <p className="ml-3 truncate font-medium text-white">
                      <span className="md:hidden">
                        {' '}
                        ¡disfruta este mes de premium gratis! 🎉
                      </span>
                      <span className="hidden md:inline">
                        ¡disfruta este mes de premium totalmente gratis por
                        nuestro gran lanzamiento! 🎉
                      </span>
                    </p>
                  </div>
                  <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                    <a
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-indigo-600 shadow-sm hover:bg-indigo-50"
                      href="/pricing"
                    >
                      Empezar
                    </a>
                  </div>
                  <div className="order-2 flex-shrink-0 sm:order-3 sm:ml-2">
                    <button
                      type="button"
                      className="-mr-1 flex rounded-md p-2 hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white"
                      onClick={Cancel}
                    >
                      <span className="sr-only">Dismiss</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      >
                        <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <section className="pt-24 bg-white">
        <div className="px-12 mx-auto max-w-7xl">
          <div className="w-full mx-auto text-left md:w-11/12 xl:w-9/12 md:text-center">
            <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-normal text-gray-900 md:text-6xl md:tracking-tight">
              <span> {t('title')}</span>{' '}
              <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
                {t('paragraph')}
              </span>{' '}
              <span> {t('subparagraph')}</span>
            </h1>
            <p className="px-0 mb-8 text-lg text-gray-600 md:text-xl lg:px-24">
              {t('subtitle')}
            </p>
            <div className="mb-4 space-x-0 md:space-x-2 md:mb-8">
              <button
                onClick={handleLogin}
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg text-white bg-green-400 rounded-2xl sm:w-auto sm:mb-0"
              >
                {t('btnGet')}
                <svg
                  className="w-4 h-4 ml-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"></path>
                </svg>
              </button>
              <a
                href="https://discord.gg/KvpHYXC9GM"
                target="_blank"
                className="inline-flex items-center justify-center w-full px-6 py-3 mb-2 text-lg bg-gray-100 rounded-2xl sm:w-auto sm:mb-0"
              >
                {t('btnMore')}
                <svg
                  className="w-4 h-4 ml-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                </svg>
              </a>
            </div>
          </div>
          <div className="w-full mx-auto mt-20 text-center md:w-10/12">
            <div className="relative z-0 w-full mt-8">
              <div className="relative overflow-hidden shadow-2xl">
                <div className="flex items-center flex-none px-4 bg-green-400 rounded-b-none h-11 rounded-xl">
                  <div className="flex space-x-1.5">
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                    <div className="w-3 h-3 border-2 border-white rounded-full"></div>
                  </div>
                </div>
                <img src={hero_dashboard} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />
    </>
  );
}
