import Footer from '../../core/Layouts/Footer';
import { TestimonialCard } from './TestimonialsCard';
import { testimonials } from '../../constants/Testimonials';
import { useTranslation } from 'react-i18next';
import CompaniesUsingComponent from './CompaniesUsing';

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonialData = [
    {
      avatar: 'https://i.pravatar.cc/100?img=1',
      name: 'Kenzie Edgar',
      text: testimonials.text1,
    },
    {
      avatar: 'https://i.pravatar.cc/100?img=2',
      name: 'Stevie Tifft',
      text: testimonials.text2,
    },
    {
      avatar: 'https://i.pravatar.cc/100?img=3',
      name: 'Tommie Ewart',
      text: testimonials.text3,
    },
    {
      avatar: 'https://i.pravatar.cc/100?img=4',
      name: 'Charlie Howse',
      text: testimonials.text4,
    },
  ];

  return (
    <>
      <div className="min-w-screen min-h-screen flex items-center justify-center py-5">
        <div className="w-full  px-5 py-16 md:py-24 text-gray-800  dark:text-gray-400 dark:bg-zinc-950">
          <div className="w-full max-w-6xl mx-auto ">
            <div className="text-center max-w-xl mx-auto">
              <h1 className="text-6xl md:text-7xl font-bold mb-5 text-gray-600 text-pretty dark:text-gray-400">
                {t('recomendations')}
              </h1>
              <h3 className="text-xl mb-6 font-light">
                {t('title_recomendation')}
              </h3>
              <div className="text-center mb-10">
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-40 h-1 rounded-full bg-indigo-500"></span>
                <span className="inline-block w-3 h-1 rounded-full bg-indigo-500 ml-1"></span>
                <span className="inline-block w-1 h-1 rounded-full bg-indigo-500 ml-1"></span>
              </div>
            </div>
            <div className="-mx-3 md:flex items-start flex-wrap ">
              {testimonialData.map((testimonial, index) => (
                <div key={index} className="px-3 md:w-1/3 ">
                  <TestimonialCard
                    avatar={testimonial.avatar}
                    name={testimonial.name}
                    text={testimonial.text}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="dark:bg-zinc-950">
        <h2 className="text-center text-3xl font-semibold text-gray-900 dark:text-gray-200">
          {t('Companies')}
        </h2>
        <CompaniesUsingComponent />
      </div>
      <div className="bg-slate-900">
        <Footer />
      </div>
    </>
  );
}
