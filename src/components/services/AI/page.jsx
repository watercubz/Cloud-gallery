import { Image } from "cloudinary-react";

const ImageComponent = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const imageUrl = searchParams.get("imageUrl");

  if (!imageUrl) {
    return <div>No hay imagen para mostrar.</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Imagen de Cloudinary</h1>
      <Image
        cloudName="dlcmvxm0v"
        publicId={imageUrl}
        className="rounded-lg shadow-lg"
      />
    </div>
  );
};

export default ImageComponent;
