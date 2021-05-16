const express = require("express");
const router = express.Router();

const requireAuth = require("../middlewere/requireAuth");
const { popularMovies, singleMovie } = require("../controller/movie");

router.get("/:id", requireAuth, singleMovie);
router.get("/popular", requireAuth, popularMovies);

module.exports = router;
