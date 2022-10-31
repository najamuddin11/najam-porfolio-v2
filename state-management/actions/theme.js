import { INIT_THEME, TOGGLE_THEME } from "../types";

export const getTheme = () => {
  if (typeof window !== "undefined") {
    const theme = localStorage.getItem("theme");
    if (!theme) {
      localStorage.setItem("theme", "dark");
      return "dark";
    } else {
      return "light";
    }
  }
};

export const toggleTheme = () => (dispatch) => {
  dispatch({
    type: TOGGLE_THEME,
  });
};

export const initTheme = () => (dispatch) => {
  if (typeof window !== "undefined") {
    dispatch({
      type: INIT_THEME,
      payload: localStorage.getItem("theme"),
    });
  }
};
