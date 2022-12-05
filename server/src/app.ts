import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import database from "./config/database";

const PORT = process.env.PORT || 4001;

const app = express();
app.use(express.json());

// Cors
app.use(
  cors({
    origin: [<string>process.env.CLIENT_URL],
  })
);

// Router
app.use(router);

// Database
database().then(() => console.log("Connection to database successfully !"));

// Start server
app.listen(PORT, () => console.log(`Server ready in port ${PORT} !`));