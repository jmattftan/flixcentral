import mongoose from "mongoose";

const featuredMovieSchema = new mongoose.Schema({
  Movies: String,
});

const FeaturedMovies = mongoose.model(
  "Now_Showing_Movies",
  featuredMovieSchema
);

export default FeaturedMovies;
