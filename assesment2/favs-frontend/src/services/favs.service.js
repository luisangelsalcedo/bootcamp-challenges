import { axiosHTTPclient } from "../interceptors";
import { loadAbort } from "../utils/loadAbortAxios.utils";
import { ENDPOINTS } from "../constants";

/**
 * * SERVICE: Creating a new favorites list
 * @param {Object} favslist - New Favorites list
 */
export const createFavsListService = (favslist) => {
  const controller = loadAbort();
  return {
    call: axiosHTTPclient.post(ENDPOINTS.FAVS, favslist, {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * * SERVICE: Get all favorites lists
 */
export const getAllFavsService = () => {
  const controller = loadAbort();
  return {
    call: axiosHTTPclient.get(ENDPOINTS.FAVS, {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * * SERVICE: Get favorites list by ID
 * @param {ObjectId} id - Favorites list ID
 */
export const getFavsByIdService = (id) => {
  const controller = loadAbort();
  return {
    call: axiosHTTPclient.get(`${ENDPOINTS.FAVS}/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};

/**
 * * SERVICE: Update favorites list by ID
 * @param {Object} favslist - Favorites list edited object
 */
export const updateFavsByIdService = (favslist) => {
  const controller = loadAbort();
  const { _id: id } = favslist;
  return {
    call: axiosHTTPclient.put(
      `${ENDPOINTS.FAVS}/${id}`,
      { favslist },
      {
        signal: controller.signal,
      }
    ),
    controller,
  };
};

/**
 * * SERVICE: Delete favorites list by ID
 * @param {ObjectId} id - Favorites list ID
 */
export const deleteFavsByIdService = (id) => {
  const controller = loadAbort();
  return {
    call: axiosHTTPclient.delete(`${ENDPOINTS.FAVS}/${id}`, {
      signal: controller.signal,
    }),
    controller,
  };
};
