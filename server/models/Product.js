const mongoose = require("mongoose"); // Erase if already required

// Declare the Schema of the Mongo model
const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
  },
  // slug: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //     lowercase: true,
  // },
  description: {
      type: String,
  },
  rate: {
      type: Number,
      required: true,
  },
  highPrice: {
      type: Number,
    //   required: true,
  },
  mrp: {
      type: Number,
      required: true,
  },


  organ: {
      type: String,
    //   required: true,
  },
  purpose: {
      type: String,
    //   required: true,
  },
  sampleType: {
      type: String,
      // required: true,
  },
  temp: {
      type: String,
  },
  method: {
      type: String,
      // required: true,
  },
  tat: {
      type: String,
      // required: true,
  }
 
 


  },
  { timestamps: true }
);

//Export the model
module.exports = mongoose.model("Product", productSchema);
