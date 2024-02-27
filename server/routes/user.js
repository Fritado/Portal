const express = require("express")
const router = express.Router();

const {login , signup , sendOtp, changePassword} = require("../controllers/Auth");
const { auth  } = require("../middlewares/auth");
const {resetPassword ,resetPasswordToken}=  require("../controllers/ResetPassword")
const {updateProfile} = require("../controllers/Profile");

//Auth
router.post("/login" , login);
router.post("/signup" , signup);
router.post("/sendotp", sendOtp);
router.post("/changepassword", auth, changePassword);
router.post("/reset-password-token-link", resetPasswordToken);
router.post("/reset-password", resetPassword);


//Profile
router.put("/update-Profile",auth ,updateProfile);



module.exports = router