import { generateContent } from "../services/ai.services.js"; // Import the generateContent function from the ai.service file
import Queue from "bull";

const aiQueue = new Queue("ai-processing", "redis://127.0.0.1:6379");
export const getaiContent = async (req, res) => {

  const prompt = req.body.prompt; // Get the prompt from the query string

  //   console.log("prompt:", process.env.GEMIGOOGLE_GEMINI_KEY);
  if (!prompt) {
    return res.status(400).send("Prompt is required"); // Send an error if prompt is not provided
  }
  //   console.log("prompt:", prompt);
  const response = await generateContent(prompt); // Generate content using the prompt
  // Send a response to the client
    console.log("response by ai:", response);

  res.send(response);
}; // Handle GET requests to the /generate-content URL
