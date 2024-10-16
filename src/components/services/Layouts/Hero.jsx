import { useNavigate } from 'react-router-dom';
export default function Hero() {
  const navigate = useNavigate();

  const handleApp = () => {
    navigate('/App');
  };
  return (
    <section className=" text-black">
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
        <a
          className="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm  bg-emerald-500 rounded-full"
          role="alert"
        >
          <span className="text-xs bg-primary-600 rounded-full text-yellow-200 font-bold px-4 py-1.5 mr-3">
            New
          </span>{' '}
          <span className="text-sm font-medium text-gray-100">
            Cloud gallery power by cloudinary
          </span>
          <svg
            className="ml-2 w-5 h-5 text-zinc-900"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"></path>
          </svg>
        </a>
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-amber-500">
          Power your story with AI
        </h1>
        <p className="mb-8 text-lg font-normal text-yellow-600 lg:text-xl sm:px-16 xl:px-48">
          Cloud Gallery is an app that connects to Cloudinary and from which you
          can upload your photos. It is also powered by AI with which you can
          generate Halloween horror stories and detect Halloween images.
        </p>
        <div className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <button
            onClick={handleApp}
            className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-black rounded-lg bg-primary-700 hover:bg-primary-800 "
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
    </section>
  );
}
