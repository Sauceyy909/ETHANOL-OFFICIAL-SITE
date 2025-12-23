
import { GoogleGenAI } from "@google/genai";

export async function getEthanolResponse(userMessage: string) {
  try {
    // Initialize inside the call to handle dynamic API key injection and avoid top-level crashes
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY as string });

    // Calling generateContent directly with model name and prompt.
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: userMessage,
      config: {
        systemInstruction: `You are the Ethanol (ETHO) AI Assistant. 
        Ethanol is an AI-generated cryptocurrency with an AI-powered mining optimizer.
        Contract Address: 0x63937e84cd4b7a2a97d1a3950f3dc6f9bb814bae.
        Your tone should be professional, futuristic, and helpful. 
        Focus on the benefits of AI in crypto mining and the ETHO ecosystem.
        Keep answers concise and technical when appropriate.`,
        temperature: 0.7,
      },
    });
    // Access the generated text content using the .text property.
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I'm currently optimizing our neural networks. Please ask again in a moment.";
  }
}
