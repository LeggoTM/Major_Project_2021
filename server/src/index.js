const express = require("express");
const mongoose = require("mongoose");
const app = express();

const port = process.env.PORT || 8000;
require("dotenv").config();
app.use(express.json());
app.use("/images", express.static("images"));

app.get("/", (_req, res) =>
    res.send(
        "<h1>Welcome to movie review app server</h1>" +
            "<br/>" +
            "<ul>" +
            "<li>/ : GET : Home</li>" +
            "<li>/api/user/sign-up : POST : to create a new user</li>" +
            "<li>/api/user/sign-in : POST : to sign an existing user</li>" +
            "<li>/api/movie/{movie id} : GET : <u>you need to sign in first</u> : get single movie detail by movie id</li>" +
            "<li>/api/movie/popular : GET : <u>you need to sign in first</u> : to get popular movies list</li>" +
            "<li>/api/misc/image-config : GET : to get image path config</li>" +
            "</ul>",
    ),
);
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
