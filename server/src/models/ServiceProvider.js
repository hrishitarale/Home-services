const mongoose = require("mongoose");

const serviceProviderSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },

    service: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Service",
      required: true,
    },

    bio: {
      type: String,
      default: "",
      trim: true,
    },

    experience: {
      type: Number,
      required: true,
      min: 0,
    },

    dateOfBirth: {
      type: Date,
    },

    address: {
      type: String,
      required: true,
      trim: true,
    },

    city: {
      type: String,
      required: true,
      trim: true,
    },

    profileImage: {
      type: String,
      default: "",
    },

    idProof: {
      type: String,
      default: "",
    },

    verificationStatus: {
      type: String,
      enum: ["pending", "approved", "rejected"],
      default: "pending",
    },

    hourlyRate: {
      type: Number,
      min: 0,
      default: 0,
    },

    availability: {
      type: Boolean,
      default: true,
    },

    rating: {
      type: Number,
      min: 0,
      max: 5,
      default: 0,
    },

    totalReviews: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ServiceProvider", serviceProviderSchema);