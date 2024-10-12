import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CloudinaryUploadWidget from "../widget/cloudinaryUploadWidget";
import GalleryComponent from "../ui/GalleryComponent";

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

  const handleImage = () => {
    navigate("/Image");
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
                        width="100"
                        height="100"
                        viewBox="0 0 64 64"
                        fill="orange"
                        className="h-6 w-6"
                      >
                        <path d="M32 2C25.4 2 20 6.9 20 12c0 2.3 1.1 4.3 2.9 5.7C19.5 20.5 16 25.5 16 32c0 10 12 16 16 16s16-6 16-16c0-6.5-3.5-11.5-6.9-14.3C42.9 16.3 44 14.3 44 12c0-5.1-5.4-10-12-10zm-6 36.1c-3.1 0-6-1.2-8-3.1 1.5-1.7 2.5-4.2 2.5-6.9 0-1.4-.2-2.8-.6-4.1 1.6.3 3.1.5 4.6.5 1.6 0 3.1-.2 4.6-.5-.4 1.3-.6 2.7-.6 4.1 0 2.7 1 5.2 2.5 6.9-2 1.9-4.9 3.1-8 3.1zm0-24.2c-1.4 0-2.5-1.1-2.5-2.5S24.6 9.3 26 9.3s2.5 1.1 2.5 2.5S27.4 13.9 26 13.9z" />
                      </svg>
                    </div>
                    <button
                      onClick={handleImage}
                      className="hover:text-blue-500"
                    >
                      AI Image
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
                        className="h-5 w-5"
                        fill="currentColor"
                      >
                        <path d="M12 0c-1.1 0-2 .9-2 2 0 .45.15.87.39 1.21l-2.61 2.61c-.48-.19-.99-.39-1.53-.39-1.1 0-2 .9-2 2s.9 2 2 2c.54 0 1.05-.2 1.53-.39l2.61 2.61c-.24.34-.39.76-.39 1.21 0 1.1.9 2 2 2s2-.9 2-2c0-.45-.15-.87-.39-1.21l2.61-2.61c.48.19.99.39 1.53.39 1.1 0 2-.9 2-2s-.9-2-2-2c-.54 0-1.05.2-1.53.39l-2.61-2.61C13.87 2.15 13.45 2 13 2c-1.1 0-2 .9-2 2s.9 2 2 2c.45 0 .87-.15 1.21-.39l2.61 2.61c-.19.48-.39.99-.39 1.53 0 1.1.9 2 2 2s2-.9 2-2c0-.54-.2-1.05-.39-1.53l2.61-2.61C22.85 8.15 23 7.73 23 7c0-1.1-.9-2-2-2s-2 .9-2 2c0 .54.2 1.05.39 1.53l-2.61 2.61c-.34-.24-.76-.39-1.21-.39-1.1 0-2 .9-2 2s.9 2 2 2c.45 0 .87-.15 1.21-.39l2.61 2.61c-.19.48-.39.99-.39 1.53 0 1.1.9 2 2 2s2-.9 2-2c0-.54-.2-1.05-.39-1.53l2.61-2.61C22.85 12.15 23 12.73 23 13c0 1.1-.9 2-2 2s-2-.9-2-2c0-.54.2-1.05.39-1.53l-2.61-2.61C16.13 10.85 15.45 11 15 11c-1.1 0-2 .9-2 2s.9 2 2 2c.45 0 .87-.15 1.21-.39l2.61 2.61c-.19.48-.39.99-.39 1.53 0 1.1.9 2 2 2s2-.9 2-2c0-.54-.2-1.05-.39-1.53l-2.61-2.61C19.85 12.15 20 12.73 20 13c0 1.1-.9 2-2 2s-2-.9-2-2c0-.54.2-1.05.39-1.53l-2.61-2.61C12.15 12.85 12 13.45 12 14c0 1.1-.9 2-2 2s-2-.9-2-2c0-.54.2-1.05.39-1.53l-2.61-2.61C4.15 12.85 4 13.45 4 14c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.1.9-2 2-2 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-.54.2-1.05.39-1.53l2.61-2.61C1.15 10.85 0 10 0 8c0-1.1.9-2 2-2s2 .9 2 2c0 .54-.2 1.05-.39 1.53l2.61 2.61C5.85 10.15 6 10.73 6 11c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.1.9-2 2-2 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-1.1.9-2 2-2 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-1.1.9-2 2-2 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-1.1.9-2 2-2 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-1.1.9-2 2-2 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-1.1.9-2 2-2s2 .9 2 2c0 .54-.2 1.05-.39 1.53l-2.61 2.61C4.15 10.85 4 11.45 4 12c0 1.1-.9 2-2 2s-2-.9-2-2c0-1.1.9-2 2-2 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-1.1.9-2 2-2 1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2c0-1.1.9-2 2-2z" />
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

                  <div className="flex items-center w-full p-3 rounded-lg text-start leading-tight transition-all hover:bg-blue-50 hover:bg-opacity-80 focus:bg-blue-50 focus:bg-opacity-80 active:bg-blue-50 active:bg-opacity-80 hover:text-blue-900 focus:text-blue-900 active:text-blue-900 outline-none">
                    <div className="grid place-items-center mr-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.54 5.47 7.59.4.07.55-.17.55-.39 0-.19-.01-.85-.01-1.55-2.01.36-2.43-.49-2.59-.94-.08-.2-.42-.94-.72-1.13-.25-.17-.6-.59-.01-.6.55-.01 1.01.51 1.15.73.67 1.14 1.76.81 2.18.62.07-.48.26-.81.48-.99-1.72-.19-3.52-.86-3.52-3.83 0-.85.3-1.55.78-2.1-.08-.19-.34-.95.07-1.98 0 0 .66-.21 2.16.81a7.55 7.55 0 0 1 1.97-.26c.67.01 1.34.09 1.97.26 1.5-1.02 2.16-.81 2.16-.81.41 1.03.15 1.79.07 1.98.48.55.78 1.25.78 2.1 0 2.97-1.81 3.64-3.53 3.83.27.23.51.68.51 1.38 0 1-.01 1.79-.01 2.03 0 .22.15.46.55.39C13.71 14.54 16 11.54 16 8c0-4.42-3.58-8-8-8z" />
                      </svg>
                    </div>
                    <a
                      className="hover:text-red-600"
                      href="https://github.com/watercubz/cloud-gallery"
                      target="_blank"
                    >
                      Github
                    </a>
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
