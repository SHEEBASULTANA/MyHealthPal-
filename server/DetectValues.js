import { GoogleGenerativeAI } from "@google/generative-ai";

import { promises as fs } from 'fs';

const api_key = 'Your_API_Key'; // Replace with your actual API key
const genAI = new GoogleGenerativeAI(api_key);
const generationConfig = { temperature: 0.4, topP: 1, topK: 32, maxOutputTokens: 4096 };
const model = genAI.getGenerativeModel({ model: "gemini-pro-vision", generationConfig });


async function generateContent(text123, fileName) {
    try {
      const imagePath = './images/' + fileName;
      const imageData = await fs.readFile(imagePath);
      const imageBase64 = imageData.toString('base64');
  
      const parts = [
        { text: text123 },
        {
          inlineData: {
            mimeType: "image/jpeg",
            data: imageBase64
          }
        },
      ];
  
      const result = await model.generateContent({ contents: [{ role: "user", parts }] });
      const response = await result.response;
      return response.text();
    } catch (error) {
      console.error('Error generating content:', error);
      throw error; // Re-throw the error for error handling in the calling function
    }
  }

  export { generateContent };