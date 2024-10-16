/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import Loading from './Loading';
const GalleryImage = ({ imageUrl }) => {
  return (
    <div className="inline-block">
      <img
        src={imageUrl}
        alt="Gallery Image"
        className="h-[300px] w-full max-w-[300px] rounded-lg object-cover m-2"
      />
    </div>
  );
};

const secretCloud = import.meta.env.VITE_SECRET_API_API_KEY;
const cloudName = import.meta.env.VITE_PUBLIC_CLOUD_NAME;

export default function GalleryComponent() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreeget] = useState(() => {
    return localStorage.getItem('agreed') === 'true' || false;
  });

  const cloudinaryUrl = `/api/v1_1/${cloudName}/resources/image/upload?prefix=cloud-folder&max_results=1000`;

  // TODO: intentar implementar la api de cloundary para produccion por el error de cors

  const fetchImages = async () => {
    setLoading(true);
    try {
      const response = await fetch(` ${cloudinaryUrl}`, {
        method: 'GET',
        headers: {
          Authorization: `Basic ${btoa(`${secretCloud}`)}`,
        },
      });

      if (!response.ok) {
        throw new Error('Error fetching images');
      }

      const data = await response.json();
      toast.success('imagenes cargadas');
      setImages(data.resources);
    } catch (error) {
      toast.error('Error', error);
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (agreed) {
      fetchImages();
    }
  }, [agreed]);

  const handleAgreement = () => {
    setAgreeget(true);
    localStorage.setItem('agreed', 'true');
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 600);
  }, []);

  return (
    <>
      {!agreed ? (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog ">
          <div className="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
            <div className=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
            <div className="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
              <div className="md:flex items-center">
                <div className="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                  <i className="bx bx-error text-3xl">&#9888;</i>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                  <p className="font-bold">AVISO</p>
                  <p className="text-sm text-gray-700 mt-1">
                    Al subir tus imágenes, aceptas que todos puedan verlas e
                    incluso modificarlas. Cloud Gallery no se hace responsable
                    del uso que se les dé a dichas imágenes. Al hacer clic,
                    aceptas esta política.
                  </p>
                </div>
              </div>
              <div className="text-center md:text-right mt-4 md:flex md:justify-end">
                <button
                  id="confirm-delete-btn"
                  className="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2"
                  onClick={handleAgreement}
                >
                  confirmar
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {loading ? (
            <Loading /> // Mensaje de carga
          ) : images.length > 0 ? (
            images.map((image) => (
              <GalleryImage key={image.public_id} imageUrl={image.secure_url} />
            ))
          ) : (
            <p>Error en la API de producción</p>
          )}
        </div>
      )}
    </>
  );
}
