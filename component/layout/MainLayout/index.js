import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../../../state-management/actions/errors";
import { initTheme } from "../../../state-management/actions/theme";
import Cursor from "../Cursor";
import HeaderParticles from "../HeaderParticles";

const MainLayout = (props) => {
  const { children, initTheme, themeMode } = props;
  let darkTheme = {
    "--bg-primary": "#1E1E1E",
    "--text-primary": "#F1F1F1",
    "--text-secondary": "#B2B2B2",
    "--bg-navbar": "#000000",
    "--bg-secondary": "#282828",
    "--bg-alternative": "#4f4f4f",
    "--box-background": "#4f4f4f",
    "--box-text": "#F1F1F1",
    "--bg-popup": "#4f4f4f",
    "--bg-icon-container": "#f2f2f2",
    "--bg-card": "#4f4f4f",
  };
  let lightTheme = {
    "--bg-primary": "#fffff",
    "--text-primary": "#232E35",
    "--text-secondary": "#656D72",
    "--bg-navbar": "#f0f0f0",
    "--bg-secondary": "#FBFBFB",
    "--bg-alternative": "#FBFBFB",
    "--box-background": "#eae6fe",
    "--box-text": "#7e74f1",
    "--bg-popup": "#ffffff",
    "--bg-icon-container": "#eae6fe",
    "--bg-card": "#ffffff",
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
