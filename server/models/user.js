const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
});

const User = mongoose.model("UserData", userSchema);

module.exports = User;
