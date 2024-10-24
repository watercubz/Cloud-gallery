import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const secretCloud = import.meta.env.VITE_SECRET_API_API_KEY;
const cloudName = import.meta.env.VITE_PUBLIC_CLOUD_NAME;

export default function useFecthCloud() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [agreed, setAgreeget] = useState(() => {
    return localStorage.getItem('agreed') === 'true' || false;
  });

  const navigate = useNavigate();

  // TODO: implementar supabse para el la subida y recuperacion de las imagenes, aun no se puede usar la api de cloudinary en prodiccion por el error de cors

  /*
   This change of service is due to the error that occurs when you upload the Cloudinary API to production without the Vite.js proxy,
   therefore there is a need to change cloud service, the best option so far is Supabase
    */

  const cloudinaryUrl = `/api/v1_1/${cloudName}/resources/image/upload?prefix=cloud-folder&max_results=1000`;
  /*
     This API will be deprecated because even if there is good documentation and updating of the SDK for React, it is very difficult to implement in production.
     The only way I can get it to work locally is with the common Vite proxy  ☠️
   */

  // TODO: intentar implementar la api de cloundary para produccion por el error de cors ❌

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

  const handleCancel = () => {
    navigate('/');
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
  return {
    handleAgreement,
    handleCancel,
    images,
    loading,
    agreed,
  };
}
