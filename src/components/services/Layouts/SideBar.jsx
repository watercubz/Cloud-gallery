import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GalleryComponent from "../ui/GalleryComponent";
import UploadFile from "../ui/UploadFile";
import AImage from "../ui/AImage";
import Profile from "../shared/Profile";
import Github from "../shared/Github";
import Logout from "../shared/Logout";

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/");
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
                  <UploadFile />

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

                  <AImage />

                  <Profile />

                  <Logout />

                  <Github />
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
