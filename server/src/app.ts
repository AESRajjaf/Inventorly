import "dotenv/config";
import express, { Request } from "express";
import cors from "cors";
import { router } from "./routes";
import database from "./config/database";

const PORT = process.env.PORT || 4001;

const app = express();
app.use(express.json());

// Cors

const allowlist = [process.env.CLIENT_URL, "http://127.0.0.1:5173/", "http://localhost:5173/"];


const corsOptionsDelegate = (req: Request, callback: any) => {
  let corsOptions;

  let isDomainAllowed = allowlist.indexOf(req.header("Origin")) !== -1;

  if (isDomainAllowed) {
    // Enable CORS for this request
    corsOptions = { origin: true };
  } else {
    // Disable CORS for this request
    corsOptions = { origin: false };
  }
  callback(null, corsOptions);
};

app.use(cors(corsOptionsDelegate));

// Router
app.use(router);

// Database
database().then(() => console.log("Connection to database successfully !"));

// Start server
app.listen(PORT, () => console.log(`Server ready in port ${PORT} !`));
