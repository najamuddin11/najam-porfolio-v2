import React from "react";
import InputError from "../InputError";
import styles from "./text-area.module.css";

const TextArea = (props) => {
  const { value, placeholder, handleChange, name, error } = props;
  return (
    <div className="form-control">
      <textarea
        name={name}
        placeholder={placeholder}
        onChange={handleChange}
        className={`${styles.text_area}  ${error && styles.input_field_error}`}
        value={value}
      />
      {error && <InputError msg={error} />}
    </div>
  );
};

export default TextArea;
