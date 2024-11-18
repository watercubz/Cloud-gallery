import PrivacyCard from './PrivacyCard';

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
    <div className="bg-gray-100 min-h-screen p-8 flex items-center justify-center">
      <div className="bg-white max-w-3xl w-full rounded-lg shadow-md p-8 text-gray-800">
        <h1 className="text-3xl font-bold mb-4">
          Política de Privacidad de MTAAI-core
        </h1>
        {sections.map((section, index) => (
          <PrivacyCard
            key={index}
            title={section.title}
            content={section.content}
          />
        ))}
      </div>
    </div>
  );
};

export default PrivacyPolicy;
