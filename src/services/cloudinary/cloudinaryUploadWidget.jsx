/* eslint-disable react/prop-types */
import { useState } from 'react';
import toast from 'react-hot-toast';

const cloudName = import.meta.env.VITE_PUBLIC_CLOUD_NAME;

const presentName = import.meta.env.VITE_CLOUDINARY_FOLDER;

export default function CloudinaryUploadWidget({ onUpload }) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  const uploadImage = async (file) => {
    const url = `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`;

    const formData = new FormData();

    formData.append('file', file);
    formData.append('upload_preset', presentName);

    try {
      setUploading(true);
      const response = await fetch(url, {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        toast.success('Image uploaded successfully!');

        // Llamar a la función onUpload para actualizar la galería
        if (onUpload) {
          onUpload(data.secure_url); // Envía la URL de la imagen subida
        }
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      toast.error('Image upload failed');
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      uploadImage(file);
    }
  };

  return (
    <div className="grid place-items-center mr-4">
      <label className="flex items-center">
        <span className="me-2 mb-2 text-sm cursor-pointer hover:text-emerald-400">
          Upload files
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden"
        />
      </label>
      {uploading && <p className="text-blue-500">Uploading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}
