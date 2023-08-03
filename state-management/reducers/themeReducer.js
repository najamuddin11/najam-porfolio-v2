import { INIT_THEME, TOGGLE_THEME } from "../types";

const initialState = "";
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME: {
      const theme = localStorage.getItem("theme");
      if (theme === "light") {
        localStorage.setItem("theme", "dark");
        return "dark";
      } else {
        localStorage.setItem("theme", "light");
        return "light";
      }
    }
    case INIT_THEME: {
      const theme = localStorage.getItem("theme");
      if (!theme) {
        localStorage.setItem("theme", "dark");
        return "dark";
      }
      return theme;
    }
    default:
      return state;
  }
};
export default themeReducer;
