import Footer from './Footer';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import hero_dashboard from '../../assets/img/242shots_so.png';
import FaqComponent from './Faq-component';
import logo from '../../assets/img/MTAAI-core-icon.png';

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
    navigate('/');
  };

  const handlePremium = () => {
    navigate('/pricing');
  };

  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {!promo && (
        <div id="promo">
          <div className="fixed inset-x-0 bottom-0 pb-2 sm:pb-5 z-50">
            <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
              <div className="rounded-lg bg-cyan-500 p-2 shadow-lg sm:p-3">
                <div className="flex flex-wrap items-center justify-between">
                  <div className="flex w-0 flex-1 items-center">
                    <span className="flex rounded-lg bg-cyan-600 p-2">
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
                      <span className="md:hidden"> {t('discountMovil')}</span>
                      <span className="hidden md:inline">{t('discount')}</span>
                    </p>
                  </div>
                  <div className="order-3 mt-2 w-full flex-shrink-0 sm:order-2 sm:mt-0 sm:w-auto">
                    <button
                      onClick={handleLogin}
                      className="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-black shadow-sm hover:bg-indigo-50"
                    >
                      {t('Start')}
                    </button>
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

      <div className="overflow-x-hidden bg-gray-50 ">
        <header className="py-4 md:py-6 scroll-smooth">
          <div className="container px-4 mx-auto sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div className="flex-shrink-0">
                <a
                  href="#"
                  title=""
                  className="flex rounded outline-none focus:ring-1 focus:ring-gray-900 focus:ring-offset-2"
                >
                  <img className="w-auto h-14" src={logo} alt="Logo" />
                </a>
              </div>

              <div className="flex lg:hidden">
                <button
                  type="button"
                  className="text-gray-900"
                  onClick={() => setIsExpanded(!isExpanded)}
                  aria-expanded={isExpanded}
                >
                  {!isExpanded ? (
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M4 6h16M4 12h16M4 18h16"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-7 h-7"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  )}
                </button>
              </div>

              <div className="hidden lg:flex lg:ml-16 lg:items-center lg:justify-center lg:space-x-10 xl:space-x-16">
                <a href="#pricing" className="hover:underline">
                  Features
                </a>
                <a href="#pricing" className="hover:underline">
                  Pricing
                </a>
                <a href="#FAQ" className="hover:underline">
                  FAQ
                </a>
              </div>

              <div className="hidden lg:ml-auto lg:flex lg:items-center lg:space-x-10">
                <a href="#" className="nav-link">
                  Customer Login
                </a>
                <a
                  // href="/app"
                  className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-xl hover:bg-gray-600 font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  Sign up
                </a>
              </div>
            </div>

            {isExpanded && (
              <nav>
                <div className="px-1 py-8">
                  <div className="grid gap-y-7">
                    <a href="#pricing" className="hover:underline">
                      Pricing
                    </a>
                    <a href="#FAQ" className="hover:underline">
                      FAQ
                    </a>
                    <a
                      // href="/app"
                      className="inline-flex items-center justify-center px-6 py-3 text-base font-bold leading-7 text-white bg-gray-900 rounded-xl"
                      role="button"
                    >
                      Sign up
                    </a>
                  </div>
                </div>
              </nav>
            )}
          </div>
        </header>

        <section className="pt-12 bg-gray-50 sm:pt-16">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h1 className="px-6 text-lg text-gray-600 font-inter">
                AI-powered smart ad campaign monitor designed, for entrepreneurs
              </h1>
              <p className="mt-5 text-4xl font-bold leading-tight text-gray-900 sm:leading-tight sm:text-5xl lg:text-6xl lg:leading-tight font-pj">
                Turn your visitors into profitable{' '}
                <span className="relative inline-flex sm:inline">
                  <span className="bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] blur-lg filter opacity-30 w-full h-full absolute inset-0"></span>
                  <span className="relative"> business </span>
                </span>
              </p>
              <div className="px-8 sm:items-center sm:justify-center sm:px-0 sm:space-x-5 sm:flex mt-9">
                <a
                  // href="/app"
                  className="inline-flex items-center justify-center w-full px-8 py-3 text-lg font-bold text-white transition-all duration-200 bg-gray-900 border-2 border-transparent sm:w-auto rounded-xl font-pj hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
                  role="button"
                >
                  {t('btnGet')}
                </a>

                <a
                  href="#"
                  title=""
                  className="inline-flex items-center justify-center w-full px-6 py-3 mt-4 text-lg font-bold text-gray-900 transition-all duration-200 border-2 border-gray-400 sm:w-auto sm:mt-0 rounded-xl font-pj focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 hover:bg-gray-900 focus:bg-gray-900 hover:text-white focus:text-white hover:border-gray-900 focus:border-gray-900"
                  role="button"
                >
                  <svg
                    className="w-5 h-5 mr-2"
                    viewBox="0 0 18 18"
                    fill="none"
                    stroke="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.18003 13.4261C6.8586 14.3918 5 13.448 5 11.8113V5.43865C5 3.80198 6.8586 2.85821 8.18003 3.82387L12.5403 7.01022C13.6336 7.80916 13.6336 9.44084 12.5403 10.2398L8.18003 13.4261Z" />
                  </svg>
                  Watch demo
                </a>
              </div>
              <p className="mt-8 text-base text-gray-500 font-inter">
                7 Days free trial · No credit card required
              </p>
            </div>
          </div>
          <div className="pb-12 bg-white">
            <div className="relative">
              <div className="absolute inset-0 h-2/3 bg-gray-50"></div>
              <div className="relative mx-auto">
                <div className="lg:max-w-6xl lg:mx-auto">
                  <img
                    className="transform scale-110"
                    src={hero_dashboard}
                    alt="Hero Illustration"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section className="py-24 mt-36">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-14 text-center">
            <h2 className="text-4xl text-center font-bold text-gray-900 py-5">
              Awesome Features
            </h2>
            <p className="text-lg font-normal text-gray-500 max-w-md md:max-w-2xl mx-auto">
              It provides advanced features like real-time tracking of your ads,
              integration with meta apps, Facebook and Instagram (
              Monitoring/Recommendations by AI ) and more to explore.
            </p>
          </div>
          <div className="flex justify-center items-center gap-x-5 gap-y-8 lg:gap-y-0 flex-wrap md:flex-wrap lg:flex-nowrap lg:flex-row lg:justify-between lg:gap-x-8">
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-indigo-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-indigo-600">
                <svg
                  className="stroke-indigo-600 transition-all duration-500 group-hover:stroke-white"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10 27.5L15 25M15 25V21.25M15 25L20 27.5M8.75 14.375L12.5998 11.0064C13.1943 10.4862 14.1163 10.6411 14.5083 11.327L15.4917 13.048C15.8837 13.7339 16.8057 13.8888 17.4002 13.3686L21.25 10M2.5 2.5H27.5M26.25 2.5V13.25C26.25 17.0212 26.25 18.9069 25.0784 20.0784C23.9069 21.25 22.0212 21.25 18.25 21.25H11.75C7.97876 21.25 6.09315 21.25 4.92157 20.0784C3.75 18.9069 3.75 17.0212 3.75 13.25V2.5"
                    stroke=""
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Monitoring
              </h4>
              <p className="text-sm font-normal text-gray-500">
                plan and structure work how you want. Quickly organizing tasks.
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-pink-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-pink-600">
                <svg
                  className="stroke-pink-600 transition-all duration-500 group-hover:stroke-white"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 7.5C2.5 4.73858 4.73858 2.5 7.5 2.5C10.2614 2.5 12.5 4.73858 12.5 7.5C12.5 10.2614 10.2614 12.5 7.5 12.5C4.73858 12.5 2.5 10.2614 2.5 7.5Z"
                    stroke=""
                  ></path>
                  <path
                    d="M2.5 22.5C2.5 20.143 2.5 18.9645 3.23223 18.2322C3.96447 17.5 5.14298 17.5 7.5 17.5C9.85702 17.5 11.0355 17.5 11.7678 18.2322C12.5 18.9645 12.5 20.143 12.5 22.5C12.5 24.857 12.5 26.0355 11.7678 26.7678C11.0355 27.5 9.85702 27.5 7.5 27.5C5.14298 27.5 3.96447 27.5 3.23223 26.7678C2.5 26.0355 2.5 24.857 2.5 22.5Z"
                    stroke=""
                  ></path>
                  <path
                    d="M17.5 7.5C17.5 5.14298 17.5 3.96447 18.2322 3.23223C18.9645 2.5 20.143 2.5 22.5 2.5C24.857 2.5 26.0355 2.5 26.7678 3.23223C27.5 3.96447 27.5 5.14298 27.5 7.5C27.5 9.85702 27.5 11.0355 26.7678 11.7678C26.0355 12.5 24.857 12.5 22.5 12.5C20.143 12.5 18.9645 12.5 18.2322 11.7678C17.5 11.0355 17.5 9.85702 17.5 7.5Z"
                    stroke=""
                  ></path>
                  <path
                    d="M17.5 22.5C17.5 19.7386 19.7386 17.5 22.5 17.5C25.2614 17.5 27.5 19.7386 27.5 22.5C27.5 25.2614 25.2614 27.5 22.5 27.5C19.7386 27.5 17.5 25.2614 17.5 22.5Z"
                    stroke=""
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                App Integrations
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Bring all your tools and data together. Also join with hundreds
                of other apps.
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-teal-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-teal-600">
                <svg
                  className="stroke-teal-600 transition-all duration-500 group-hover:stroke-white"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.75 26.25H26.25M6.25 22.875C4.86929 22.875 3.75 21.8676 3.75 20.625V12.75C3.75 11.5074 4.86929 10.5 6.25 10.5C7.63071 10.5 8.75 11.5074 8.75 12.75V20.625C8.75 21.8676 7.63071 22.875 6.25 22.875ZM15 22.875C13.6193 22.875 12.5 21.8676 12.5 20.625V9.375C12.5 8.13236 13.6193 7.125 15 7.125C16.3807 7.125 17.5 8.13236 17.5 9.375V20.625C17.5 21.8676 16.3807 22.875 15 22.875ZM23.75 22.875C22.3693 22.875 21.25 21.8676 21.25 20.625V6C21.25 4.75736 22.3693 3.75 23.75 3.75C25.1307 3.75 26.25 4.75736 26.25 6V20.625C26.25 21.8676 25.1307 22.875 23.75 22.875Z"
                    stroke=""
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Statistics report
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Get real time insight into progress and allows teams to track
                their work habits
              </p>
            </div>
            <div className="relative w-full text-center max-md:max-w-sm max-md:mx-auto group md:w-2/5 lg:w-1/4">
              <div className="bg-orange-50 rounded-lg flex justify-center items-center mb-5 w-20 h-20 mx-auto cursor-pointer transition-all duration-500 group-hover:bg-orange-600">
                <svg
                  className="stroke-orange-600 transition-all duration-500 group-hover:stroke-white"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15.4167 12.0833V21.25M5.41667 21.25V20.8333C5.41667 19.262 5.41667 18.4763 5.90482 17.9882C6.39298 17.5 7.17865 17.5 8.75 17.5H22.0833C23.6547 17.5 24.4404 17.5 24.9285 17.9882C25.4167 18.4763 25.4167 19.262 25.4167 20.8333V21.25M15.4167 9.16667C13.8453 9.16667 13.0596 9.16667 12.5715 8.67851C12.0833 8.19036 12.0833 7.40468 12.0833 5.83333C12.0833 4.26198 12.0833 3.47631 12.5715 2.98816C13.0596 2.5 13.8453 2.5 15.4167 2.5C16.988 2.5 17.7737 2.5 18.2618 2.98816C18.75 3.47631 18.75 4.26198 18.75 5.83333C18.75 7.40468 18.75 8.19036 18.2618 8.67851C17.7737 9.16667 16.988 9.16667 15.4167 9.16667ZM7.08333 25.8333C7.08333 26.7538 6.33714 27.5 5.41667 27.5C4.49619 27.5 3.75 26.7538 3.75 25.8333C3.75 24.9129 4.49619 24.1667 5.41667 24.1667C6.33714 24.1667 7.08333 24.9129 7.08333 25.8333ZM17.0833 25.8333C17.0833 26.7538 16.3371 27.5 15.4167 27.5C14.4962 27.5 13.75 26.7538 13.75 25.8333C13.75 24.9129 14.4962 24.1667 15.4167 24.1667C16.3371 24.1667 17.0833 24.9129 17.0833 25.8333ZM27.0833 25.8333C27.0833 26.7538 26.3371 27.5 25.4167 27.5C24.4962 27.5 23.75 26.7538 23.75 25.8333C23.75 24.9129 24.4962 24.1667 25.4167 24.1667C26.3371 24.1667 27.0833 24.9129 27.0833 25.8333Z"
                    stroke=""
                  ></path>
                </svg>
              </div>
              <h4 className="text-lg font-medium text-gray-900 mb-3 capitalize">
                Generating a flow through monitoring
              </h4>
              <p className="text-sm font-normal text-gray-500">
                Automated processes to coordinate your teams and increase
                communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white mt-[200px]" id="pricing">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Are you ready to improve that?
          </h2>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-8">
            <div className="w-full lg:w-1/3 text-left">
              <h3 className="text-lg font-bold mb-4">Features</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✔</span>{' '}
                  Artificial intelligence tools for enhancing titles.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✔</span>{' '}
                  AI-powered recommendations for advertising photography.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✔</span> Connect
                  your Facebook and Instagram accounts
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✔</span> 24/7
                  priority support for personalized assistance.
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✔</span> Monitored
                  in real time
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-green-500 font-bold">✔</span> Cancel
                  anytime
                </li>
              </ul>
            </div>

            <div className="flex flex-col lg:flex-row gap-6">
              <div className="w-full lg:w-[300px] border rounded-lg shadow p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Free Monthly</h3>
                <div className="text-gray-400 line-through">$0</div>
                <div className="text-4xl font-extrabold text-black">$0.00</div>
                <button
                  disabled={true}
                  className="mt-6 px-6 py-2 bg-gray-400 text-white rounded-full"
                >
                  Free
                </button>
                <p className="mt-3 text-gray-500 text-sm">
                  Does not include premium features
                </p>
              </div>

              <div className="w-full lg:w-[300px] border rounded-lg shadow p-6 text-center">
                <h3 className="text-lg font-bold mb-2">Premium Monthly</h3>
                <div className="text-gray-400 line-through">$12</div>
                <div className="text-4xl font-extrabold text-black">$8.99</div>
                <button
                  // onClick={handlePremium}
                  className="mt-6 px-6 py-2 bg-black text-white rounded-full hover:bg-gray-800"
                >
                  Get Premium!
                </button>
                <p className="mt-3 text-gray-500 text-sm">7-day free trial.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FaqComponent />

      <div className="bg-slate-900">
        <Footer />
      </div>
    </>
  );
}
