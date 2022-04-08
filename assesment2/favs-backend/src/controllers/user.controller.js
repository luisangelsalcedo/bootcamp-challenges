import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * * log in with a username and password
 * @param {Object} req - object http request
 * @param {String} req.body.email - email sent to validate login
 * @param {String} req.body.password - password sent to validate login
 * @return {HTTPResponse Object} - status 200 return {token} | status 403,500 return {message}
 */
export const login = async (req, res) => {
  const { email, password: pass } = req.body;

  if (!email) return res.status(500).json({ message: "Email is required" });
  if (!pass) return res.status(500).json({ message: "Password is required" });

  const user = await User.findOne({ email });
  if (!user) return res.status(403).json({ message: "User not found" });

  // compare hash
  const hashIsCorrect = await bcrypt.compare(pass, user.password);
  if (!hashIsCorrect)
    return res.status(403).json({ message: "Password is not correct" });

  //JWT
  const payload = {
    id: user._id,
    name: user.name,
  };

  jwt.sign(
    payload,
    process.env.JWT_PASSWORD,
    {
      expiresIn: "1d",
    },
    (err, token) => {
      !err && res.status(200).json({ token });
    }
  );
};

/**
 * * Create a new user with a username and password
 * @param {Object} req - object http request
 * @param {String} req.body.email - email sent to validate login
 * @param {String} req.body.password - password sent to validate login
 * @return {HTTPResponse Object} - status 201 return {User} | status 500 return {message}
 */
export const createUser = async (req, res) => {
  const { email, password: pass } = req.body;

  if (!email) return res.status(500).json({ message: "Email is required" });
  if (!pass) return res.status(500).json({ message: "Password is required" });

  // implementing bcrypt HASH
  const hash = await bcrypt.hash(pass, 10);
  const user = new User({ ...req.body, password: hash });

  try {
    const saveUser = await user.save();
    res.status(201).json({ user: saveUser });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
