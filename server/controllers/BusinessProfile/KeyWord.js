const User = require("../../models/User");
const Keyword = require("../../models/BusinessProfileModels/Keywords");

const saveKeyword = async (req, res) => {
  try {
    const { keywords } = req.body;

    // Check if the user exists
    const userId = await User.findById(req.user.id);
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "Sorry! User not found",
      });
    }

    // Check if the keyword already exists for the user
    const existingKeyword = await Keyword.findOne({
      user: userId,
      keywords: keywords,
    });

    if (existingKeyword) {
      return res.status(400).json({
        success: false,
        message: "Keyword already exists for this user",
      });
    }

    // If the keyword doesn't exist, save it
    let userKeyword = await Keyword.findOne({ user: userId });

    if (!userKeyword) {
      // If no existing document, create a new one
      userKeyword = new Keyword({
        keywords: [keywords], // Create an array with the first keyword
        user: userId,
      });
    } else {
      // If the document exists, append the new keyword to the existing array
      if (!userKeyword.keywords.includes(keywords)) {
        userKeyword.keywords.push(keywords);
      }
    }

    await userKeyword.save();

    return res.status(200).json({
      success: true,
      message: "Keyword saved successfully",
      data: userKeyword,
    });
  } catch (error) {
    console.error("Error while saving keyword:", error);
    res.status(500).json({ message: "Failed to save keyword" });
  }
};

const updateKeyword = async (req, res) => {
  try {
    const { keywords } = req.body;

    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Find the existing keyword for the user
    let existingKeyword = await Keyword.findOne({
      user: userId,
    });

    if (!existingKeyword) {
      return res.status(404).json({
        success: false,
        message: "Keyword not found for this user",
      });
    }

    // Update the keyword data
    if (keywords) {
      existingKeyword.keywords = keywords;
    }

    await existingKeyword.save();

    return res.status(200).json({
      success: true,
      message: "Keyword updated successfully",
      data: existingKeyword,
    });
  } catch (error) {
    console.error("Error while updating keyword data", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getKeywords = async (req, res) => {
  try {
    const userId = req.user.id;

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Find the keyword data for the user
    const userKeywords = await Keyword.findOne({
      user: userId,
    });

    if (!userKeywords) {
      return res.status(404).json({
        success: false,
        message: "Keywords not found for this user",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Keywords retrieved successfully",
      data: userKeywords,
    });
  } catch (error) {
    console.error("Error while retrieving keywords", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

module.exports = { saveKeyword, getKeywords, updateKeyword };
