import { TYPES } from "../../constants";

export const createFavs = (favslist) => ({
  type: TYPES.CREATE_FAVS,
  payload: favslist,
});

export const getAllFavs = (arrFavslist) => ({
  type: TYPES.LOAD_FAVS,
  payload: arrFavslist,
});

export const updateFavs = (favslist) => ({
  type: TYPES.UPDATE_FAVS,
  payload: favslist,
});

export const deleteFavs = (id) => ({ type: TYPES.DELETE_FAVS, payload: id });

export const openFavs = (favs) => ({ type: TYPES.OPEN_FAVS, payload: favs });

export const openFavsById = (id) => ({
  type: TYPES.OPEN_FAVS_BY_ID,
  payload: id,
});

export const cleanFavs = () => ({
  type: TYPES.CLEAN,
});
