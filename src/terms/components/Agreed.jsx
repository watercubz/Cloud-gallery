/* eslint-disable react/prop-types */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Graphicpt from '../../core/home/components/Graphicpt';

export default function ConfirmationDialog({ onCancel, onClick }) {
  return (
    <>
      <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog">
        <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div className="opacity-25 w-full h-full absolute z-10 inset-0"></div>
          <div className=" bg-white dark:bg-gray-800 rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
            <div className="md:flex items-center">
              <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                <i className="bx bx-error text-3xl">&#9888;</i>
              </div>
              <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p className="font-bold text-black dark:text-white">warning</p>
                <p className="text-sm text-black dark:text-white mt-1">
                  By accepting, click to confirm you are accepting all the terms
                  and conditions of MTAAI-core. If you have any questions or
                  concerns, do not hesitate to read the terms and conditions of
                  the platform.
                </p>
              </div>
            </div>
            <div className="text-center md:text-right mt-4 md:flex md:justify-end gap-5">
              <button
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-500 text-gray-100 hover:text-red-200 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                onClick={onClick}
                aria-label="Confirmar aceptación"
              >
                Confirmar
              </button>
              <button
                className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-700 text-white rounded-lg font-semibold text-sm md:ml-2 md:order-2 hover:text-gray-300"
                onClick={onCancel}
                aria-label="Denegar aceptación"
              >
                Denegar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export function ConfirmationComponent() {
  const [agreed, setAgreed] = useState(() => {
    return localStorage.getItem('agreed') === 'true';
  });

  const navigate = useNavigate();

  const handleAgreement = () => {
    setAgreed(true);
    localStorage.setItem('agreed', 'true');
  };

  const handleCancel = () => {
    navigate('/');
  };
  return (
    <>
      {!agreed ? (
        <ConfirmationDialog onClick={handleAgreement} onCancel={handleCancel} />
      ) : (
        <Graphicpt />
      )}
    </>
  );
}
