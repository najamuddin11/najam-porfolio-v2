import React from "react";
import styles from "./drop-down.module.css";

const DropdownItems = (props) => {
  const { data, onClick } = props;
  return (
    <div className={styles.dropdown_item}>
      <a href={data.link} onClick={onClick} className={styles.dropdown_link}>
        {data.title}
      </a>
    </div>
  );
};

export default DropdownItems;
