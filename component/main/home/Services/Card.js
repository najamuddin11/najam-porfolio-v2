import React from "react";
import styles from "./card.module.css";
import Icon from "../../../common/Icon";

const Card = (props) => {
  const { data } = props;
  return (
    <div className={`hover_color ${styles.service_card}`}>
      <Icon
        source={{ iconDark: data.iconDark, iconLight: data.iconLight }}
        text={`${data.title} icon`}
        center={true}
      />
      <h4>{data.title}</h4>
      <p>{data.details}</p>
    </div>
  );
};

export default Card;
