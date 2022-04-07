import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const login = (req, res) => {};

/**
 * * Create a new user with a username and password
 * @param {Object} req - object http request
 * @param {String} req.body.email - email sent to validate login
 * @param {String} req.body.password - password sent to validate login
 * @return {Object http response} - status 201 return {User} | status 500 return {message}
 */
export const createUser = async (req, res) => {
  const { email, password: pass } = req.body;

  if (!email) return res.status(500).json({ message: "Email is required" });
  if (!pass) return res.status(500).json({ message: "Password is required" });

  // implementing bcrypt HASH
  const hash = await bcrypt.hash(pass, 10);
  const newUser = new User({ ...req.body, password: hash });

  try {
    const saveUser = await newUser.save();
    res.status(201).json(saveUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
