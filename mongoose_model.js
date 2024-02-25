import mongoose from "mongoose";

const movies_schema = new mongoose.Schema({});

const Movies = mongoose.model("movies", movies_schema);

export default Movies;
