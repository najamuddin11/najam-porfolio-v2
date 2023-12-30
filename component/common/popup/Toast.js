import React from "react";
import "../../../styles/common/toast.scss";
const Toast = (props) => {
  const { type, msg, param } = props;
  return <div className={`msg_toast toast_${type}`}>{msg}</div>;
};

export default Toast;
