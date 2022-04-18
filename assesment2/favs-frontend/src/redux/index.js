import store from "./store";
import { ReduxStore } from "./ReduxStore";
import {
  login,
  logout,
  createFavs,
  getAllFavs,
  updateFavs,
  deleteFavs,
  openFavs,
  openFavsById,
} from "./actions";

export {
  store,
  login,
  logout,
  createFavs,
  getAllFavs,
  updateFavs,
  deleteFavs,
  openFavs,
  openFavsById,
  ReduxStore,
};
