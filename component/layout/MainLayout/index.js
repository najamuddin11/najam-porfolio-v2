import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../../../state-management/actions/errors";
import { initTheme } from "../../../state-management/actions/theme";
import Cursor from "../Cursor";
const MainLayout = (props) => {
  const { children, initTheme, themeMode } = props;
  let darkTheme = {
    "--bg-primary": "#1E1E1E",
    "--text-primary": "#F1F1F1",
    "--text-secondary": "#B2B2B2",
    "--bg-navbar": "#000000",
    "--bg-secondary": "#282828",
  };
  let lightTheme = {
    "--bg-primary": "#fffff",
    "--text-primary": "#232E35",
    "--text-secondary": "#656D72",
    "--bg-navbar": "#f0f0f0",
    "--bg-secondary": "#FBFBFB",
  };
  useEffect(() => {
    initTheme();
    return () => {
      props.clearErrors();
    };
  }, []);

  useEffect(() => {
    const root = document.querySelector(":root");

    if (themeMode === "light") {
      for (let key in lightTheme) {
        root.style.setProperty(key, lightTheme[key]);
      }
    } else {
      for (let key in darkTheme) {
        root.style.setProperty(key, darkTheme[key]);
      }
    }
  }, [themeMode]);

  return typeof window !== "undefined" ? (
    <div className={`${themeMode}`}>
      <Cursor />

      {children}
    </div>
  ) : (
    <div>Loading...</div>
  );
};
const mapStateToProps = (state) => ({
  errors: state.errors,
  themeMode: state.themeMode,
});
export default connect(mapStateToProps, { clearErrors, initTheme })(MainLayout);
