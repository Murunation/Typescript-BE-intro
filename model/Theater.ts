import mongoose from "mongoose";
type AwardsType = {
  wins: number;
  nominations: number;
  text: string;
};

type ImdbType = {
  rating: number;
  votes: number;
  id: number;
};
type viewerType = {
  rating: number;
  numReviews: number;
  meter: number;
};
type TomatoesType = { viewer: viewerType; lastUpdated: Date };

const moviesSchema = new mongoose.Schema(
  {
    plot: String,
    genres: [String],
    runtime: Number,
    cast: [String],
    poster: String,
    num_mflix_comments: Number,
    title: String,
    fullplot: String,
    languages: [String],
    released: Date,
    directors: [String],
    rated: String,
    awards: Object,
    lastupdated: String,
    year: Number,
    imdb: Object,
    countries: [String],
    type: String,
    tomatoes: Object,
  },
  {
    collection: "movies",
  }
);
const Movie = mongoose.model("Movie", moviesSchema, "movies");

export default Movie;
