const axios = require("axios");
require("dotenv").config();

exports.imageConfig = (req, res) => {
    axios
        .get(
            `https://${process.env.TMDB_BASE}/configuration?api_key=${process.env.TMDB_KEY}`,
        )
        .then((response) => {
            if (response.status === 200) {
                return res.status(200).json(response.data.images);
            }
            return res.status(400).json({ err: "Somting went worng" });
        })
        .catch((err) => {
            return res.status(400).json(err.message);
        });
};
