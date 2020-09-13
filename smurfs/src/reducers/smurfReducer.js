import {FETCH_SMURFS, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAIL, ADD_SMURFS, ADD_SMURFS_SUCCESS, ADD_SMURFS_FAIL} from '../actions'
const initialState = {
    smurfs: [],
    isFetching: false,
    isPosting: false,
    error: ""
}

export const smurfReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return state
    }
}