import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import movieRouter from "./controller/MovieRouter";
import cors from "cors";
import "./config/mongoose-config";

const app: Express = express();
dotenv.config();
const port = process.env.PORT;
app.use(cors());
app.use(movieRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
