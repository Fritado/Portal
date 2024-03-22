const express = require("express");
const router = express.Router();

const {BusinessProfileGenerator ,PrintCleanContent , analyzeContent} = require("../controllers/BusinessProfileGenerator/BusinessProfileGenarator");


router.post("/business-profile-generator" , BusinessProfileGenerator)
router.get("/analyze-content" ,  analyzeContent);
router.get("/print-clean-content" , PrintCleanContent);


module.exports = router;
