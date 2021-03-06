import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { generateJWT } from "../utils/jwtGenerate.js";

/**
 * ## login
 * * Login with a email and password
 * @param {Object} req - HTTPRequest Object
 * @param {String} req.body.email - Email sent to validate login
 * @param {String} req.body.password - Password sent to validate login
 * @return {HTTPResponse Object} - status 200 return {token} | status 400,404,403 return {message}
 *
 */
export const login = async (req, res) => {
  const { email, password: pass } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });
  if (!pass) return res.status(400).json({ message: "Password is required" });

  const user = await User.findOne({ email, is_google_log: false });
  if (!user) return res.status(404).json({ message: "User not found" });

  // compare hash
  const hashIsCorrect = await bcrypt.compare(pass, user.password);

  if (!hashIsCorrect)
    return res.status(403).json({ message: "Password is not correct" });

  //JWT
  const payload = {
    id: user._id,
    name: user.name,
  };
  const token = await generateJWT(payload);
  !!token && res.status(200).json({ token });
};

/**
 * ## createUser
 * * Create a new user with a email and password
 * @param {Object} req - HTTPRequest Object
 * @param {String} req.body.email - Email sent to validate login
 * @param {String} req.body.password - Password sent to validate login
 * @return {HTTPResponse Object} - status 201 return {User} | status 400,500 return {message}
 */
export const createUser = async (req, res) => {
  const { email, password: pass } = req.body;

  if (!email) return res.status(400).json({ message: "Email is required" });
  if (!pass) return res.status(400).json({ message: "Password is required" });

  const duplicateUser = await User.findOne({ email });
  if (duplicateUser) return res.status(400).json({ message: "Duplicate user" });

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
 * ## authToken
 * * validate user authentication token
 * @param {Object} req - HTTPRequest Object
 * @param {String} req.query.token - Authentication token
 * @return {HTTPResponse Object} - status 201 return {Object} | status 400,403 return {message}
 */
export const authToken = async (req, res) => {
  const { token } = req.query;
  if (!token)
    return res.status(400).json({ message: "Auth token is required" });

  // jwt
  jwt.verify(token, process.env.JWT_PASSWORD, (err, payload) => {
    if (!!err) return res.status(403).json({ message: "Invalid token" });
    res.status(200).json(payload);
  });
  //
};

/**
 * ## loginAndRegisterGoogle
 * * login and register user google
 * @param {Object} req - HTTPRequest Object
 * @param {String} req.body.profileObj - Profile object sent by google
 * @return {HTTPResponse Object} - status 200 return {token} | status 403,500 return {message}
 */
export const loginAndRegisterGoogle = async (req, res) => {
  const { profileObj } = req.body;
  if (!profileObj)
    return res.status(403).json({ message: "Authentication error" });

  const user = {
    email: profileObj.email,
    is_google_log: true,
  };

  const userFound = await User.findOne(user);
  if (userFound) {
    const payload = { id: userFound._id, ...profileObj };
    const token = await generateJWT(payload);

    !!token && res.status(200).json({ token });
  } else {
    // create new user
    const newUser = new User({
      ...user,
      name: profileObj.name,
      profileObj,
    });

    try {
      const userSave = await newUser.save();
      const payload = { id: userSave._id, ...profileObj };
      const token = await generateJWT(payload);

      !!token && res.status(200).json({ token });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
};
