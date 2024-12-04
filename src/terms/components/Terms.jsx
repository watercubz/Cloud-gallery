import TermsCard from './TermsCard';
import { Terms } from '../../constants/Terms';
import { Link } from 'react-router-dom';

const TermsAndConditions = () => {
  return (
    <div className="w-full">
      <section className="w-full relative overflow-hidden lg:py-28 py-16">
        <div className="px-12 xl:px-20">
          <div className="flex flex-col md:flex-row w-full gap-8">
            <div className="w-full md:max-w-[176px] md:border-r md:border-gray-200">
              <ul className="tab-nav flex flex-col md:items-start items-center lg:gap-10 gap-6">
                <li>
                  <Link to="/terms" className="font-medium text-base leading-7">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="font-medium text-base leading-7 text-gray-500 hover:text-indigo-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full tab-pane max-md:px-4">
              <h2 className="font-manrope font-bold lg:text-4xl text-3xl text-gray-900 mb-5">
                Terms of Use
              </h2>
              <div className="flex items-center gap-3 lg:mb-10 mb-8">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0054 8V12.5322C12.0054 12.8286 12.1369 13.1098 12.3645 13.2998L15 15.5M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                    stroke="#4F46E5"
                  />
                </svg>
                <p className="font-medium text-xl leading-8 text-indigo-600">
                  Last updated: December 2, 2024
                </p>
              </div>

              <h5 className="font-manrope font-bold md:text-3xl text-2xl text-gray-900 mb-4">
                Contents
              </h5>
              <ul className="ml-8 lg:mb-10 mb-8">
                {Terms.map((section, index) => (
                  <li
                    key={index}
                    className="list-decimal font-normal text-lg text-gray-500"
                  >
                    <a className="hover:text-indigo-600">{section.title}</a>
                  </li>
                ))}
              </ul>

              <div>
                {Terms.map((section, index) => (
                  <div key={index} className="mb-8">
                    <TermsCard
                      title={section.title}
                      content={section.content}
                      confirm={section.confirm}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsAndConditions;
