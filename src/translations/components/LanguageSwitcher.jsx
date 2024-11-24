/* eslint-disable no-unused-vars */
import { useTranslation } from 'react-i18next';

const LanguageSwitcher = () => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  return (
    <div className="flex items-center space-x-4">
      <span onClick={() => changeLanguage('es')} className="cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg"
          alt="Español"
          className="w-8 h-5 rounded"
        />
      </span>
      <span onClick={() => changeLanguage('en')} className="cursor-pointer">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
          alt="English"
          className="w-8 h-5 rounded"
        />
      </span>
    </div>
  );
};

export default LanguageSwitcher;
