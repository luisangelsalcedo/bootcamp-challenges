import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * * Log in with a email and password
 * @param {Object} req - HTTPRequest Object
 * @param {String} req.body.email - Email sent to validate login
 * @param {String} req.body.password - Password sent to validate login
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
 * * Create a new user with a email and password
 * @param {Object} req - HTTPRequest Object
 * @param {String} req.body.email - Email sent to validate login
 * @param {String} req.body.password - Password sent to validate login
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

/**
 * * validate user authentication token
 * @param {Object} req - HTTPRequest Object
 * @param {String} req.query.token - Authentication token
 * @return {HTTPResponse Object} - status 201 return {Object} | status 403,500 return {message}
 */
export const authToken = async (req, res) => {
  const { token } = req.query;
  if (!token)
    return res.status(500).json({ message: "Auth token  is required" });

  // jwt
  jwt.verify(token, process.env.JWT_PASSWORD, (err, payload) => {
    console.log(payload);
    if (!!err) return res.status(403).json({ message: "Invalid token" });

    res.status(200).json(payload);
  });
  //
};
