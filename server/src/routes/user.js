const express = require("express");
const router = express.Router();
const { upload } = require("../middlewere/file");
const { signIn, signUp } = require("../controller/user");

router.post("/sign-up", upload.single("profile_picture"), signUp);
router.post("/sign-in", signIn);

module.exports = router;
