const express = require("express");
const router = express.Router();
const movieController = require("../controllers/movie.controller.js");
const { authenticateToken, authorizeRole } = require("../middleware/auth.js");

// Routes for Movies
router.get("/", movieController.getAllMovies);
router.get("/:id", movieController.getMovieById);

// POST route just need login
router.post("/", authenticateToken, movieController.createMovie);

// PUT and DELETE routes need login and admin role
router.put(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  movieController.updateMovie
);
router.delete(
  "/:id",
  authenticateToken,
  authorizeRole("admin"),
  movieController.deleteMovie
);

module.exports = router;
