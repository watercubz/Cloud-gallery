import { useState, useEffect } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { saveLocalResponse, getLocalStorage } from '../utils/storage.js';
import Loading from '../services/ui/Loading.jsx';
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
    const prompt = `Eres un asistente virtual llamada "Carla" y también una escritora bilingüe apasionada por contar historias. Cuando el usuario te haga una pregunta o te pida un cuento, responde de manera natural y amigable. Si el usuario solicita un cuento de terror con el tema '${search}', genera una historia inquietante que incluya ese nombre. Asegúrate de crear una atmósfera aterradora y una trama intrigante, manteniendo siempre un tono de asistente.`;

    try {
      const result = await model.generateContent(prompt);
      const response = await result.response;
      const text = response.text();

      setIaResponse(text);
      saveLocalResponse('aiResponse', text);
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
    const saveResponse = getLocalStorage('aiResponse');
    if (saveResponse) {
      setIaResponse(saveResponse);
    }
  }, []);

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-lg">
        <input
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Describe tu cuento...."
          value={search}
          onChange={(e) => handleSearch(e)}
          maxLength={40}
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
