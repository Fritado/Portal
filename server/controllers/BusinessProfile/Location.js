const User = require("../../models/User");
const Location = require("../../models/BusinessProfileModels/Location");

//save Location
const saveLocation = async (req, res) => {
  try {
    const { location } = req.body;

    // Check if the user exists
    const userId = await User.findById(req.user.id);
    //console.log("userId", userId);

    if (!userId) {
      return res.status({
        success: false,
        message: "Sorry! User not found",
      });
    }
    // Check if location document exists for the user
    let existingLocation = await Location.findOne({
      user: userId,
      location: location,
    });

    if (existingLocation) {
      return res.status(400).json({
        success: false,
        message: "Location already exists for this user",
      });
    }
    // If the location doesn't exist, save it
    let userLocation = await Location.findOne({ user: userId });
    if (!userLocation) {
      // If no existing document, create a new one
      userLocation = new Location({
        location: [location], // Create an array with the first location
        user: userId,
      });
    } else {
      // If the document exists, append the new location to the existing array
      userLocation.location.push(location);
    }

    await userLocation.save();

    return res.status(200).json({
      success: true,
      message: "Location Data saved successfully",
      data:userLocation,
    });
  } catch (error) {
    console.error("Error saving location:", error);
    res.status(500).json({ message: "" });
  }
};

module.exports = {
  saveLocation,
};
