const CookiePolicyPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-4">
          Política de Cookies
        </h1>
        <p className="text-lg text-gray-700">
          <strong>Última actualización:</strong> 2 de diciembre de 2024
        </p>
        <p className="mt-4 text-gray-700">
          En <strong>MTAAI-core</strong> (), utilizamos cookies y tecnologías
          similares para mejorar nuestra página web{' '}
          <a
            href="https://mtaai-core.lat"
            className="text-blue-600 hover:underline"
          >
            mtaai-core.lat
          </a>{' '}
          y optimizar tu experiencia como usuario. Esta política detalla qué son
          las cookies, cómo las usamos y cómo puedes gestionarlas.
        </p>
        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          ¿Qué son las cookies?
        </h2>
        <p className="mt-2 text-gray-700">
          Las cookies son pequeños archivos de texto que se guardan en tu
          dispositivo cuando visitas un sitio web. Estas cookies nos permiten:
          <ul className="list-disc pl-5 mt-2 text-gray-700">
            <li>Recordar tus preferencias.</li>
            <li>Analizar el uso de la web para mejorar su funcionamiento.</li>
            <li>Garantizar una experiencia fluida y personalizada.</li>
          </ul>
        </p>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          ¿Qué tipos de cookies utilizamos?
        </h2>
        <div className="mt-2 text-gray-700">
          <h3 className="font-semibold">Cookies esenciales</h3>
          <p>
            Estas cookies son necesarias para el correcto funcionamiento del
            sitio web y no pueden ser deshabilitadas desde nuestros sistemas.
          </p>
          <ul className="list-disc pl-5 mt-2">
            <li>Inicio de sesión de manera segura.</li>
            <li>Navegar por la web sin interrupciones.</li>
          </ul>
          <h3 className="font-semibold mt-4">Cookies funcionales</h3>
          <p>
            Estas cookies nos permiten recordar tus preferencias, como el idioma
            o la configuración del tema.
          </p>
          <h3 className="font-semibold mt-4">Cookies analíticas</h3>
          <p>
            Usamos cookies analíticas para recopilar información anónima sobre
            el uso de nuestra página web. Esto nos ayuda a entender cómo
            interactúan los usuarios y a mejorar continuamente la experiencia.
          </p>
          <p>
            Proveedor: Herramientas propias y de terceros (como Google
            Analytics).
          </p>
        </div>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">
          ¿Cómo gestionar las cookies?
        </h2>
        <p className="mt-2 text-gray-700">
          Puedes controlar las cookies desde las configuraciones de tu
          navegador. Aquí tienes enlaces a instrucciones para los navegadores
          más comunes:
        </p>
        <ul className="list-disc pl-5 mt-2 text-gray-700">
          <li>
            <a
              href="https://support.google.com/chrome/answer/95647?hl=es"
              className="text-blue-600 hover:underline"
            >
              Google Chrome
            </a>
          </li>
          <li>
            <a
              href="https://support.mozilla.org/es/kb/cookies-informacion-que-los-sitios-web-guardan-en-"
              className="text-blue-600 hover:underline"
            >
              Mozilla Firefox
            </a>
          </li>
          <li>
            <a
              href="https://support.apple.com/es-es/guide/safari/sfri11471/mac"
              className="text-blue-600 hover:underline"
            >
              Safari
            </a>
          </li>
          <li>
            <a
              href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-las-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              className="text-blue-600 hover:underline"
            >
              Microsoft Edge
            </a>
          </li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-6">Contacto</h2>
        <p className="mt-2 text-gray-700">
          Si tienes preguntas o inquietudes sobre esta Política de Cookies,
          puedes contactarnos en:{' '}
          <a
            href="mailto:eurysosagarcia@gmail.com"
            className="text-blue-600 hover:underline"
          >
            eurysosagarcia@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default CookiePolicyPage;
