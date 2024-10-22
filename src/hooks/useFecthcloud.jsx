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

  const cloudinaryUrl = `/api/v1_1/${cloudName}/resources/image/upload?prefix=cloud-folder&max_results=1000`;

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
