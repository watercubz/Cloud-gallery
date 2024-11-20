import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DocsComponet from '../../docs/components/DocsComponet';

import ImboxComponent from '../notification/components/ImboxComponent';
import ProductsComponent from '../Layouts/ProductsComponent';

import PricingButton from '../../pricing/components/PricingButton';
import PageChat from '../chats/pages/page';

import supabase from '../../utils/supabase/supabase';
import LogoutComponent from '../../profile/components/LogoutComponent';

import ThemeDropdown from './DropdownTheme';
import { ConfirmationComponent } from '../../terms/components/Agreed';

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState('');
  const [name, setNickname] = useState('');

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  useEffect(() => {
    const ImageProfile = async () => {
      const { data, error } = await supabase.auth.getSession();
      if (error) {
        console.log('error', error);
      }
      let fullName = data.session.user.user_metadata.full_name;
      setImage(data.session.user.user_metadata.avatar_url);
      setNickname(data.session.user.user_metadata.user_name || fullName);
    };
    ImageProfile();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-gray-50 dark:bg-gray-950">
      <h2 className="text-3xl font-bold mb-10 mt-10  text-amber-600">
        Dashboard
      </h2>
      <ThemeDropdown />
      <div className="flex justify-end w-full">
        <button
          className="absolute top-4 right-4 py-2 px-4  bg-gray-50 dark:bg-gray-950 transition-colors duration-150 border border-zinc-500 rounded-lg z-20"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className=" text-black dark:text-white"
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
        <button
          className="absolute top-4 left-4 py-2 px-4  bg-gray-50 dark:bg-gray-950 transition-colors duration-150 border border-zinc-500 rounded-lg  z-20"
          onClick={handleHome}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            className=" text-black dark:text-white"
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
      </div>
      {open && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="w-screen max-w-md transform transition-transform duration-300">
              <div className="h-full flex flex-col py-6 bg-white shadow-xl dark:bg-gray-950 ">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-4 font-bold text-amber-600">
                    MTAAI-core
                    <div className="flex items-center">
                      {image ? (
                        <div className="flex items-center">
                          <img
                            src={image}
                            alt="Profile"
                            className="h-10 w-10 rounded-full mr-2 mt-3 "
                          />
                          <p className="text-lg font-medium   dark:text-slate-300 text-slate-900 mt-2 cursor-pointer">
                            {name}
                          </p>
                        </div>
                      ) : (
                        <p className="text-red-600">Error</p>
                      )}
                    </div>
                  </h2>
                  <button
                    onClick={() => setOpen(false)}
                    className="text-gray-500 hover:text-gray-700 cursor-pointer"
                  >
                    <span className="sr-only">Close</span>
                    <svg
                      className="h-6 w-6"
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
                  </button>
                </div>
                <div className="mt-5 px-4 h-full overflow-auto">
                  <div className="h-full px-3 py-4 overflow-y-auto">
                    <ul className="space-y-2 font-medium">
                      <ProductsComponent />
                      <ImboxComponent />
                      <PageChat />
                      <PricingButton />
                      <DocsComponet />
                      <LogoutComponent />
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
      <main className="flex justify-center items-center min-h-screen font-sans py-6  bg-gray-50 dark:bg-gray-950">
        <ConfirmationComponent />
      </main>
    </div>
  );
}
