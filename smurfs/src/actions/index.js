import axios from "axios";

export const FETCH_SMURFS = "FETCH_SMURFS";
export const FETCH_SMURFS_SUCCESS = "FETCH_SMURFS_SUCCESS";
export const FETCH_SMURFS_FAIL = "FETCH_SMURFS_FAIL";
export const ADD_SMURFS = "ADD_SMURFS";
export const ADD_SMURFS_SUCCESS = "ADD_SMURFS_SUCCESS";
export const ADD_SMURFS_FAIL = "ADD_SMURFS_FAIL";

export const fetchSmurfs = () => (dispatch) => {
  dispatch({ type: FETCH_SMURFS });
  axios
    .get("http://localhost:3333/smurfs")
    .then((res) => dispatch({ type: FETCH_SMURFS_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch({ type: FETCH_SMURFS_FAIL, err });
    });
};

export const addSmurf = (smurf) => (dispatch) => {
  dispatch({ type: ADD_SMURFS });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then((res) => dispatch({ type: ADD_SMURFS_SUCCESS, payload: res.data }))
    .catch((err) => {
      dispatch({ type: ADD_SMURFS_FAIL, payload: err });
    });
};
