const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  score: Number,
  difficulty: String,
});

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };
