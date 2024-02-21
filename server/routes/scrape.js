const express = require("express");
const router = express.Router();

const { webScrape } = require("../controllers/webScrape/Scrape");

router.post("/web-scrape", webScrape);

module.exports = router;
