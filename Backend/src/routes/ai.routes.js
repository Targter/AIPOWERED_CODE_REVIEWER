import { Router } from "express";
import { getaiContent } from "../controllers/ai.controller.js";

const router = Router(); // Create a new router

router.route("/get-response").post(getaiContent); // Handle GET requests to "/get-response"

export default router; // Export the router
