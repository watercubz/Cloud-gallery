import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import Chess from "./3D/Chess";
import Hero from "./ui/Hero";
import Loading from "./ui/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      toast.success("Objecto 3D cargado 💚");
    }, 300);

    return () => clearTimeout(timer);
  });

  return (
    <>
      {loading ? (
        <div className="flex items-center justify-center min-h-screen">
          <p className="p-4 rounded flex items-center justify-center">
            <Loading />
          </p>
        </div>
      ) : (
        <div className="relative h-screen w-full">
          {/* Fondo blanco */}

          {/* Fondo radial */}
          <div className="absolute inset-0 -z-10 bg-white bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]" />
          <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]" />

          {/* Contenido centrado */}
          <div className="flex flex-col items-center justify-center h-full z-30 relative">
            <Hero />
          </div>
          <div className="flex">
            <Chess />
          </div>
        </div>
      )}
    </>
  );
}
