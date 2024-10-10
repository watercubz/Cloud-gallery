import Hero from "./ui/Hero";

export default function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Fondo blanco */}
      <div className="absolute inset-0 bg-white z-0" />
      {/* Fondo radial */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] z-10">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-fuchsia-400 opacity-20 blur-[100px]"></div>
      </div>
      {/* Contenido centrado */}
      <div className="flex flex-col items-center justify-center h-full z-20 relative">
        <Hero />
      </div>
    </div>
  );
}
