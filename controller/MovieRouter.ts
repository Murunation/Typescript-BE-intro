import express, { Request, response, Response } from "express";
import { getTheaters } from "../services/theater-service";
import Movie from "../model/Theater";

const movieRouter = express.Router();

// movieRouter.get("/getTheater", (req: Request, res: Response) => {
//   console.log("Getting theaters");
//   res.send("You don't have!!!");
// });

movieRouter.get("/getMovies", async (req: Request, res: Response) => {
  console.log("Getting 10 movies");
  return Movie.find({ poster: { $exists: 1 }, fullplot: { $exists: 1 } })
    .limit(12)
    .then((response: any) => {
      res.status(200).send(response);
      console.log("Succesfully got theaters");
    });
});

movieRouter.get("/movies/:id", async (req: Request, res: Response) => {
  console.log(req.params.id);
  const movie = await Movie.findOne({ _id: req.params.id }).limit(1);
  console.log("Just movie ", movie);
  return res.status(200).send(movie);
});

export default movieRouter;
