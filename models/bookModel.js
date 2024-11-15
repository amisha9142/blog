const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "title is required"],
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    author : {
      type: String,
      required: [true, "author is required"],
    },
    price: {
      type:Number,
      require: [true, "price is required"],
    },
  },
  { timestamps: true }
);

const bookModel = mongoose.model("Book", bookSchema);

module.exports = bookModel;
