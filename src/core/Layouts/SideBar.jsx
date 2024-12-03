import { useState } from 'react';
import ThemeDropdown from './DropdownTheme';
import ImboxComponent from '../notification/components/ImboxComponent';
import PricingButton from '../../pricing/components/PricingButton';
import PageChat from '../chats/pages/page';
import ProductsComponent from './ProductsComponent';
import LanguageSwitcher from '../../translations/components/LanguageSwitcher';
import { useTranslation } from 'react-i18next';

import logo from '../../assets/img/MTAAI-core-icon.png';
import { ConfirmationComponent } from '../../terms/components/Agreed';
import ChatComponent from '../bot/components/Chatbot';

import LogoutButton from '../../profile/components/LogoutButton';
import { useNavigate } from 'react-router-dom';
import useProfileInfo from '../../hooks/useProfileInfo';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [profile, setProfile] = useState(false);
  const { profileData, error, loading } = useProfileInfo();

  const { handleSingOut } = LogoutButton();

  const navigate = useNavigate();
  const { t } = useTranslation();

  const handleProfile = () => {
    navigate('/profile');
  };

  if (loading) <p>cargando...</p>;
  if (error) <p>error...</p>;

  return (
    <div className="relative flex min-h-screen font-sans bg-gray-50 dark:bg-gray-950">
      <button
        className="absolute top-4 right-4 z-20 py-2 px-4 bg-gray-100 dark:bg-gray-800 border border-zinc-500 rounded-lg shadow-md md:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          className="text-black dark:text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <aside
        className={`fixed inset-y-0 left-0 z-10 transform bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex flex-col h-full w-64 p-5 space-y-4">
          <div className="flex items-center justify-between">
            <img className="w-[60px] h-[60px]" src={logo} alt="Logo" />
            <ThemeDropdown />
          </div>

          <div className="flex items-center ">
            <button
              onClick={() => setProfile(!profile)}
              className="flex text-sm bg-gray-800 rounded-full md:me-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
            >
              <span className="sr-only">Open user menu</span>
              <img
                className="w-8 h-8 rounded-full"
                src={profileData.avatarUrl}
                alt="user photo"
              />
            </button>
            <p className="text-lg font-medium dark:text-slate-300 text-slate-900 ml-3">
              {profileData.nickname}
            </p>
            {profile && (
              <div
                className="z-50 my-4 text-base list-none rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
                id="user-dropdown"
              >
                <ul className="py-2 px-3">
                  <li>
                    <button
                      onClick={handleSingOut}
                      className="block px-4 py-2 text-nowrap text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
                    >
                      Sign out
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>

          <nav className="space-y-4">
            <a className="flex items-center gap-2 p-2 text-gray-500 transition-colors duration-200 rounded-lg  dark:text-gray-400 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              <ProductsComponent />
            </a>

            <a className="flex items-center gap-2 p-2 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark: hover:text-blue-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
              </svg>
              <button className="text-sm font-medium" onClick={handleProfile}>
                {t('profile')}
              </button>
            </a>

            <a className="flex items-center gap-2 p-2 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
              </svg>
              <span className="text-sm font-medium">
                <ImboxComponent />
              </span>
            </a>
            <a className="flex items-center gap-2 p-2 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
              <svg
                fill="none"
                className="w-6  h-6"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m17 2h-10c-2.76 0-5 2.23-5 4.98v5.98 1c0 2.75 2.24 4.98 5 4.98h1.5c.27 0 .63.18.8.4l1.5 1.99c.66.88 1.74.88 2.4 0l1.5-1.99c.19-.25.49-.4.8-.4h1.5c2.76 0 5-2.23 5-4.98v-6.98c0-2.75-2.24-4.98-5-4.98zm-9 10c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1zm4 0c-.56 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.44 1-1 1z"
                  fill="#292d32"
                />
              </svg>
              <span className="text-sm font-medium">
                <PageChat />
              </span>
            </a>
            <a className="flex items-center gap-2 p-2 text-gray-500 transition-colors duration-200 rounded-lg hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="icon-sm shrink-0"
              >
                <path
                  d="M12.5001 3.44338C12.1907 3.26474 11.8095 3.26474 11.5001 3.44338L4.83984 7.28868C4.53044 7.46731 4.33984 7.79744 4.33984 8.1547V15.8453C4.33984 16.2026 4.53044 16.5327 4.83984 16.7113L11.5001 20.5566C11.8095 20.7353 12.1907 20.7353 12.5001 20.5566L19.1604 16.7113C19.4698 16.5327 19.6604 16.2026 19.6604 15.8453V8.1547C19.6604 7.79744 19.4698 7.46731 19.1604 7.28868L12.5001 3.44338ZM10.5001 1.71133C11.4283 1.17543 12.5719 1.17543 13.5001 1.71133L20.1604 5.55663C21.0886 6.09252 21.6604 7.0829 21.6604 8.1547V15.8453C21.6604 16.9171 21.0886 17.9075 20.1604 18.4434L13.5001 22.2887C12.5719 22.8246 11.4283 22.8246 10.5001 22.2887L3.83984 18.4434C2.91164 17.9075 2.33984 16.9171 2.33984 15.8453V8.1547C2.33984 7.0829 2.91164 6.09252 3.83984 5.55663L10.5001 1.71133Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M9.44133 11.4454L9.92944 9.98105C10.0321 9.67299 10.4679 9.67299 10.5706 9.98105L11.0587 11.4454C11.2941 12.1517 11.8483 12.7059 12.5546 12.9413L14.019 13.4294C14.327 13.5321 14.327 13.9679 14.019 14.0706L12.5546 14.5587C11.8483 14.7941 11.2941 15.3483 11.0587 16.0546L10.5706 17.519C10.4679 17.827 10.0321 17.827 9.92944 17.519L9.44133 16.0546C9.2059 15.3483 8.65167 14.7941 7.94537 14.5587L6.48105 14.0706C6.17298 13.9679 6.17298 13.5321 6.48105 13.4294L7.94537 12.9413C8.65167 12.7059 9.2059 12.1517 9.44133 11.4454Z"
                  fill="currentColor"
                ></path>
                <path
                  d="M14.4946 8.05961L14.7996 7.14441C14.8638 6.95187 15.1362 6.95187 15.2004 7.14441L15.5054 8.05961C15.6526 8.50104 15.999 8.84744 16.4404 8.99458L17.3556 9.29965C17.5481 9.36383 17.5481 9.63617 17.3556 9.70035L16.4404 10.0054C15.999 10.1526 15.6526 10.499 15.5054 10.9404L15.2004 11.8556C15.1362 12.0481 14.8638 12.0481 14.7996 11.8556L14.4946 10.9404C14.3474 10.499 14.001 10.1526 13.5596 10.0054L12.6444 9.70035C12.4519 9.63617 12.4519 9.36383 12.6444 9.29965L13.5596 8.99458C14.001 8.84744 14.3474 8.50104 14.4946 8.05961Z"
                  fill="currentColor"
                ></path>
              </svg>
              <span className="text-sm font-medium">
                <PricingButton />
              </span>
            </a>
          </nav>
        </div>
      </aside>

      <main
        className={`flex-1 p-6 transition-all duration-300 ${
          isOpen && 'md:ml-64'
        }`}
      >
        <p className="ml-2 mt-2">
          <p className="font-Poppins text-sm text-gray-400">
            Dashboards / Default
          </p>
          <h2 className="font-semibold text-2xl text-slate-800">
            Main Dashboard
          </h2>
        </p>
        <ConfirmationComponent />
        <ChatComponent />
      </main>
    </div>
  );
}
