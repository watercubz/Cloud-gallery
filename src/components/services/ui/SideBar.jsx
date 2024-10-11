import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloudinaryUploadWidget from "../widget/cloudinaryUploadWidget";
import GalleryComponent from "./GalleryComponent";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const Logout = () => {
    window.location.href = "https://youtu.be/xvFZjo5PgG0?si=jtJdnGME6yvpXKDQ";
  };
  console.log(Logout);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
  };

  const handleProfile = () => {
    navigate("/Profile");
  };

  const handleAI = () => {
    navigate("/AI");
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen font-sans">
      <h2 className="text-3xl font-bold mb-10 mt-10  text-amber-600">
        Gallery Photos
      </h2>
      <div className="flex justify-end w-full">
        <button
          className="absolute top-4 right-4 py-2 px-4 text-black transition-colors duration-150 border border-zinc-500 rounded-lg bg-white hover:bg-gray-100 z-20"
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
          className="absolute top-4 left-4 py-2 px-4 text-black transition-colors duration-150 border border-zinc-500 rounded-lg bg-white hover:bg-gray-100 z-20"
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
              <div className="h-full flex flex-col py-6 bg-white shadow-xl">
                <div className="flex items-center justify-between px-4">
                  <h2 className="text-xl font-bold text-yellow-600">
                    Cloud Local
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
                <div className="mt-4 px-4">
                  <p className="ml-2 text-gray-400">CLOUD WITH CLOUDINARY</p>
                </div>
                <div className="mt-4 px-4 h-full overflow-auto">
                  <div
                    role="button"
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-gray-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                  >
                    <div className="grid place-items-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="h-5 w-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3 16v2a2 2 0 002 2h14a2 2 0 002-2v-2m-6-5v8m0 0l-3-3m3 3l3-3m-3 3V3"
                        />
                      </svg>
                    </div>
                    <CloudinaryUploadWidget />
                  </div>
                  <div
                    role="button"
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                  >
                    <div className="grid place-items-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path d="M6.912 3a3 3 0 00-2.868 2.118l-2.411 7.838a3 3 0 00-.133.882V18a3 3 0 003 3h15a3 3 0 003-3v-4.162c0-.299-.045-.596-.133-.882l-2.412-7.838A3 3 0 0017.088 3H6.912zm13.823 9.75l-2.213-7.191A1.5 1.5 0 0017.088 4.5H6.912a1.5 1.5 0 00-1.434 1.059L3.265 12.75H6.11a3 3 0 012.684 1.658l.256.513a1.5 1.5 0 001.342.829h3.218a1.5 1.5 0 001.342-.83l.256-.512a3 3 0 012.684-1.658h2.844z"></path>
                      </svg>
                    </div>
                    <span>Notification</span>
                    <div className="grid place-items-center ml-auto justify-self-end">
                      <div className="relative grid items-center font-sans font-bold uppercase whitespace-nowrap select-none bg-blue-500/20 text-blue-900 py-1 px-2 text-xs rounded-full">
                        <span>14</span>
                      </div>
                    </div>
                  </div>
                  <div
                    role="button"
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                  >
                    <div className="grid place-items-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"></path>
                      </svg>
                    </div>
                    <button
                      onClick={handleProfile}
                      className="cursor-pointer hover:text-green-600"
                    >
                      Profile
                    </button>
                  </div>

                  <div
                    role="button"
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                  >
                    <div className="grid place-items-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="200"
                        height="200"
                        viewBox="0 0 200 200"
                        className="h-6 w-6"
                      >
                        <rect
                          x="50"
                          y="60"
                          width="100"
                          height="100"
                          fill="#9e9e9e"
                          rx="10"
                        />
                        <rect
                          x="70"
                          y="40"
                          width="60"
                          height="30"
                          fill="#616161"
                          rx="5"
                        />
                        <circle cx="80" cy="90" r="8" fill="#ffffff" />
                        <circle cx="120" cy="90" r="8" fill="#ffffff" />
                        <path
                          d="M60,130 Q100,150 140,130"
                          stroke="#ffffff"
                          fill="none"
                        />
                        <rect
                          x="80"
                          y="160"
                          width="40"
                          height="10"
                          fill="#ffeb3b"
                        />
                      </svg>
                    </div>
                    <button onClick={handleAI} className="hover:text-blue-500">
                      AI
                    </button>
                  </div>

                  <div
                    role="button"
                    className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none"
                  >
                    <div className="grid place-items-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                        className="h-5 w-5"
                      >
                        <path d="M12 2.25a.75.75 0 01.75.75v9a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM6.166 5.106a.75.75 0 010 1.06 8.25 8.25 0 1011.668 0 .75.75 0 111.06-1.06c3.808 3.807 3.808 9.98 0 13.788-3.807 3.808-9.98 3.808-13.788 0-3.808-3.807-3.808-9.98 0-13.788a.75.75 0 011.06 0z"></path>
                      </svg>
                    </div>
                    <button onClick={Logout} className="hover:text-red-600">
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Main content area */}
      <main className="flex justify-center items-center min-h-screen font-sans py-6">
        <GalleryComponent />
      </main>
    </div>
  );
}
