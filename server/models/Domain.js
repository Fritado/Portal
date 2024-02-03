const mongoose = require("mongoose");

const domainSchema = new mongoose.Schema(
  {
    doaminUrl: {
      type: String,
      required: true,
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Domain", domainSchema);
