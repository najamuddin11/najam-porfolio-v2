import React from "react";
import styles from "./error.module.css";
const InputError = (props) => {
  const { msg } = props;
  return <div className={`${styles.error_msg}`}>{msg}</div>;
};

export default InputError;
