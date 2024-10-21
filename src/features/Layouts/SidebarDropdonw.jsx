import { useState } from 'react';
import AiText from '../ui/AiText';
import AImage from '../ui/AImage';
import UploadFile from '../ui/UploadFile';

export function SidebarDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <button
        onClick={toggleDropdown}
        className="flex items-center w-full p-3 text-left text-white rounded-lg"
      >
        Products
        <svg
          className={`w-5 h-5 ml-auto transform transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      {isOpen && (
        <div className="mt-2">
          <div className="py-2 px-4 cursor-pointer">
            <UploadFile />
          </div>
          <div className="py-2 px-4 cursor-pointer">
            <AiText />
          </div>
          <div className="py-2 px-4 cursor-pointer">
            <AImage />
          </div>
        </div>
      )}
    </div>
  );
}
