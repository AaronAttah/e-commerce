import express from "express";
import expressAsyncHandler from "express-async-handler";
import bcrypt from "bcryptjs";
import data from "../data.js";
import User from "../models/userModel.js";
import { generateToken } from "../utils.js";

const userRouter = express.Router();

userRouter.get(
  "/seed",
  expressAsyncHandler(async (req, res) => {
    // await User.remove was usefd to reupdate the inserted api else it will throw out duplicate error
    await User.remove({});

    const createdUsers = await User.insertMany(data.users);
    console.log(createdUsers);
    res.status(201).send({ createdUsers });
  })
);

userRouter.post(
  "/signin",
  expressAsyncHandler(async (req, res) => {
    // below is inserting new users into the db
    // const {name, passwordy, email, isAdmin} = req.body
    // const password = await bcrypt.hashSync(passwordy , 8)
    // const newuser = await User.insertMany({name, password, email, isAdmin})
    // res.json({  user: newuser });

    //below is comparison with old/ allready existing user
    // were we first check the users email then its hashed password both using nested if statement
    const user = await User.findOne({ email: req.body.email });
    if (user) {
      if (bcrypt.compareSync(req.body.password, user.password)) {
        res.send({
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin,
          token: generateToken(user),
        });
        return;
      }
    }
    res.status(401).send({ message: "invalid email or password 😭😭😭 ...." });
  })
);

userRouter.post(
  "/register",
  expressAsyncHandler(async (req, res) => {
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(req.body.password, 8),
    });
    const createdUser = await user.save();
    res.send({
      _id: createdUser._id,
      name: createdUser.name,
      email: createdUser.email,
      isAdmin: createdUser.isAdmin,
      token: generateToken(createdUser),
    });
  })
);

export default userRouter;
