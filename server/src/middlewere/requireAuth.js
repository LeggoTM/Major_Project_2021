const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const User = require("../models/user");

dotenv.config();

module.exports = (req, res, next) => {
    const { authorization } = req.headers;

    if (!authorization) {
        return res.status(401).json({ err: "you must be logged in" });
    }
    jwt.verify(authorization, process.env.JWT_SECRET, (err, payload) => {
        if (err) {
            return res.status(401).json({ err: "you must be logged in" });
        }
        const { _id } = payload;
        User.findById(_id).then((_user) => {
            next();
        });
    });
};
