import Hero from '../../Layouts/Hero';

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full">
        {/* Fondo radial */}
        <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]"></div>
        <div className="absolute top-0 z-[-2] h-screen w-screen dark:bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>

        {/* Contenido centrado */}
        <div className="">
          <Hero />
        </div>
      </div>
    </>
  );
}
