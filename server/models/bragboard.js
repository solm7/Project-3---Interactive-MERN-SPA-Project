const mongoose = require("mongoose");

const bragBoardSchema = new mongoose.Schema(
  {
    api: {
      type: String,
    },
    userId: { type: String, required: true },
  }
  //   {
  //     toJSON: {
  //       virtuals: true,
  //     },
  //   }
);

const BragBoard = mongoose.model("bragboard", bragBoardSchema);

module.exports = BragBoard;
