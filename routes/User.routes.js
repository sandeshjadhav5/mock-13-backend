const express = require("express");

const { UserModel } = require("../models/User.model");

const userRouter = express.Router();

userRouter.post("/", async (req, res) => {
  const { name, score, difficulty } = req.body;
  try {
    const user = new UserModel({ name, score, difficulty });
    await user.save();
    res.send("User Added to DB");
  } catch (err) {
    console.log(err);
  }
});

module.exports = {
  userRouter,
};
