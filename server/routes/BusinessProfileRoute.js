const express = require("express");
const router = express.Router();

const { saveLocation } = require("../controllers/BusinessProfile/Location");
const {
  saveProductsAndServices,
  updateProductAndService,
  getProductsAndServices,
} = require("../controllers/BusinessProfile/ProductAndServices");
const {
  saveBusinessProfile,
  updateBusinessProfile,
  getBusinessProfile,
} = require("../controllers/BusinessProfile/BusinessProfile");
const {
  saveKeyword,
  updateKeyword,
  getKeywords,
} = require("../controllers/BusinessProfile/KeyWord");
const { auth } = require("../middlewares/auth");

router.post("/create-businessProfile", auth, saveBusinessProfile);
router.put("/update-businessProfile", auth, updateBusinessProfile);
router.get("/get-businessProfile", auth, getBusinessProfile);
router.post("/create-location", auth, saveLocation);
router.post("/create-product&services", auth, saveProductsAndServices);
router.put("/update-product-service", auth, updateProductAndService);
router.get("/get-product-service", auth, getProductsAndServices);
router.post("/save-keywords", auth, saveKeyword);
router.put("/update-keywords", auth, updateKeyword)
router.get("/get-keywords", auth,  getKeywords)

module.exports = router;
