import { useState } from 'react';
import toast from 'react-hot-toast';

const cloudName = import.meta.env.VITE_PUBLIC_CLOUD_NAME;
const presentName = import.meta.env.VITE_CLOUDINARY_FOLDER;

export default function useCloudUpload() {
  // ({ onUpload  }) ❌, infinite loop

  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);

  let onUpload; /** 
   We declare `onUpload` here because custom hooks do not allow passing destructuring directly as a parameter to the function,
   which could cause an infinite loop if attempted. ✅
  */

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

        // Call the onUpload function to update the gallery
        if (onUpload) {
          onUpload(data.secure_url); // Send the URL of the uploaded image
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
  return {
    uploading,
    handleChange,
    error,
  };
}
