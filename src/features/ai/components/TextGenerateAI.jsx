/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import Loading from '../../ui/Loading';
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
        'Error en la generación. Por favor, recargue la página y vuelva a intentar.',
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
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-900 text-white">
      <div className="flex flex-col md:flex-row w-full max-w-lg space-y-4 md:space-y-0 md:space-x-4">
        <input
          className="block w-full p-4 text-sm text-white border border-gray-500 rounded-lg bg-gray-800 outline-none"
          placeholder="Describe tu historia...."
          value={search}
          onChange={handleSearch}
          maxLength={70}
          autoFocus={true}
        />
        <button
          className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-white focus:outline-none bg-gray-800 rounded-lg  border-gray-200"
          onClick={handleClick}
        >
          Generar
        </button>
      </div>

      {loading ? (
        <div className="mt-6">
          <Loading />
        </div>
      ) : (
        iaResponse && (
          <div className="mt-6 max-w-lg w-full mx-auto p-4 bg-gray-800 rounded-lg border border-gray-700">
            <p className="text-white text-lg font-medium break-words">
              {iaResponse}
            </p>
          </div>
        )
      )}
    </div>
  );
}
