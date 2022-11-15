const mongoose = require("mongoose");

const bragBoardSchema = new mongoose.Schema({
  api: { type: String },
});

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, "Must Match an Email Address!"],
  },
  password: {
    type: String,
    required: true,
    minlength: 5,
  },
  bragboards: [bragBoardSchema],
});

userSchema.virtual("boards").get(function () {
  return `board: ${this.bragBoardSchema.api}`;
});
const User = mongoose.model("User", userSchema);

module.exports = User;
