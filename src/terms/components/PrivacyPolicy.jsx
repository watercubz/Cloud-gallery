import PrivacyCard from './PrivacyCard';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  const sections = [
    {
      title: 'Introducción',
      content: `MTAAI-core (Marketing Tracking and Advertising Improvement through AI) está comprometido con proteger la privacidad de nuestros usuarios. 
      Esta política explica qué datos recopilamos, cómo los usamos, y los derechos de nuestros usuarios respecto a esta información. 
      Al utilizar nuestros servicios, aceptas los términos de esta política de privacidad.`,
    },
    {
      title: 'Recopilación de Información',
      content: `Recopilamos información para mejorar nuestros servicios y optimizar el rendimiento de la publicidad de nuestros usuarios. Esto incluye:
        - Información de la Cuenta: Nombre, correo electrónico, y cualquier otro dato necesario para crear y mantener tu cuenta.
        - Datos de Uso: Información sobre tu interacción con la plataforma, como las campañas publicitarias gestionadas y las interacciones con la IA.
        - Datos de Redes Sociales: Datos obtenidos de las cuentas de Facebook e Instagram conectadas para la optimización de la publicidad.`,
    },
    {
      title: 'Uso de la Información',
      content: `La información recopilada se utiliza para proporcionar, mejorar y personalizar nuestros servicios. Esto incluye:
        - Optimizar campañas publicitarias en función de los datos recopilados.
        - Brindar recomendaciones personalizadas a través de nuestra inteligencia artificial.
        - Mejorar la funcionalidad de la plataforma y desarrollar nuevas características.`,
    },
    {
      title: 'Compartición de Información',
      content: `MTAAI-core no compartirá tu información personal con terceros sin tu consentimiento, excepto en los siguientes casos:
        - Para cumplir con requerimientos legales o proteger los derechos de MTAAI-core.
        - En el caso de una fusión o adquisición, en cuyo caso notificaremos a los usuarios.
        - Con proveedores de servicios externos que ayudan a operar nuestra plataforma bajo acuerdos de confidencialidad.`,
    },
    {
      title: 'Seguridad de la Información',
      content: `Utilizamos medidas de seguridad para proteger la información de nuestros usuarios. 
      Sin embargo, no podemos garantizar la seguridad absoluta de los datos en Internet. 
      Instamos a los usuarios a tomar precauciones para proteger su información personal.`,
    },
    {
      title: 'Derechos de los Usuarios',
      content: `Tienes derecho a acceder, corregir o eliminar tu información personal en cualquier momento. 
      Para ejercer estos derechos, puedes contactar con nosotros a través del soporte de MTAAI-core.`,
    },
    {
      title: 'Cookies y Tecnologías de Seguimiento',
      content: `MTAAI-core utiliza cookies y otras tecnologías de seguimiento para mejorar la experiencia del usuario y analizar el rendimiento de nuestra plataforma. 
      Puedes ajustar la configuración de tu navegador para limitar el uso de cookies, aunque esto puede afectar algunas funciones del servicio.`,
    },
  ];

  return (
    <div className="w-full">
      <section className="w-full relative overflow-hidden lg:py-28 py-16">
        <div className="px-12 xl:px-20">
          <div className="flex flex-col md:flex-row w-full gap-8">
            <div className="w-full md:max-w-[176px] md:border-r md:border-gray-200">
              <ul className="tab-nav flex flex-col md:items-start items-center lg:gap-10 gap-6">
                <li>
                  <Link
                    to="/terms"
                    className="font-medium text-base leading-7 "
                  >
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="font-medium text-base leading-7 text-gray-500 hover:text-indigo-600"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            <div className="w-full tab-pane max-md:px-4">
              <h2 className="font-manrope font-bold lg:text-4xl text-3xl text-gray-900 mb-5">
                Privacy Policy
              </h2>
              <div className="flex items-center gap-3 lg:mb-10 mb-8">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0054 8V12.5322C12.0054 12.8286 12.1369 13.1098 12.3645 13.2998L15 15.5M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22Z"
                    stroke="#4F46E5"
                  />
                </svg>
                <p className="font-medium text-xl leading-8 text-indigo-600">
                  Last updated: December 2, 2024
                </p>
              </div>

              <h5 className="font-manrope font-bold md:text-3xl text-2xl text-gray-900 mb-4">
                Contents
              </h5>
              <ul className="ml-8 lg:mb-10 mb-8">
                {sections.map((section, index) => (
                  <li
                    key={index}
                    className="list-decimal font-normal text-lg text-gray-500"
                  >
                    <a className="hover:text-indigo-600">{section.title}</a>
                  </li>
                ))}
              </ul>

              <div>
                {sections.map((section, index) => (
                  <PrivacyCard
                    key={index}
                    title={section.title}
                    content={section.content}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
