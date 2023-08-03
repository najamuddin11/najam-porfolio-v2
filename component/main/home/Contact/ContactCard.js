import React from "react";
import Icon from "../../../common/Icon";
import styles from "./contact.module.css";

const ContactCard = (props) => {
  const { data } = props;
  return (
    <div className={`${styles.contact_card}`}>
      <a href={data.link} target="_blank">
        <Icon
          source={{
            iconLight: data.iconLight,
            iconDark: data.iconDark,
          }}
          text={"icons"}
        />
      </a>
      <div className={`${styles.contact_card_text}`}>
        {data.text.map((item) => (
          <p key={item}>{item}</p>
        ))}
      </div>
    </div>
  );
};

export default ContactCard;
