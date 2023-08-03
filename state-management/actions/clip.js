import { GET_CLIP, TOGGLE_CLIP } from "../types";

export const toggleClip = (state) => (dispatch) => {
  dispatch({
    type: TOGGLE_CLIP,
    payload: state
  });
};

export const getClip = () => (dispatch) => {
  dispatch({
    type: GET_CLIP,
  });
};
