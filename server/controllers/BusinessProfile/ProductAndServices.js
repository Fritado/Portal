const User = require("../../models/User");
const ProductAndService = require("../../models/BusinessProfileModels/ProductAndServices");

// Save Products and Services
const saveProductsAndServices = async (req, res) => {
  try {
    const { productAndServices } = req.body;

    // Check if the user exists
    const userId = await User.findById(req.user.id);
    //console.log("userId", userId);

    if (!userId) {
      return res.status({
        success: false,
        message: "Sorry! User not found",
      });
    }

    //const lowercaseProductAndServices = productAndServices.toLowerCase();

    // Check if the product and service already exists for the user
    const existingProductAndService = await ProductAndService.findOne({
      user: userId,
      productAndServices: productAndServices,
    });

    if (existingProductAndService) {
      return res.status(400).json({
        success: false,
        message: "Product or Service already exists for this user",
      });
    }
    // If the product and service doesn't exist, save it
    let userProductAndService = await ProductAndService.findOne({
      user: userId,
    });

    if (!userProductAndService) {
      // If no existing document, create a new one
      userProductAndService = new ProductAndService({
        productAndServices: [productAndServices], // Create an array with the first product and service
        user: userId,
      });
    } else {
      // If the document exists, append the new product and service to the existing array
      if (
        !userProductAndService.productAndServices.includes(productAndServices)
      ) {
        userProductAndService.productAndServices.push(productAndServices);
      }
    }

    await userProductAndService.save();

    return res.status(200).json({
      success: true,
      message: "Product And Services Data saved successfully",
      data: userProductAndService,
    });
  } catch (error) {
    console.error("Error while Saving Product And Services Data:", error);
    res
      .status(500)
      .json({ message: "Failed to save Product And Services Data" });
  }
};

const updateProductAndService = async (req, res) => {
  try {
    const { productAndServices } = req.body;

    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }
    // Find the existing product and service for the user
    let existingproductAndService = await ProductAndService.findOne({
      user: userId,
    });

    if (!existingproductAndService) {
      return res.status(404).json({
        success: false,
        message: "Product or Service not found for this user",
      });
    }

    // Update the product and service data
    if (productAndServices) {
      existingproductAndService.productAndServices = productAndServices;
    }

    // Save the updated product and service data
    await existingproductAndService.save();

    return res.status(200).json({
      success: true,
      message: "Product And Services Data updated successfully",
      data: existingproductAndService,
    });
  } catch (error) {
    console.error("Error while updating product and services data", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
};

const getProductsAndServices = async (req, res) => {
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
    // Find the product and service data for the user
    const userProductAndService = await ProductAndService.findOne({
      user: userId,
    });
    if (!userProductAndService) {
      return res.status(404).json({
        success: false,
        message: "Product or Service not found for this user",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Product And Services Data retrieved successfully",
      data: userProductAndService,
    });
  } catch (error) {}
};

module.exports = {
  saveProductsAndServices,
  updateProductAndService,
  getProductsAndServices
};
