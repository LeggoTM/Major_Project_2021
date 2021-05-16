const axios = require("axios");
require("dotenv").config();

exports.popularMovies = (_req, res) => {
    axios
        .get(
            `https://${process.env.TMDB_BASE}/movie/popular?api_key=${process.env.TMDB_KEY}`,
        )
        .then((response) => {
            if (response.status === 200) {
                return res.status(200).json(response.data.results);
            }
            return res.status(400).json({ err: "Somting went worng" });
        })
        .catch((err) => {
            return res.status(400).json(err.message);
        });
};
exports.singleMovie = (req, res) => {
    const { id } = req.params;

    axios
        .get(
            `https://${process.env.TMDB_BASE}/movie/${id}?api_key=${process.env.TMDB_KEY}`,
        )
        .then((response) => {
            if (response.status === 200) {
                return res.status(200).json(response.data);
            }
            return res.status(400).json({ err: "Somting went worng" });
        })
        .catch((err) => {
            return res.status(400).json(err.message);
        });
};
