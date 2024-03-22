const BusinessProfile = require("../../models/BusinessProfileModels/BusinessProfile");
const User = require("../../models/User");

// Function to extract user ID from localStorage value
const getUserIdFromLocalStorage = (localStorageValue) => {
  try {
    const userObject = JSON.parse(localStorageValue);
    console.log(userObject._id);
    return userObject._id;
  } catch (error) {
    console.error("Error parsing localStorage value:", error);
    return null;
  }
};

//save Business Profile
const saveBusinessProfile = async (req, res) => {
  try {
    const { businessName, aboutBusiness } = req.body;

    // Check if the user exists
    //const userId = await User.findById(req.user.id);
    const userId = req.user.id;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    
     // Check if the user already has a business profile
    const existingBusinessProfile = await BusinessProfile.findOne({ user: userId });
    if (existingBusinessProfile) {
      return res.status(400).json({
        success: false,
        message: "Business profile already exists for this user. Use update endpoint instead.",
      });
    }
    const newBusinessProfile = new BusinessProfile({
      businessName,
      aboutBusiness,
      user: userId,
    });

    await newBusinessProfile.save();

    return res.status(200).json({
      success: true,
      message: "Business Profile Data saved successfully",
      data: newBusinessProfile,
    });
  } catch (error) {
    console.error("Error while saving Business Profile:", error);
    res.status(500).json({ message: "Failed to save Business Profile" });
  }
};


// Update Business Profile
const updateBusinessProfile = async (req, res) => {
  try {
    const { businessName, aboutBusiness } = req.body;
    const userId = req.user.id;

    // Find the business profile for the user
    let existingBusinessProfile = await BusinessProfile.findOne({ user: userId });

    if (!existingBusinessProfile) {
      return res.status(404).json({
        success: false,
        message: "Business Profile not found. Please create a profile first.",
      });
    }

    // Update the existing business profile
    if (businessName) {
      existingBusinessProfile.businessName = businessName;
    }
    if (aboutBusiness) {
      existingBusinessProfile.aboutBusiness = aboutBusiness;
    }

    // Save the updated business profile
    await existingBusinessProfile.save();

    return res.status(200).json({
      success: true,
      message: "Business Profile Data updated successfully",
      data: existingBusinessProfile,
    });
  } catch (error) {
    console.error("Error while updating Business Profile:", error);
    res.status(500).json({ message: "Failed to update Business Profile" });
  }
};


// Get Business Profile Data
const getBusinessProfile = async (req, res) => {
  try {
    const userId = req.user.id;

    // Find the business profile for the user
    const existingBusinessProfile = await BusinessProfile.findOne({ user: userId });

    if (!existingBusinessProfile) {
      return res.status(404).json({
        success: false,
        message: "Business Profile not found. Please create a profile first.",
      });
    }

    // Extract the required data
    const { businessName, aboutBusiness } = existingBusinessProfile;

    return res.status(200).json({
      success: true,
      message: "Business Profile Data retrieved successfully",
      data: { businessName, aboutBusiness },
    });
  } catch (error) {
    console.error("Error while retrieving Business Profile:", error);
    res.status(500).json({ message: "Failed to retrieve Business Profile" });
  }
};

//saving openAi about business
const savingOpenAiAboutBusiness = async(req,res) =>{
  try{
    console.log(req.body);
    const aboutBusinessContent = req.body;
    //const aboutBusiness = new 

    return res.status(200).json({
      success:true,
      message:"About Business data of openAi saved successfully",
      //data:
    })

  }catch(error){
    console.error("error in saving about business data coming from openAi" , error);
    return res.status(500).json({
      success:false,
      message:"Interal server error",
    })
  }
}

module.exports = {
  saveBusinessProfile,
  updateBusinessProfile,
  getBusinessProfile
};

