import { INIT_THEME, TOGGLE_THEME } from "../types";

export const toggleTheme = () => (dispatch) => {
  dispatch({
    type: TOGGLE_THEME,
  });
};

export const initTheme = () => (dispatch) => {
  dispatch({
    type: INIT_THEME,
  });
};
