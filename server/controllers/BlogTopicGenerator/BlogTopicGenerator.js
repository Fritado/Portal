const BlogTopic = require("../../models/BlogTopic");
const User = require("../../models/User");

exports.BlogTopicGenerator = async (req, res) => {
  try {
    const { userId, apiResponse } = req.body;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // Create a new BlogTopicGenerator instance
    const blogTopicGenerator = new BlogTopic({
      topics: apiResponse,
      user: userId,
    });
    console.log(
      "new BlogTopicGenerator instance response ",
      blogTopicGenerator
    );

    // Save the BlogTopicGenerator instance
    await blogTopicGenerator.save();
    
  } catch (error) {
    console.error("Error saving apiResponse:", error.message);
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
