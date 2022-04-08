import Favs from "../models/favslist.model.js";

/**
 * * Creating a new favorites list
 * @param {Object} req - object http request
 * @param {String} req.body.name - Favorites list name
 * @return {HTTPResponse Object} - status 200 return {Favs} | status 500 return {message}
 */
export const createFavsList = async (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(500).json({ message: "Name is required" });

  const favs = new Favs({ name });

  try {
    const newFavs = await favs.save();
    res.status(201).json({ favs: newFavs });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllFavsList = (req, res) => {
  res.send("Handler getAllFavsList");
};

export const getFavsListById = (req, res) => {
  res.send("Handler getFavsListById");
};

export const updateFavsListById = (req, res) => {
  res.send("Handler updateFavsListById");
};

export const deleteFavsListById = (req, res) => {
  res.send("Handler deleteFavsListById");
};
