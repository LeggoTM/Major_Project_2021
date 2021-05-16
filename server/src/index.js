const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 8000;
require("dotenv").config();
app.use(express.json());
app.use("/images", express.static("images"));

app.get("/", (_req, res) => res.send("Welcome to movie review app server"));
app.use("/api/user", require("./routes/user"));
app.use("/api/movie", require("./routes/movie"));
app.use("/api/misc", require("./routes/misc"));

mongoose.connect(
    "mongodb+srv://" +
        process.env.DB_USERNAME +
        ":" +
        process.env.DB_PASSWORD +
        "@cluster0.phtdu.mongodb.net/" +
        process.env.DB_NAME +
        "?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        err
            ? console.log("Something went wrong")
            : app.listen(port, () => console.log("Connected to db"));
    },
);
