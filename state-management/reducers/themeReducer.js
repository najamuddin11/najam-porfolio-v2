import { getTheme } from "../actions/theme";
import { INIT_THEME, TOGGLE_THEME } from "../types";

const initialState = "";
const themeReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_THEME:
      if (typeof window !== "undefined") {
        if (localStorage.getItem("theme") === "light") {
          localStorage.setItem("theme", "dark");
          return "dark";
        } else {
          localStorage.setItem("theme", "light");
          return "light";
        }
      }
    case INIT_THEME:
      return action.payload;
    default:
      return state;
  }
};
export default themeReducer;
