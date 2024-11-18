import { useNavigate } from 'react-router-dom';

/* eslint-disable react/prop-types */
const Pricing = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/App');
  };

  return (
    <section className="flex flex-wrap justify-center dark:bg-gray-950 min-h-screen p-8">
      <div className="flex flex-wrap justify-center mt-20 gap-6">
        <button
          className="absolute top-4 left-4 py-2 px-4 text-black dark:text-white transition-colors duration-150 border border-zinc-500 rounded-lg dark:bg-gray-800 z-20"
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

        {/* Card Free */}
        <div className="w-full max-w-xs p-4 dark:bg-gray-900 text-white border border-gray-200 rounded-xl shadow sm:p-8 flex flex-col justify-between h-[520px]">
          <h5 className="mb-4 text-xl font-medium text-black dark:text-white">
            Free
          </h5>
          <div className="flex items-baseline text-black dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">0.00</span>
            <span className="ms-1 text-xl font-normal text-black dark:text-white">
              /month
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7 flex-grow">
            <BenefitItem
              text="Artificial intelligence tools for enhancing titles."
              isAvailable={false}
            />
            <BenefitItem
              text="AI-powered recommendations for advertising photography."
              isAvailable={false}
            />
            <BenefitItem
              text="Connect your Facebook and Instagram accounts"
              isAvailable={true}
            />
            <BenefitItem text="Chat support" isAvailable={true} />
            <BenefitItem text="Monitored in real time" isAvailable={true} />
          </ul>
          <ChoosePlanButton choseName="Free" />
        </div>

        {/* Card Premium */}
        <div className="w-full max-w-xs p-4 dark:bg-gray-900 text-white border border-gray-200 rounded-xl shadow sm:p-8 flex flex-col justify-between h-[520px]">
          <h5 className="mb-4 text-xl font-medium text-black dark:text-white">
            Premium
          </h5>
          <div className="flex items-baseline text-black dark:text-white">
            <span className="text-3xl font-semibold">$</span>
            <span className="text-5xl font-extrabold tracking-tight">8.99</span>
            <span className="ms-1 text-xl font-normal text-black dark:text-white">
              /month
            </span>
          </div>
          <ul role="list" className="space-y-5 my-7 flex-grow">
            <BenefitItem
              text="Artificial intelligence tools for enhancing titles."
              isAvailable={true}
            />
            <BenefitItem
              text="AI-powered recommendations for advertising photography."
              isAvailable={true}
            />
            <BenefitItem
              text="Connect your Facebook and Instagram accounts"
              isAvailable={true}
            />
            <BenefitItem
              text="24/7 priority support for personalized assistance."
              isAvailable={true}
            />
            <BenefitItem text="Monitored in real time" isAvailable={true} />
          </ul>
          <ChoosePlanButton choseName="Choose Plan" />
        </div>
      </div>
    </section>
  );
};

const BenefitItem = ({ text, isAvailable = true }) => (
  <li
    className={`flex ${isAvailable ? '' : 'line-through decoration-gray-500'}`}
  >
    <svg
      className={`flex-shrink-0 w-4 h-4 ${
        isAvailable
          ? 'text-blue-700 dark:text-blue-500'
          : 'text-gray-400 dark:text-gray-500'
      }`}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 20 20"
    >
      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
    </svg>
    <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400 ms-3">
      {text}
    </span>
  </li>
);

const ChoosePlanButton = ({ choseName }) => (
  <button
    type="button"
    className="text-white bg-gray-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center items-center"
  >
    {choseName}
  </button>
);

export default Pricing;
