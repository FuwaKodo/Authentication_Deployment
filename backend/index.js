import express from "express";
import routes from "./routes.js";

// TODO (Edited): complete me (loading the necessary packages)
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";

// TODO (Edited): complete me (CORS)
// app.use(cors({
//     origin: FRONTEND_URL
// }));
app.use(cors());
app.use(express.json());
app.use('/', routes);
app.options('*', cors());

export default app;