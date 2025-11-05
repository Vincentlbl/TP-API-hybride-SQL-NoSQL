const mongoose = require("mongoose");

const profileSchema = new mongoose.Schema({
  userId: Number,
  preferences: [String],
  history: [
    {
      book: String,
      rating: Number
    }
  ]
});

module.exports = mongoose.model("Profile", profileSchema);
