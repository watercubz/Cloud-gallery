/* eslint-disable no-unused-vars */
import { useState } from "react";

export default function CloudinaryUploadWidget() {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");

  const uploadImage = async (file) => {
    const url = `https://api.cloudinary.com/v1_1/dlcmvxm0v/image/upload`;
    const formData = new FormData();

    formData.append("file", file);
    formData.append("upload_preset", "upload-images");

    try {
      setUploading(true);
      const response = await fetch(url, {
        method: "POST",
        body: formData,
      });

      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setUploadedImageUrl(data.secure_url);
      } else {
        throw new Error(data.error.message);
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setUploading(false);
    }
  };
  // console.log(uploadImage);

  const handleChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      uploadImage(file);
    }
  };

  return (
    <div className="grid place-items-center mr-4">
      <label className="flex items-center">
        <span className=" me-2 mb-2 text-sm cursor-pointer  hover:text-emerald-400">
          upload files
        </span>
        <input
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="hidden" // Oculta el input
        />
      </label>
      {uploading && <p className="text-blue-500">Uploading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      {uploadedImageUrl && (
        <div className="mt-4">
          <p className="text-green-500">Image uploaded successfully!</p>
          {/* <img
            src={uploadedImageUrl}
            alt="Uploaded"
            className="mt-2 max-w-full h-auto rounded-lg shadow-md"
          /> */}
        </div>
      )}
    </div>
  );
}
