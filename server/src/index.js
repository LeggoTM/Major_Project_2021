const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 8000;

require("dotenv").config();

app.use(express.json());

app.get("/", (_req, res) => res.send("Welcome to movie review app server"));

mongoose.connect(
    "mongodb+srv://" +
        process.env.DB_USERNAME +
        ":" +
        process.env.DB_PASSWORD +
        "@cluster0.phtdu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority" +
        process.env.DB_NAME,
    { useCreateIndex: true, useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
        err
            ? console.log("Something went wrong")
            : app.listen(port, () => console.log("Connected to db"));
    },
);
