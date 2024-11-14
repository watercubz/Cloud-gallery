const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-md p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">
          Política de Privacidad de MTAAI-core
        </h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Introducción</h2>
          <p>
            MTAAI-core (Marketing Tracking and Advertising Improvement through
            AI) está comprometido con proteger la privacidad de nuestros
            usuarios. Esta política explica qué datos recopilamos, cómo los
            usamos, y los derechos de nuestros usuarios respecto a esta
            información. Al utilizar nuestros servicios, aceptas los términos de
            esta política de privacidad.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Recopilación de Información
          </h2>
          <p>
            Recopilamos información para mejorar nuestros servicios y optimizar
            el rendimiento de la publicidad de nuestros usuarios. Esto incluye:
          </p>
          <ul className="list-disc ml-6">
            <li>
              <strong>Información de la Cuenta:</strong> Nombre, correo
              electrónico, y cualquier otro dato necesario para crear y mantener
              tu cuenta.
            </li>
            <li>
              <strong>Datos de Uso:</strong> Información sobre tu interacción
              con la plataforma, como las campañas publicitarias gestionadas y
              las interacciones con la IA.
            </li>
            <li>
              <strong>Datos de Redes Sociales:</strong> Datos obtenidos de las
              cuentas de Facebook e Instagram conectadas para la optimización de
              la publicidad.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Uso de la Información</h2>
          <p>
            La información recopilada se utiliza para proporcionar, mejorar y
            personalizar nuestros servicios. Esto incluye:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Optimizar campañas publicitarias en función de los datos
              recopilados.
            </li>
            <li>
              Brindar recomendaciones personalizadas a través de nuestra
              inteligencia artificial.
            </li>
            <li>
              Mejorar la funcionalidad de la plataforma y desarrollar nuevas
              características.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Compartición de Información
          </h2>
          <p>
            MTAAI-core no compartirá tu información personal con terceros sin tu
            consentimiento, excepto en los siguientes casos:
          </p>
          <ul className="list-disc ml-6">
            <li>
              Para cumplir con requerimientos legales o proteger los derechos de
              MTAAI-core.
            </li>
            <li>
              En el caso de una fusión o adquisición, en cuyo caso notificaremos
              a los usuarios.
            </li>
            <li>
              Con proveedores de servicios externos que ayudan a operar nuestra
              plataforma (por ejemplo, servicios de almacenamiento y
              procesamiento de datos), bajo acuerdos de confidencialidad.
            </li>
          </ul>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Seguridad de la Información
          </h2>
          <p>
            Utilizamos medidas de seguridad para proteger la información de
            nuestros usuarios. Sin embargo, no podemos garantizar la seguridad
            absoluta de los datos en Internet. Instamos a los usuarios a tomar
            precauciones para proteger su información personal.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Derechos de los Usuarios
          </h2>
          <p>
            Tienes derecho a acceder, corregir o eliminar tu información
            personal en cualquier momento. Para ejercer estos derechos, puedes
            contactar con nosotros a través del soporte de MTAAI-core.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Cookies y Tecnologías de Seguimiento
          </h2>
          <p>
            MTAAI-core utiliza cookies y otras tecnologías de seguimiento para
            mejorar la experiencia del usuario y analizar el rendimiento de
            nuestra plataforma. Puedes ajustar la configuración de tu navegador
            para limitar el uso de cookies, aunque esto puede afectar algunas
            funciones del servicio.
          </p>
        </section>

        <section className="text-center mt-8">
          <p>
            Al utilizar MTAAI-core, confirmas que aceptas esta política de
            privacidad. Si tienes alguna pregunta o inquietud, no dudes en
            contactarnos.
          </p>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
