// File: routes/director.routes.js (SELESAI - Tugas Praktikum 6)

const express = require("express");
const router = express.Router();
const directorController = require("../controllers/director.controller.js");
const { authenticateToken, authorizeRole } = require("../middleware/auth.js");

// Routes for Directors
router.get("/", directorController.getAllDirectors);
router.get("/:id", directorController.getDirectorById);

// POST route just need login
router.post("/", authenticateToken, directorController.createDirector);

// PUT and DELETE routes need login and admin role
router.put(
  "/:id",
  [authenticateToken, authorizeRole("admin")],
  directorController.updateDirector
);
router.delete(
  "/:id",
  [authenticateToken, authorizeRole("admin")],
  directorController.deleteDirector
);

module.exports = router;
