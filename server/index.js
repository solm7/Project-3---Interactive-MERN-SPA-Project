const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const userModel = require("./models/user");

app.use(express.json());
app.use(cors());

//connection string
mongoose.connect(
  "mongodb+srv://solm:4ut8AIpBJH7hXAAw@bragboard.9kboqpe.mongodb.net/test",
  {
    useNewUrlParser: true,
  }
);

app.post("/insert ", async (req, res) => {
  const userName = req.body.userName;
  const user = new userModel({ userName: userName });
  try {
    await user.save();
  } catch (err) {
    console.log(err);
  }
});

app.get("/read", async (req, res) => {
  userModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.listen(3001),
  () => {
    console.log("Server running on port 3001");
  };
