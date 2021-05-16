const express = require("express");
const router = express.Router();

const requireAuth = require("../middlewere/requireAuth");
const { popularMovies } = require("../controller/movie");

router.get("/popular", requireAuth, popularMovies);

module.exports = router;
