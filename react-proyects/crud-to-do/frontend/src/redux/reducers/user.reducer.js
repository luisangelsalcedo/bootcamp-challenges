import { actions } from "../../constants";

const initialState = {
  users: [],
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.LOAD_USERS:
      return { ...state, users: action.payload };

    case actions.CLEAN_ALL:
      return { ...initialState };

    default:
      return state;
  }
};
