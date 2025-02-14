import express from "express";
import cors from "cors";

const app = express();
app.use(
  cors({
    origin: (origin, callback) => {
      if (!origin || process.env.FRONTEND_URL.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: "GET, POST, PUT, DELETE, OPTIONS",
    allowedHeaders: "Content-Type, Authorization",
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
