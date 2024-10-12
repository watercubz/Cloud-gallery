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
                        viewBox="0 0 32 32"
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m18 10h2v2h-2z" />
                        <path d="m12 10h2v2h-2z" />
                        <path d="m26 20h-5v-2h1a2.0023 2.0023 0 0 0 2-2v-4h2v-2h-2v-2a2.0023 2.0023 0 0 0 -2-2h-2v-4h-2v4h-4v-4h-2v4h-2a2.0023 2.0023 0 0 0 -2 2v2h-2v2h2v4a2.0023 2.0023 0 0 0 2 2h1v2h-5a2.0023 2.0023 0 0 0 -2 2v8h2v-8h20v8h2v-8a2.0023 2.0023 0 0 0 -2-2zm-16-12h12v8h-12zm3 10h6v2h-6z" />
                        <path d="m0 0h32v32h-32z" fill="none" />
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
                        viewBox="0 0 32 32"
                        className="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="m18 10h2v2h-2z" />
                        <path d="m12 10h2v2h-2z" />
                        <path d="m26 20h-5v-2h1a2.0023 2.0023 0 0 0 2-2v-4h2v-2h-2v-2a2.0023 2.0023 0 0 0 -2-2h-2v-4h-2v4h-4v-4h-2v4h-2a2.0023 2.0023 0 0 0 -2 2v2h-2v2h2v4a2.0023 2.0023 0 0 0 2 2h1v2h-5a2.0023 2.0023 0 0 0 -2 2v8h2v-8h20v8h2v-8a2.0023 2.0023 0 0 0 -2-2zm-16-12h12v8h-12zm3 10h6v2h-6z" />
                        <path d="m0 0h32v32h-32z" fill="none" />
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
                        className="h-6 w-6"
                      >
                        <path d="M15.71,12.71a6,6,0,1,0-7.42,0,10,10,0,0,0-6.22,8.18,1,1,0,0,0,2,.22,8,8,0,0,1,15.9,0,1,1,0,0,0,1,.89h.11a1,1,0,0,0,.88-1.1A10,10,0,0,0,15.71,12.71ZM12,12a4,4,0,1,1,4-4A4,4,0,0,1,12,12Z" />
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
