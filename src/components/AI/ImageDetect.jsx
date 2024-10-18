import { useState } from 'react';
import { GoogleGenerativeAI } from '@google/generative-ai';
import { getBase64 } from '../helpers/getBase64.js';
import { useNavigate } from 'react-router-dom';
import Loading from '../ui/Loading.jsx';
import toast from 'react-hot-toast';

export default function ImageDetect() {
  const [image, setImage] = useState('');
  const [imageInineData, setImageInlineData] = useState('');
  const [aiResponse, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const genKey = import.meta.env.VITE_GOOGLE_GEMINI_API;

  const genAI = new GoogleGenerativeAI(genKey);

  async function RunImage() {
    setLoading(true);
    setResponse('');
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });
    const result = await model.generateContent([
      '¿Qué hay en esta foto?, solo puedes responder a fotos con tematica de hallowen, terror, horror, de lo contrario dile que la foto no cumple con la tematica',
      imageInineData,
    ]);

    //TODO: proteccion para preguntas fuera de lugar y implementar la gneracion de imagenes con otro modelo

    const response = await result.response;
    const text = response.text();
    setResponse(text);
    setLoading(false);
  }

  const handleClick = () => {
    RunImage();
  };

  const handleImageChange = (e) => {
    toast.success('Imagen cargada');
    const file = e.target.files[0];

    // getting base64 from file to render in DOM
    getBase64(file)
      .then((result) => {
        setImage(URL.createObjectURL(result));
      })
      .catch((e) => console.log(e));

    // generating content model for Gemini Google AI
    fileToGenerativePart(file).then((image) => {
      setImageInlineData(image);
    });
  };

  async function fileToGenerativePart(file) {
    const base64EncodedDataPromise = new Promise((resolve) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result.split(',')[1]);
      reader.readAsDataURLL(file);
    });

    return {
      inlineData: { data: await base64EncodedDataPromise, mimeType: file.type },
    };
  }
  const handleHome = () => {
    navigate('/App');
  };

  return (
    <div className="flex flex-col items-center mt-10 p-4 ">
      <button
        className="absolute top-4 left-4 py-2 px-4 text-black transition-colors duration-150 border border-zinc-500 rounded-lg bg-white hover:bg-gray-100 z-20"
        onClick={handleHome}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <h2 className="text-3xl font-bold text-orange-700 mb-6">
        🎃 PREGUNTALE ¿QUÉ HAY EN UNA FOTO DE HALLOWEEN? 🎃
      </h2>
      <div className="flex flex-col mb-4 w-full md:w-1/2">
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="file-upload"
          className="hidden"
        />
        <label
          htmlFor="file-upload"
          className="cursor-pointer rounded p-2 mb-4 border border-gray-300 bg-gray-200 text-orange-700 font-bold hover:bg-gray-300"
        >
          Subir tu imagen
        </label>
      </div>
      <button
        className="py-2.5 px-5 text-sm font-medium text-white bg-orange-600 rounded-lg border border-gray-200 hover:bg-orange-500 focus:outline-none focus:ring-4 focus:ring-purple-300 mb-4"
        onClick={handleClick}
      >
        ¿Qué hay en la foto?
      </button>

      {image && (
        <img
          src={image}
          className="w-full h-auto max-w-xl rounded-lg shadow-md mt-6"
          alt="Selected"
        />
      )}

      {loading && aiResponse === '' ? (
        <p className="mt-8 text-orange-600">
          <Loading />
        </p>
      ) : (
        <div className="mt-8 text-center text-orange-700 font-bold">
          <p>{aiResponse}</p>
        </div>
      )}
    </div>
  );
}
