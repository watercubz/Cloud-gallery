/* eslint-disable react/prop-types */
import Loading from '../../ui/Loading';
import useFecthCloud from '../../../hooks/useFecthcloud';

const GalleryImage = ({ imageUrl }) => (
  <div className="inline-block">
    <img
      src={imageUrl}
      alt="Gallery Image"
      width="300"
      height="300"
      className="h-[300px] w-full max-w-[300px] rounded-lg object-cover m-2"
    />
  </div>
);

const ConfirmationDialog = ({ onConfirm, onCancel }) => (
  <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog">
    <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
      <div className="opacity-25 w-full h-full absolute z-10 inset-0"></div>
      <div className="bg-gray-800 rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
        <div className="md:flex items-center">
          <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
            <i className="bx bx-error text-3xl">&#9888;</i>
          </div>
          <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
            <p className="font-bold text-white">warning</p>
            <p className="text-sm text-white mt-1">
              By uploading your images, you agree that anyone can view and even
              edit them. Cloud Gallery is not responsible for the use of these
              images. By clicking, you agree to this policy.
            </p>
          </div>
        </div>
        <div className="text-center md:text-right mt-4 md:flex md:justify-end gap-5">
          <button
            className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-500 text-gray-100 hover:text-red-200 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
            onClick={onConfirm}
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
);

export default function GalleryComponent() {
  const { images, loading, agreed, handleAgreement, handleCancel } =
    useFecthCloud();

  return (
    <>
      {!agreed ? (
        <ConfirmationDialog
          onConfirm={handleAgreement}
          onCancel={handleCancel}
        />
      ) : (
        <div className="flex flex-wrap justify-center">
          {loading ? (
            <Loading /> // Mensaje de carga
          ) : Array.isArray(images) && images.length > 0 ? (
            images.map((image) => (
              <GalleryImage key={image.public_id} imageUrl={image.secure_url} />
            ))
          ) : (
            <p>Error en la API de producción ✅</p>
          )}
        </div>
      )}
    </>
  );
}
