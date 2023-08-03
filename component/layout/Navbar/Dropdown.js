import React from "react";
import styles from "./drop-down.module.css";
import DropdownItems from "./DropdownItems";

const Dropdown = (props) => {
  const { items, onClick, onMouseLeave } = props;
  return (
    <div className={styles.dropdown} onMouseLeave={onMouseLeave}>
      {items.map((item) => (
        <DropdownItems key={item.id} data={item} onClick={onClick} />
      ))}
    </div>
  );
};

export default Dropdown;
