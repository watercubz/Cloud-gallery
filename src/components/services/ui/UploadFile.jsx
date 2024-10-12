import CloudinaryUploadWidget from "../widget/cloudinaryUploadWidget";
export default function UploadFile() {
  return (
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
  );
}
