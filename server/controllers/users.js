import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const signin = async (req, res) => {
  const { user, pwd } = req.body;

  try {
    const existingUser = await User.findOne({ user });
    if (!existingUser)
      return res.status(404).json({ message: "User doesn't exist" });

    const isPwdCorrect = await bcrypt.compare(pwd, existingUser.password);
    if (!isPwdCorrect)
      return res.status(400).json({ message: "Invalid Credentials" });

    const token = jwt.sign(
      { name: existingUser.name, id: existingUser._id },
      "test",
      { expiresIn: "1h" }
    );

    res.status(200).json({ result: existingUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const signup = async (req, res) => {
  const { user, pwd, matchPwd } = req.body;
  try {
    const existingUser = await User.findOne({ user });
    if (existingUser)
      return res.status(404).json({ message: "User already exists" });
    if (pwd !== matchPwd)
      return res.status(404).json({ message: "Passwords don't match." });

    const hashedPwd = await bcrypt.hash(password, 12);

    const newUser = await User.create({ password: hashedPwd, name: user });
    const token = jwt.sign({ name: newUser.name, id: newUser._id }, "test", {
      expiresIn: "1h",
    });
    res.status(200).json({ result: newUser, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};
