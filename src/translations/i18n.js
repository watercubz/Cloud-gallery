import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: 'Increase',
        paragraph: 'your marketing advertising growth',
        subparagraph: 'and boost your visits',
        subtitle:
          'MTAAI-core is a tool to manage and monitor your advertising and provides you with AI-powered recommendations.',
        btnGet: 'Get Started',
        btnMore: 'Learn More',
        description: 'The advertising monitoring tool for your business',
        description_hero_2:
          'Monitor your posts and ask our AI for recommendations',
        description_hero_3:
          'Increase your income by monitoring your advertising',
        panel: 'Welcome to the Dashboard',
        recomendations: 'Testimonials',
        title_recomendation:
          'Explore the AI-powered advertising content monitoring and improvement platform to boost your business and maximize your audience',
        Companies: 'Companies that use our platform and trust our team',
        plan: 'Upgrade plan',
        chat: 'Help chat',
        conf: 'Settings',
        profile: 'Profile',
        discount:
          'Enjoy this month of premium totally free for our big launch! 🎉',
        discountMovil: 'Enjoy this month of free premium! 🎉',
        Start: 'Get Started',
      },
    },
    es: {
      translation: {
        title: 'Aumenta',
        paragraph: ' el crecimiento de tu marketing y publicidad',
        subparagraph: 'y potencia tus visitas',
        subtitle:
          'MTAAI-core es una herramienta para administrar y monitorear su publicidad y le brinda recomendaciones impulsadas por IA.',
        btnGet: 'Empezar ',
        btnMore: 'Saber más',
        description:
          'La herramienta de monitorización publicitaria para tu negocio',
        description_hero_2:
          'Monitorea tus publicaciones y pide recomendaciones a nuestra IA',
        description_hero_3: 'Aumente sus ingresos monitoreando su publicidad',
        panel: 'Bienvenido al Panel de Control',
        recomendations: 'Testimonios',
        title_recomendation:
          'Explora la plataforma de mejora y monitoreo de contenido publicitario impulsada por IA para impulsar tu negocio y maximizar tu audiencia',
        Companies: 'Empresas que utilizan nuestra plataforma',
        plan: 'Mejorar el plan',
        chat: 'Chat de ayuda',
        conf: 'Configuración',
        profile: 'Perfil',
        discount:
          '¡Disfruta este mes de premium totalmente gratis por nuestro gran lanzamiento! 🎉',
        discountMovil: '¡Disfruta este mes de premium gratis! 🎉',
        Start: 'Empezar',
      },
    },
  },
  lng: 'en',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
