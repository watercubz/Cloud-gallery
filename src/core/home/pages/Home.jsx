import Hero from '../../Layouts/Hero';

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Fondo radial */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>

        <div className="absolute inset-0 -z-10 hidden dark:flex h-full w-full bg-black bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 m-auto h-[310px] w-[310px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#fbfbfb36,#000)] blur-[100px]"></div>
        </div>

        {/* Contenido centrado */}
        <div className="">
          <Hero />
        </div>

        {/* Asegúrate de que el componente Chess sea responsivo */}
        <div className="hidden xl:flex justify-center items-center mt-4">
          {/* aca va las fotos del hero */}
        </div>
      </div>
    </>
  );
}
