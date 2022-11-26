import "dotenv/config";
import express from "express";
import cors from "cors";
import { router } from "./routes";
import database from "./config/database";

const PORT = process.env.PORT || 4001;

const app = express();
app.use(express.json());

// Cors

const whitelist = [process.env.FRONTEND_URL];

const corsOptions = {
  origin: function (origin: any, callback: any) {
    if (whitelist.includes(origin)) {
      // Puede consultar la API
      callback(null, true);
    } else {
      callback(new Error("Error Cors"));
    }
  },
};

app.use(cors(corsOptions));

// Router
app.use(router);

// Database
database().then(() => console.log("Connection to database successfully !"));

// Start server
app.listen(PORT, () => console.log(`Server ready in port ${PORT} !`));
