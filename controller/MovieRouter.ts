import express, { Request, response, Response } from "express";
import { getTheaters } from "../services/theater-service";
import Theater from "../model/Theater";

const movieRouter = express.Router();

movieRouter.get("/getTheater", (req: Request, res: Response) => {
  console.log("Getting theaters");
  res.send("You don't have!!!");
});

movieRouter.get("/getTheaters", async (req: Request, res: Response) => {
  console.log("Getting 5 movies");
  Theater.find({})
    .limit(7)
    .then((response) => {
      res.status(200).send(response);
      console.log("Succesfully");
    });
});

movieRouter.get;
export default movieRouter;
