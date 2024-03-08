const User = require("../models/User");
const Profile = require("../models/Profile");

// Update Profile controller
exports.updateProfile = async (req, res) => {
  try {
    const userId = req.user.id; // Extract user ID from the authenticated user
    const { firstname, lastname, about, contactNumber } = req.body;

    // Check if the user exists
    const user = await User.findById(userId).populate("additionalDetails");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found.",
      });
    }

    // Update the user's profile
    const profile = user.additionalDetails;

    if (profile) {
      // Update user's firstname and lastname
      user.firstname = firstname || user.firstname;
      user.lastname = lastname || user.lastname;

      // Update profile details
      profile.about = about || profile.about;
      profile.contactNumber = contactNumber || profile.contactNumber;

      // Save changes to both user and profile
      await Promise.all([user.save(), profile.save()]);
      console.log("User:", user);
      console.log("Profile:", profile);
      return res.status(200).json({
        success: true,
        message: "Profile updated successfully",
        user,
        profile,
      });
    } else {
      // Create a new profile and associate it with the user
      const newProfile = await Profile.create({
        user: userId,
        about: about || null,
        contactNumber: contactNumber || null,
      });

      // Link the new profile to the user
      user.additionalDetails = newProfile._id;
      await user.save();

      return res.status(200).json({
        success: true,
        message: "Profile created and linked successfully",
        user,
        profile: newProfile,
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error updating profile. Please try again.",
    });
  }
};
