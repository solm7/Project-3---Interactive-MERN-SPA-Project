const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

//figure out which connection string
mongoose.connect("", {
  useNewUrlParser: true,
});

app.get("/", async (req, res) => {
  const user = new userModel({ userName: "Guy" });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
});

app.listen(3001),
  () => {
    console.log("Server running on port 3001");
  };
