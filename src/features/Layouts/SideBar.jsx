import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GalleryComponent from '../gallery/components/GalleryComponent';
import DocsComponet from '../docs/components/DocsComponet';
import LogoutComponent from '../auth/pages/LogoutComponent';
import Profile from '../profile/pages/Profile';
import ImboxComponent from '../auth/components/ImboxComponent';
import ProductsComponent from '../Layouts/ProductsComponent';
import PricingButton from '../pricing/components/PricingButton';

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans bg-gray-950">
      <h2 className="text-3xl font-bold mb-10 mt-10  text-amber-600">
        Gallery Photos
      </h2>
      <div className="flex justify-end w-full">
        <button
          className="absolute top-4 rigth-4 py-2 px-4 text-white transition-colors duration-150 border border-zinc-500 rounded-lg bg-gray-900 hover:bg-gray-800 z-20"
          onClick={() => setOpen(true)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <button
          className="absolute top-4 left-4 py-2 px-4 text-white transition-colors duration-150 border border-zinc-500 rounded-lg bg-gray-900 hover:bg-gray-800 z-20"
          onClick={handleHome}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
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
      </div>

      {/* Sidebar Overlay */}
      {open && (
        <div className="fixed inset-0 z-50 overflow-hidden">
          <div className="absolute inset-0 bg-gray-500 bg-opacity-75"></div>
          <section className="absolute inset-y-0 right-0 pl-10 max-w-full flex">
            <div className="w-screen max-w-md transform transition-transform duration-300">
              <div className="h-full flex flex-col py-6 bg-gray-950 shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-4 font-medium text-amber-700">
                    Cloud Gallery
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
                      <Profile />
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

      {/* Main content area */}
      <main className="flex justify-center items-center min-h-screen font-sans py-6 bg-gray-950">
        <GalleryComponent />
      </main>
    </div>
  );
}
