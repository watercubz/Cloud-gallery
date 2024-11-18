/* eslint-disable react/prop-types */
export function TestimonialCard({ avatar, name, text }) {
  return (
    <div className="w-full mx-auto rounded-lg dark:bg-gray-900 bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
      <div className="w-full flex mb-4 items-center">
        <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
          <img src={avatar} alt={name} />
        </div>
        <div className="flex-grow pl-3">
          <h6 className="font-bold text-sm uppercase text-gray-600  dark:text-gray-300">
            {name}
          </h6>
        </div>
      </div>
      <div className="w-full">
        <p className="text-sm leading-tight dark:text-gray-300">
          <span className="text-lg leading-none italic font-bold text-gray-400 dark:text-gray-300 mr-1">
            “
          </span>
          {text}
          <span className="text-lg leading-none italic font-bold text-gray-400 dark:text-gray-300 ml-1">
            ”
          </span>
        </p>
      </div>
    </div>
  );
}
