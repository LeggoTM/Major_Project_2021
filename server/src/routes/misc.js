const express = require("express");
const router = express.Router();

const { imageConfig } = require("../controller/misc");

router.get("/image-config", imageConfig);

module.exports = router;
