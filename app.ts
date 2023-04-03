import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import movieRouter from "./controller/MovieRouter";
import "./config/mongoose-config";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + Typescript Server");
});
app.use(movieRouter);
app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
