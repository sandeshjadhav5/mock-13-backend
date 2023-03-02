const express = require("express");
const crypto = require("crypto");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/User.routes");

const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use(cors({ origin: "*" }));

let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
let len = 6;

app.get("/", (req, res) => {
  const randomWords = crypto.randomBytes(len);
  const temp = Array.from(randomWords)
    .map((el) => char[el % char.length])
    .join("");
  res.send(temp);
});

app.use("/users", userRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to the DB");
  } catch (err) {
    console.log(err);
  }

  console.log(`listening at port : ${process.env.port}`);
});
