import LogoutButton from './LogoutButton';
export default function LogoutComponent() {
  const { handleSingOut } = LogoutButton();
  return (
    <>
      <li>
        <a
          href="#"
          className="flex items-center p-2 text-white rounded-lg group"
        >
          <svg
            className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 18 16"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
            />
          </svg>
          <span className="flex-1 ms-3 whitespace-nowrap">
            <button onClick={handleSingOut} className="hover:text-red-600">
              signOut
            </button>
          </span>
        </a>
      </li>
    </>
  );
}
