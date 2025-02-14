import dotenv from "dotenv";
import app from "./src/app.js";

dotenv.config({
  path: "./.env",
});

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
}); // Start the server on the specified port
