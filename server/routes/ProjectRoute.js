const express = require("express")
const router = express.Router();

const {saveProjectUrl ,getProjectUrl} = require("../controllers/Projects/Project");
const { auth  } = require("../middlewares/auth");

router.post("/projectUrl" ,auth,saveProjectUrl)
router.get("/fetch-projectUrl" ,auth,getProjectUrl);

module.exports = router;