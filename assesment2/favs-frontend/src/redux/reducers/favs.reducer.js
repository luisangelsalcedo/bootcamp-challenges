import { bindActionCreators } from "redux";
import { TYPES } from "../../constants";

const initialState = {
  favsList: [],
};

export const favsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.CREATE_FAVS:
      return { ...state, favsList: [...state.favsList, action.payload] };

    case TYPES.LOAD_FAVS:
      return { ...state, favsList: action.payload };

    case TYPES.UPDATE_FAVS:
      return {
        ...state,
        favsList: state.favsList.map((favs) =>
          favs._id === action.payload._id ? action.payload : favs
        ),
        open: action.payload,
      };

    case TYPES.DELETE_FAVS:
      return {
        ...state,
        favsList: state.favsList.filter(({ _id }) => _id !== action.payload),
      };

    case TYPES.OPEN_FAVS:
      return {
        ...state,
        open: action.payload,
      };

    case TYPES.OPEN_FAVS_BY_ID:
      return {
        ...state,
        open: state.favsList.find(({ _id }) => _id === action.payload),
      };

    case TYPES.CLEAN:
      return initialState;

    default:
      return state;
  }
};
