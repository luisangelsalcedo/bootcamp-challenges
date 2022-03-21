import { actions } from "../../constants";

const initialState = {
  currentEdit: {},
  currentShow: {},
  loading: true,
  boardsList: [],
  boardOwner: [],
  boardGuest: [],
};

export const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CREATE_BOARD:
      return {
        ...state,
        loading: false,
        boardsList: [...state.boardsList, action.payload],
      };

    case actions.LOAD_BOARDS:
      return {
        ...state,
        boardsList: [
          ...action.payload.boardOwner,
          ...action.payload.boardGuest,
        ],
        loading: false,
      };

    case actions.EDIT_BOARD:
      return {
        ...state,
        currentEdit: action.payload,
      };

    case actions.UPDATE_BOARD:
      return {
        ...state,
        boardsList: state.boardsList.map(board =>
          board._id === action.payload._id ? action.payload : board
        ),
        loading: false,
      };

    case actions.DELETE_BOARD:
      return {
        ...state,
        boardsList: state.boardsList.filter(
          ({ _id }) => _id !== action.payload
        ),
        loading: false,
      };

    case actions.ADD_GUESTS:
      return {
        ...state,
        boardsList: state.boardsList.map(board =>
          board._id === action.payload.boardID
            ? { ...board, guests: action.payload.guests }
            : board
        ),

        loading: false,
      };

    case actions.ADD_TASK:
      return {
        ...state,
        boardsList: state.boardsList.map(board =>
          board._id !== action.payload.boardID
            ? board
            : { ...board, tasks: [...board.tasks, action.payload.task] }
        ),
      };

    case actions.REMOVE_TASK:
      return {
        ...state,
        boardsList: state.boardsList.map(board =>
          board._id !== action.payload.boardID
            ? board
            : {
                ...board,
                tasks: board.tasks.filter(
                  ({ _id }) => _id !== action.payload.task._id
                ),
              }
        ),
      };
    //

    case actions.GET_BOARD_BY_ID:
      return { ...state, currentShow: action.payload, loading: false };

    case actions.LOADING_BOARDS:
      return { ...state, loading: true };

    case actions.CLEAN_ALL:
      return { ...initialState };

    default:
      return state;
  }
};
