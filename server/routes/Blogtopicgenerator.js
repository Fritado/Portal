const express = require("express");
const router = express.Router();

const {
  BlogTopicGenerator,
} = require("../controllers/BlogTopicGenerator/BlogTopicGenerator");

router.post("/blog-topic-generator", BlogTopicGenerator);

module.exports = router;
