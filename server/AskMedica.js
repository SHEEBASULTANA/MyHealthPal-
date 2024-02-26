import { GoogleGenerativeAI } from "@google/generative-ai";


const api_key1="Your_API_Key";
const genAI1= new GoogleGenerativeAI(api_key1);
const generationConfig1 = { temperature: 0.9, topP: 1, topK: 1, maxOutputTokens: 4096 };
const model1 = genAI1.getGenerativeModel({ model: "gemini-pro", generationConfig1 });

async function generateContent1(txt2) {
  try {
    const prompt = `
    Provide personalized responses to the user's queries, focusing on their health information. Ensure responses are concise, easy to understand, and relevant to the user's situation. Avoid using technical jargon or medical terminology.

    Consider the user's specific health metrics such as Hemoglobin, RBC, WBC, etc., to provide tailored advice and recommendations. Keep responses engaging and prioritize the user's well-being.
    
    Please ask your question or describe your concern.
    
      ${txt2}
    `;
    const result = await model1.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error('Error generating content:', error);
  }
}

export {generateContent1};