const User = require("../models/User");
const mailSender = require("../utils/mailSender");
const bcrypt = require("bcrypt");
const crypto = require("crypto");

exports.resetPasswordToken = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await User.findOne({ email: email });

    if (!user) {
      return res.json({
        success: false,
        message: `This Email: ${email} is not Registered With Us Enter a Valid Email `,
      });
    }

    const token = crypto.randomBytes(20).toString("hex");

    const updatedDetails = await User.findOneAndUpdate(
      { email: email },
      {
        token: token,
        resetPasswordExpires: Date.now() + 3600000,
      },
      { new: true }
    );
    // console.log("DETAILS", updatedDetails);

    const url = `http://localhost:3000/reset-password/${token}`;

    console.log("email url ", url);
    await mailSender(
      email,
      "Password Reset Link",
      `Your Link for email verification is ${url}. Please click this url to reset your password.`
    );

    return res.json({
      success: true,
      message:
        "Email Sent Successfully, Please Check Your Email to Continue Further",
      data: updatedDetails,
    });
  } catch (error) {
    return res.json({
      error: error.message,
      success: false,
      message: `Some Error in Sending the Reset Message`,
    });
  }
};

exports.resetPassword = async (req, res) => {
  console.log("reset password body", req.body);
  try {
    const { password, token } = req.body;

    const userDetails = await User.findOne({ token: token });
    if (!userDetails) {
      return res.json({
        success: false,
        message: "Token is invalid , user not find",
      });
    }

    if (Date.now() > userDetails.resetPasswordExpires) {
      return res.status(403).json({
        success: false,
        message: `Token is Expired, Please Regenerate Your Token`,
      });
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    await User.findOneAndUpdate(
      { token: token },
      { password: encryptedPassword },
      { new: true }
    );

    return res.json({
      success: true,
      message: `Password Reset Successfully`,
    });
  } catch (error) {
    console.log("Error in resetPassword:", error);
    return res.status(500).json({
      success: false,
      message: "Error while resetting the password",
    });
  }
};
