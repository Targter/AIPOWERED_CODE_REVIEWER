import express from "express";
import cors from "cors";

const app = express();
const allowedOrigins = process.env.FRONTEND_URL.split(",");

app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
    credentials: true, // <-- Ensure credentials are handled properly
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.get("/", (req, res) => {
  res.send("Hello World!"); // Send a response to the client
}); // Handle GET requests to the root URL

import aiRouter from "./routes/ai.routes.js"; // Import the ai router
app.use("/ai", aiRouter); // Use the ai router for requests to the /ai URL
app.use((err, req, res, next) => {
  console.error("Unexpected error:", err);
  res.status(500).send("Internal Server Error this is due to me");
});
export default app; // Export the app
