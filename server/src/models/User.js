const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true,
            trim: true,
            minLength: 2,
            maxLength:100,
        },
        email:{
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        phone:{
            type: String,
            required: true,
            trim: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 6,
        },
        role: {
            type: String,
            enum: ["customer", "provider", "admin"],
            default: "customer",
        },
        profileImage: {
            type: String,
            default: "",
        },
        address: {
            type: String,
            default: "",
            trim: true,
        },
        city: {
            type: String,
            default: "",
            trim: true,
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("User", userSchema);