/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";

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
export default function GalleryComponent() {
  const [images, setImages] = useState([]);
  const cloudinaryUrl = `/api/v1_1/dlcmvxm0v/resources/image/upload?prefix=cloud-folder&max_results=1000`;
  // Ajusta según necesites

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(cloudinaryUrl, {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa("")}`, // Reemplaza con tus credenciales
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
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-center">
        <div>
          {images.map((image) => (
            <GalleryImage key={image.public_id} imageUrl={image.secure_url} />
          ))}
        </div>
      </div>
    </>
  );
}
