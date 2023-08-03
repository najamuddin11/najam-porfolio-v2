import { GET_CLIP, TOGGLE_CLIP } from "../types";

const initialState = true;

const clipReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_CLIP:
      state = action.payload;
      return state;
    case GET_CLIP:
      return state;
    default:
      return state;
  }
};
export default clipReducer;
