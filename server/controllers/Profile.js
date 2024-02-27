const User = require("../models/User");
const Profile = require("../models/Profile");
var mongoose = require("mongoose");

exports.updateProfile = async (req, res) => {
  try {
    const {
      firstname = "",
      lastname = "",
      about = "",
      contactNumber = "",
    } = req.body;

    const id = req.user.id;
    if (!id) {
      return res.status(401).json({
        success: false,
        message: "User ID not found in request",
      });
    }
    //console.log(id);

    const user = await User.findById(id);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    user.firstname = firstname;
    user.lastname = lastname;
    await user.save();

    if (
      !user.additionalDetails ||
      !mongoose.Types.ObjectId.isValid(user.additionalDetails)
    ) {
      return res.status(400).json({
        success: false,
        message: "Invalid additionalDetails for the user",
      });
    }

    // const updatedUser = await User.findByIdAndUpdate(id, {
    //   firstname,
    //   lastname,
    // }, { new: true });

    // const Profile = await Profile.findByIdAndUpdate(user.additionalDetails, {
    //   about,
    //   contactNumber,
    // }, { new: true });
    let profile = await Profile.findOne({ _id: user.additionalDetails });
    if (!profile) {
      // If the profile doesn't exist, create a new one
      profile = new Profile({
        about,
        contactNumber,
      });
    } else {
      // If the profile exists, update it
      profile.about = about;
      profile.contactNumber = contactNumber;
    }

    await profile.save();
    const updatedUserDetails = await User.findById(id)
      .populate("additionalDetails")
      .exec();

    return res.json({
      success: true,
      message: "Profile updated successfully",
      updatedUserDetails,
    });
  } catch (error) {
    console.log(error);
    console.log("Error while updating user profile");
    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};
