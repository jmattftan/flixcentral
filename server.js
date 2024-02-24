// server.mjs
import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import Featured_Movies from "./FeaturedMoviesModel.js";

dotenv.config();

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connected"))
  .catch((err) => console.log("DB Connection Fail"));

app.get("/now_showing_movies", async (req, res) => {
  try {
    const featured_movies = await Featured_Movies.find();
    res.json(featured_movies);
  } catch (error) {
    console.error("Error fetching feature movies:", error);
    res.status(500).json({ message: "Server Error" });
  }
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
