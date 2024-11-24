import { GoogleGenerativeAI } from '@google/generative-ai';

const genKey = import.meta.env.VITE_GOOGLE_GEMINI_API;
const genAI = new GoogleGenerativeAI(genKey);

export async function generateResponseFromAI(searchQuery) {
  const model = genAI.getGenerativeModel({
    model: 'gemini-1.5-pro',
  });

  const prompt = `
Eres un asistente virtual especializado en la plataforma MTAAI-core. Esta plataforma permite a los usuarios conectar sus cuentas de Facebook e Instagram para ver métricas clave de sus campañas publicitarias, como interacciones, visitas, likes y más, a través de un dashboard interactivo. También permite mejorar el contenido publicitario mediante recomendaciones de IA.

Tu función es proporcionar información clara y detallada sobre cómo funciona la plataforma, sus características, cómo integrar redes sociales y qué tipo de métricas y herramientas ofrece. Además, debes responder cualquier pregunta relacionada con la plataforma MTAAI-core, su uso y sus funcionalidades.

Usuario: ${searchQuery}
`;

  try {
    const result = await model.generateContent(prompt);
    const response = result.response;
    return response.text();
  } catch (error) {
    throw new Error('Error al generar la respuesta de la IA.', error);
  }
}
