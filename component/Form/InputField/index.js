import React from "react";
import InputError from "../InputError";
import styles from "./input-field.module.css";

const InputField = (props) => {
  const { type, placeholder, handleChange, value, name, error } = props;
  return (
    <div className="form-control">
      <input
        type={type}
        placeholder={placeholder}
        onChange={handleChange}
        value={value}
        className={`${styles.input_field} ${error && styles.input_field_error}`}
        name={name}
      />
      {error && <InputError msg={error} />}
    </div>
  );
};

export default InputField;
