import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
const Pricing = () => {
  const navigate = useNavigate();

  const handleHome = () => {
    navigate("/App");
  };
  return (
    <div className="flex flex-wrap justify-center mt-48">
      <button
        className="absolute top-4 left-4 py-2 px-4 text-black transition-colors duration-150 border border-zinc-500 rounded-lg bg-white hover:bg-gray-100 z-20"
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
      {/* Plan Estándar */}
      <div className="w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 m-4">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Free
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">0</span>
          <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          {/* Listado de beneficios */}
          <BenefitItem text="1 team members" />
          <BenefitItem text="200MB Cloud storage" />
          <BenefitItem text="Integration AI" />
          <BenefitItem text="Complete documentation" isAvailable={true} />
        </ul>
        <ChoosePlanButton />
      </div>

      {/* Plan Básico */}
      <div className="w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 m-4">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Basic Plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">29</span>
          <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <BenefitItem text="2 team member" />
          <BenefitItem text="5GB Cloud storage" />
          <BenefitItem text="Image generation with AI" />
          <BenefitItem text="Basic support" />
        </ul>
        <ChoosePlanButton />
      </div>

      {/* Plan Premium */}
      <div className="w-full max-w-xs p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-8 m-4">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
          Premium Plan
        </h5>
        <div className="flex items-baseline text-gray-900 dark:text-white">
          <span className="text-3xl font-semibold">$</span>
          <span className="text-5xl font-extrabold tracking-tight">99</span>
          <span className="ms-1 text-xl font-normal text-gray-500 dark:text-gray-400">
            /month
          </span>
        </div>
        <ul role="list" className="space-y-5 my-7">
          <BenefitItem text="10 team members" />
          <BenefitItem text="100GB Cloud storage" />
          <BenefitItem text="Priority support" />
          <BenefitItem text="Unlimited AI Image Generation" />
        </ul>
        <ChoosePlanButton />
      </div>
    </div>
  );
};

// Componente para el listado de beneficios
const BenefitItem = ({ text, isAvailable = true }) => (
  <li
    className={`flex ${isAvailable ? "" : "line-through decoration-gray-500"}`}
  >
    <svg
      className={`flex-shrink-0 w-4 h-4 ${
        isAvailable
          ? "text-blue-700 dark:text-blue-500"
          : "text-gray-400 dark:text-gray-500"
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

// Botón para elegir el plan
const ChoosePlanButton = () => (
  <button
    type="button"
    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-200 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900 font-medium rounded-lg text-sm px-5 py-2.5 inline-flex justify-center w-full text-center"
  >
    Choose plan
  </button>
);

export default Pricing;
