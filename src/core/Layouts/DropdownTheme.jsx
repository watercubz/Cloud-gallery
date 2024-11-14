import { useState, useEffect } from 'react';
import { IoSunny, IoMoon, IoDesktop } from 'react-icons/io5';

export default function ThemeDropdown() {
  const [theme, setTheme] = useState('system');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else if (theme === 'light') {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative ml-5">
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="flex items-center space-x-2"
      >
        {theme === 'dark' && <IoMoon className="w-6 h-6 text-gray-700" />}
        {theme === 'light' && <IoSunny className="w-6 h-6 text-yellow-300" />}
        {theme === 'system' && <IoDesktop className="w-6 h-6 text-gray-500" />}
      </button>

      {isDropdownOpen && (
        <div className="absolute -right-14  mt-2 w-32 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5">
          <button
            onClick={() => handleThemeChange('light')}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Claro
          </button>
          <button
            onClick={() => handleThemeChange('dark')}
            className="w-full px-4 py-2 text-left text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            Oscuro
          </button>
        </div>
      )}
    </div>
  );
}
