const mongoose = require("mongoose");

// Define Book Schema
const BookSchema = new mongoose.Schema({
  title: String,
  author: String,
  genre: String,
  year: String,
  isbn: String,
});

// Create and export Book Model
module.exports = mongoose.model("Book", BookSchema);
