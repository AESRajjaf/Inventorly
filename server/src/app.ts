import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import database from "./config/database";

if(!process.env.JWT_SECRET) {
  const err = new Error('No JWT_SECRET in env variable !');
  console.log(err);
}

const PORT = process.env.PORT || 4001;

const app = express();
app.use(express.json());

// Cors
app.use(cors({
  origin: [<string>process.env.CLIENT_URL, "http://127.0.0.1:5173", "http://localhost:5173"]
}));

// Router
app.use(router);

// Database
database().then(() => console.log("Connection to database successfully !"));

// Start server
app.listen(PORT, () => console.log(`Server ready in port ${PORT} !`));
