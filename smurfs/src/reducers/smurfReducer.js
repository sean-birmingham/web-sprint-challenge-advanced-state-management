import {
  FETCH_SMURFS,
  FETCH_SMURFS_SUCCESS,
  FETCH_SMURFS_FAIL,
  ADD_SMURFS,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAIL,
} from "../actions";
const initialState = {
  smurfs: [],
  isFetching: false,
  isPosting: false,
  error: "",
};

export const smurfReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SMURFS:
      return {
        ...state,
        isFetching: true,
      };

    case FETCH_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isFetching: false,
      };

    case FETCH_SMURFS_FAIL:
      return {
        ...state,
        isFetching: false,
        error: action.payload,
      };

    case ADD_SMURFS:
      return {
        ...state,
        isPosting: true,
      };

    case ADD_SMURFS_SUCCESS:
      return {
        ...state,
        smurfs: [...state.smurfs, action.payload],
        isPosting: false,
      };

    case ADD_SMURFS_FAIL:
      return {
        ...state,
        isPosting: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
