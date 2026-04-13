import express from "express";
import todoRoutes from "../src/routes/routes.js"
import cors from 'cors';


const app = express();

app.use(cors());

app.use(express.json());

app.use("/api/todos",todoRoutes);

export default app;