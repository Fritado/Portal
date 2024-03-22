const mongoose = require("mongoose");

const BusinessProfileSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
    },
    aboutBusiness: {
      type: String,
      required: true,
    },

    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("BusinessProfile", BusinessProfileSchema);
