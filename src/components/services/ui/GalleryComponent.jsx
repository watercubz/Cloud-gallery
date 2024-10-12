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

const secretCloud = import.meta.env.VITE_SECRET_API_APi_KEY;
// const cloudName = import.meta.env.VITE_PUBLIC_CLOUD_NAMe;

export default function GalleryComponent() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  const cloudinaryUrl = `/api/v1_1/dlcmvxm0v/resources/image/upload?prefix=cloud-folder&max_results=1000`;

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(` ${cloudinaryUrl}`, {
          method: "GET",
          headers: {
            Authorization: `Basic ${btoa(`${secretCloud}`)}`,
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
  }, [cloudinaryUrl]);

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
