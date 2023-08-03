import React from "react";
import styles from "./loader.module.css";
const Loader = (props) => {
  const { size } = props;
  return (
    <div
      style={{ height: size, width: size }}
      className={`${styles.loader}`}
    ></div>
  );
};

export default Loader;
