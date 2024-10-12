export default function Github() {
  return (
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
  );
}
