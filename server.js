const express = require("express");
const mongoose = require("mongoose");
const Book = require("./bookModel"); // Import the book model

const app = express();
app.use(express.json()); // for parsing application/json
app.use(express.static("public"));
// Base route
app.get("/", function (req, res) {
  res.send("Welcome to our Bookstore API!");
});

// ... rest of your code

mongoose
  .connect(
    "mongodb+srv://12345678:A7zdJaK1wtVTly62@atlascluster.zwpd8k7.mongodb.net/?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error(err));

// POST endpoint for creating a new book
app.post("/books", (req, res) => {
  const book = new Book(req.body);
  book
    .save()
    .then((doc) => res.json(doc))
    .catch((err) => res.status(500).json(err));
});

// GET endpoint for fetching all books
app.get("/books", (req, res) => {
  Book.find({})
    .then((docs) => res.json(docs))
    .catch((err) => res.status(500).json(err));
});

// PUT endpoint for updating a book
app.put("/books/:id", (req, res) => {
  Book.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((doc) => res.json(doc))
    .catch((err) => res.status(500).json(err));
});

// DELETE endpoint for deleting a book
app.delete("/books/:id", (req, res) => {
  Book.findByIdAndDelete(req.params.id)
    .then(() => res.json({ message: "Book deleted" }))
    .catch((err) => res.status(500).json(err));
});

app.listen(3000, () =>
  console.log("Server is running on http://localhost:3000")
);
