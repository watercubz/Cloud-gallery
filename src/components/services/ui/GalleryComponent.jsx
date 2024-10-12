/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Loading from "./Loading";

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

const cloudName = import.meta.env.VITE_PUBLIC_CLOUD_NAME;

const secretCloud = import.meta.env.VITE_SECRET_API_APi_KEY;

export default function GalleryComponent() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const apiUrl =
    import.meta.env.MODE === "development"
      ? `/api/v1_1/${cloudName}/resources/image/upload?prefix=cloud-folder&max_results=1000`
      : `https://api.cloudinary.com/v1_1/${cloudName}/resources/image/upload?prefix=cloud-folder&max_results=1000`;
  // Ajusta según necesites

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(apiUrl, {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(`${secretCloud}`)}`, // Reemplaza con tus credenciales
          },
        });

        if (!response.ok) {
          throw new Error("Error fetching images");
        }

        const data = await response.json();
        setImages(data.resources);
      } catch (error) {
        console.error(error);
      }
    };

    fetchImages();
  }, [apiUrl]);

  useEffect(() => {
    setTimeout(() => setLoading(false), 300);
  }, []);

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p className="p-4 rounded flex items-center justify-center">
            <Loading />
          </p>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          {images.length > 0 ? (
            images.map((image) => (
              <GalleryImage key={image.public_id} imageUrl={image.secure_url} />
            ))
          ) : (
            <p></p>
          )}
        </div>
      )}
    </>
  );
}
