import { useState } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";

export default function TextGenerateIAI() {
  const [search, setSearch] = useState("");
  const [iaResponse, setIaResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const genKey = import.meta.env.VITE_GOOGLE_GEMINI_API;

  const genAI = new GoogleGenerativeAI(genKey);

  async function AI() {
    setLoading(true);
    setIaResponse("");
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
    const prompt = `Encuentra películas de miedo y terror que contengan el término ${search}. y muestra la sipnosis de esa pelicula.`;
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    setIaResponse(text);
    setLoading(false);
  }
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };

  const handleClick = () => {
    AI();
  };
  return (
    <div className="flex flex-col items-center justify-center p-4">
      <div className="flex flex-col md:flex-row w-full max-w-lg">
        <input
          className="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Food with Category using Generative AI"
          onChange={(e) => handleSearch(e)}
        />
        <button
          className="py-2.5 px-5 me-2 mb-2 m-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 md:mt-0"
          onClick={() => handleClick()}
        >
          Search
        </button>
      </div>

      {loading && iaResponse === "" ? (
        <p className="mt-6 text-gray-600">Loading ...</p>
      ) : (
        <div className="mt-6 max-w-lg mx-auto p-4 bg-white rounded-lg shadow-md border border-gray-200">
          <p className="text-gray-800 text-lg font-medium break-words">
            {iaResponse}
          </p>
        </div>
      )}
    </div>
  );
}
