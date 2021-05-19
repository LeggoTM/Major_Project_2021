const User = require("../models/user");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();

exports.signUp = (req, res) => {
    const { first_name, last_name, email, password, phone_no } = req.body;

    if (!first_name || !last_name || !email || !password || !phone_no) {
        return res.status(400).json({ err: "Invelid Inputs" });
    }

    User.findOne({ email }).then((user) => {
        if (user) {
            return res.status(400).json({ err: "User Exists" });
        }
        const hashed_password = bcrypt.hashSync(password, 10);
        const _user = new User({
            first_name,
            last_name,
            email,
            hashed_password,
            phone_no,
            profile_picture: req.file ? req.file.path : "images/index.png",
        });
        _user
            .save()
            .then(() => {
                return res.status(201).json({ msg: "Sign up Complete" });
            })
            .catch((err) => {
                return res.status(400).json({ err: err.message });
            });
    });
};

exports.signIn = (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).json({ err: "Invelid Inputs" });
    }

    User.findOne({ email }).then((user) => {
        if (!user) {
            return res.status(400).json({ err: "User not found" });
        }
        bcrypt.compare(password, user.hashed_password).then((result) => {
            if (result) {
                const token = jwt.sign(
                    { _id: user._id },
                    process.env.JWT_SECRET,
                );
                user.hashed_password = undefined;
                return res.status(200).json({ token, user });
            }
            return res.status(422).json({ err: "Something went wrong" });
        });
    });
};
