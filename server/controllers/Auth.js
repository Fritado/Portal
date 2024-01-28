const User = require("../models/User");
const Otp = require("../models/OTP");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");
const otpGenerator = require("otp-generator");

//// Send OTP For Email Verification (signuP time)
exports.sendOtp = async (req, res) => {
  try {
    const { email } = req.body;

    const checkUserPresent = await User.findOne({ email });

    if (checkUserPresent) {
      return res.status(401).json({
        success: false,
        message: "User is already registered",
      });
    }

    var otp = otpGenerator.generate(6, {
      upperCaseAlphabets: false,
      lowerCaseAlphabets: false,
      specialChars: false,
    });
    console.log("OTP generated:", otp);

    //check for unique otp in db
    const result = await Otp.findOne({ otp: otp });
    console.log("Result is Generate OTP Func");
    console.log("OTP", otp);
    console.log("Result", result);

    while (result) {
      otp = otpGenerator.generate(6, {
        upperCaseAlphabets: false,
      });
    }

    const otpPayload = { email, otp }
    const otpBody = Otp.create( otpPayload);
    console.log("OTP Body", otpBody);

    return res.status(200).json({
      success: true,
      message: `OTP Sent Successfully`,
      otp,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ success: false, error: error.message });
  }
};

//SignUp controller for registering users
exports.signup = async (req, res) => {
  try {
    //Destructure fields from  request body
    const { firstname, lastname, email, password, confirmPassword} =
      req.body;

    if (
      !firstname ||
      !lastname ||
      !email ||
      !password ||
      !confirmPassword
      
    ) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }

    // Check if password and confirm password match
    if (password != confirmPassword) {
      return res.status(400).json({
        success: false,
        message:
          "Password and Confirm Password do not match. Please try again.",
      });
    }

    //check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists. Please sign in to continue.",
      });
    }

    //find the most recent OTP for the email
    // const recentOTP = await Otp.find({ email })
    //   .sort({ createdAt: -1 })
    //   .limit(1);
    // console.log("recentOtp...", recentOTP);

    // if (recentOTP.length == 0) {
    //   // OTP not found for the email
    //   return res.status(400).json({
    //     success: false,
    //     message: "OTP not found",
    //   });
    // } else if (otp != recentOTP[0].otp) {
    //   // Invalid OTP
    //   return res.status(400).json({
    //     success: false,
    //     message: "The OTP is not valid",
    //   });
    // }

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Create the user
    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      success: true,
      newUser,
      message: "User registered successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      success: false,
      error: error.message,
      message: "User cannot be registered. Please try again.",
    });
  }
};

// Login controller for authenticating users
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required , please fill all details",
      });
    }
    // Find user with provided email
    const user = await User.findOne({ email });

    //if User nor found with this provided email
    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      });
    }

    //generate JWT token and comapre password
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        { email: user.email, id: user._id },
        process.env.JWT_SECRET,
        {
          expiresIn: "24h",
        }
      );

      //save the token to user document in db
      user.token = token;
      user.password = undefined;
      // Set cookie for token and return success response
      const options = {
        expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
        httpOnly: true,
      };
      res.cookie("token", token, options).status(200).json({
        success: true,
        token,
        user,
        message: `User Login Success`,
      });
    } else {
      return res.status(401).json({
        success: false,
        message: `Password is incorrect`,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: `Login Failure Please Try Again`,
    });
  }
};

//changePassword
exports.changePassword = async (req, res) => {
  try {
    //get user data from req.user
    const userDetails = await User.findById(req.user.id);

    //get old passowrd  new password
    const { oldPassword, newPassword } = req.body;

    //validate old password
    const isPasswordMatch = await bcrypt.compare(
      oldPassword,
      userDetails.password
    );

    if (!isPasswordMatch) {
      // If old password does not match, return a 401 (Unauthorized) error
      return res
        .status(401)
        .json({ success: false, message: "The password is incorrect" });
    }

    //update password
    const encryptedPassword = await bcrypt.hash(newPassword, 10);
    const updatedUserDeatils = await User.findByIdAndUpdate(
      req.user.id,
      { password: encryptedPassword },
      { new: true }
    );

    //send notification email
    return res
      .status(200)
      .json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    console.error("Error occurred while updating password:", error);
    return res.status(500).json({
      success: false,
      message: "Error occurred while updating password",
      error: error.message,
    });
  }
};
