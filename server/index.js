const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

const userModel = require("./models/user");
const boardModel = require("./models/bragboard");

const { authMiddleware } = require("./utils/auth");

app.use(express.json());
app.use(cors());

//Login
app.use("/login", (req, res) => {
  res.send({
    token: "test123",
  });
});

//connection string
mongoose.connect(
  "mongodb+srv://solm:4ut8AIpBJH7hXAAw@bragboard.9kboqpe.mongodb.net/test",
  {
    useNewUrlParser: true,
  }
);

app.post("/signup", async (req, res) => {
  const userName = req.body.userName;
  const email = req.body.email;
  const password = req.body.password;
  const user = new userModel({
    userName: userName,
    email: email,
    password: password,
  });
  try {
    await user.save();
    res.status(200).json({
      message: "Added User",
    });
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

app.get("/user/:id", async (req, res) => {
  userModel
    .findOne({ _id: req.params.id })
    .populate({ path: "bragboards" })
    .then((user) => {
      let boardsArray = [];
      if (!user) {
        return res.status(404).json({ message: "No user found" });
      } else {
        for (let i = 0; i < user.bragboards.length; i++) {
          boardsArray.push(user.bragboards[i]);
          console.log(boardsArray);
        }
        res.json(user.bragboards);
      }
    })
    .catch((err) => res.status(500).json(err));
});

app.get("/allboards", async (req, res) => {
  boardModel.find({}, (err, result) => {
    if (err) {
      res.send(err);
    }
    res.send(result);
  });
});

app.get("/bragboard/:id", async (req, res) => {
  console.log(req.params.id);
  boardModel
    .findOne({ userId: req.params.id })
    .populate({ path: "api" })
    .then((boards) =>
      !boards
        ? res.status(404).json({ message: "No board found" })
        : res.json(bragboard)
    )
    .catch((err) => res.status(500).json(err));
});

app.put("/update", async (req, res) => {
  const userName = req.body.userName;
  const id = req.body.id;

  try {
    await userModel.findById(id, (err, updatedBragBoard) => {
      updatedBragBoard.bragboard = newBragBoard;
      updatedBragBoard.save();
      res.send("update");
    });
    await user.save();
  } catch (err) {
    console.log(err);
  }
});

// app.put("/addboard/:id", async (req, res) => {
//   try {
//     await userModel.findOneAndUpdate(
//       { _id: req.params.id },
//       {
//         $addToSet: { bragboards: req.body },
//       },
//       res.send("updated user board")
//     );
//   } catch (err) {
//     console.log(err);
//   }
// });

app.put("/addboard/:id", async (req, res) => {
  boardModel.create(req.body).then((board) => {
    return userModel.findOneAndUpdate(
      {
        _id: req.params.id,
      },
      { $addToSet: { bragboards: board._id } },
      { new: true }
    );
  });
  res.json(200);
});

app.delete("/delete/:id", async (req, res) => {
  const id = req.params.id;
  await userModel.findByIdAndRemove(id).exec;
  res.send("deleted");
});

// app.get("/signin", async (req, res)=>{

// })

app.listen(3001),
  () => {
    console.log("Server running on port 3001");
  };
