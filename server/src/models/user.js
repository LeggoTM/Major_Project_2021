const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    first_name: { type: "string", required: true },
    last_name: { type: "string", required: true },
    email: { type: "string", required: true },
    hashed_password: { type: "string", required: true },
    phone_no: { type: "string", required: true },
    roles: { type: "string", required: true },
    profile_picture: { type: "string", required: true },
    date: { type: Date, default: Date.now() },
});

module.exports = mongoose.model("User", userSchema);
