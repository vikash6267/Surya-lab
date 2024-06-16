// Import the Mongoose library
const mongoose = require("mongoose");



// Define the user schema using the Mongoose Schema constructor
const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
 
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },


    password: {
      type: String,
      required: true,
    },
    accountType: {
      type: String,
      enum: ["Customer", "Admin"],
      default: "Customer",
      required: true,
    },
 
    token: {
      type: String,
    },
  
 

  },
  { timestamps: true }
);

// Export the Mongoose model for the user schema, using the name "user"
module.exports = mongoose.model("User", userSchema);
