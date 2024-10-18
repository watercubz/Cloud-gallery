/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Loading from '../ui/Loading.jsx';
import toast from 'react-hot-toast';

export default function TextGenerateIAI() {
  const [search, setSearch] = useState('');
  const [iaResponse, setIaResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const genKey = import.meta.env.VITE_GOOGLE_GEMINI_API;

  const genAI = new GoogleGenerativeAI(genKey);

  async function AI() {
    setLoading(true);
    setIaResponse('');
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = `Eres una apasionante escritora de cuentos de todo tipo. Cuando alguien te pase el nombre '${search}', genera un cuento de terror aleatorio que incluya ese nombre. Asegúrate de crear una atmósfera inquietante y una trama intrigante. recuerda si el ${search} contiene palabras onfensibas descriminacion, acoso, racismo, reponde con que no puedes generar nada que contenga ese tipo de contenido`;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setIaResponse(text);
      setSearch('');
    } catch (error) {
      toast.error(
        'Error en la generación. Por favor, recargue la página y vuelva a intentar.'
      );
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    if (search.trim() === '') {
      toast.error('describa un cuento de hallowen');
    } else {
      AI();
      setSearch('');
    }
  };

  useEffect(() => {
    setIaResponse();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-lg">
        <input
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe tu cuento...."
          value={search}
          onChange={(e) => handleSearch(e)}
          maxLength={70}
        />
        <button
          className="py-2.5 px-5 me-2 mb-2 m-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-orange-500 focus:z-10 focus:ring-4 focus:ring-gray-100 md:mt-0"
          onClick={() => handleClick()}
        >
          Generar
        </button>
      </div>

      {loading && iaResponse === '' ? (
        <p className="mt-6 text-gray-600">
          <Loading />
        </p>
      ) : (
        <div className="mt-6 max-w-lg mx-auto p-4 bg-white rounded-lg border border-gray-400">
          <p className="text-gray-800 text-lg font-medium break-words">
            {iaResponse}
          </p>
        </div>
      )}
    </div>
  );
}
