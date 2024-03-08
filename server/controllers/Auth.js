const User = require("../models/User");
const Profile = require("../models/Profile");
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

    const otpPayload = { email, otp };
    const otpBody = Otp.create(otpPayload);
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
    const { firstname, lastname, email, password, confirmPassword } = req.body;

    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      return res.status(403).send({
        success: false,
        message: "All Fields are required",
      });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ message: "Password should be atleast 6 characters" });
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

    //hash the password
    const hashedPassword = await bcrypt.hash(password, 10);
    //entry created in DB of a Profile of user
    const profileDetails = await Profile.create({
      about: null,
      contactNumber: null,
    });

    //Create the user
    const newUser = await User.create({
      firstname,
      lastname,
      email,
     
      password: hashedPassword,
      additionalDetails: profileDetails._id,
     // image: `https://api.dicebear.com/5.x/initials/svg?seed=${firstName} ${lastName}`,
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
    const user = await User.findOne({ email }).populate("additionalDetails");
   console.log(user)    
   //if User not found with this provided email
    if (!user) {
      return res.status(401).json({
        success: false,
        message: `User is not Registered with Us Please SignUp to Continue`,
      });
    }

    //generate JWT token and comapre password
    if (await bcrypt.compare(password, user.password)) {
      const payload = {
        email: user.email,
        id: user._id,
      };
      const token = jwt.sign(payload, process.env.JWT_SECRET, {
        expiresIn: "24h",
      });
      // console.log("Generated Token\n", token);
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

    // If old password does not match, return a 401 (Unauthorized) error
    if (!isPasswordMatch) {
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
    try {
      const emailResponse = await mailSender(
        updatedUserDeatils.email,
        "Password for your account has been updated",
        passwordUpdated(
          updatedUserDeatils.email,
          `Password updated successfully for ${updatedUserDeatils.firstname} ${updatedUserDeatils.lastname}`
        )
      );
      console.log("Email sent successfully:", emailResponse.response);
    } catch (err) {
      console.log("Error occurred while sending email:", err);
      return res.status(500).json({
        success: false,
        message: "Error occurred while sending email",
        error: err.message,
      });
    }
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

