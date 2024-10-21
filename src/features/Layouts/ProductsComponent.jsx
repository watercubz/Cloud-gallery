import { SidebarDropdown } from './SidebarDropdonw';
export default function ProductsComponents() {
  return (
    <li>
      <a
        href="#"
        className="flex items-center p-2 text-gray-900 rounded-lg group"
      >
        <svg
          className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 18 20"
        >
          <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
        </svg>
        <span className="flex-1 ms-3 whitespace-nowrap">
          <SidebarDropdown />
        </span>
      </a>
    </li>
  );
}
