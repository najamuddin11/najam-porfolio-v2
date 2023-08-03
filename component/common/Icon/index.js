import Image from "next/image";
import React from "react";
import { connect } from "react-redux";
import styles from "./icon.module.css";

const Icon = (props) => {
  const { source, text, themeMode, center } = props;
  return (
    <div
      className={`hover_size ${styles.icon_container} ${
        center && styles.icon_centered
      }`}
    >
      <Image
        src={themeMode === "dark" ? source.iconDark : source.iconLight}
        alt={text}
      />
    </div>
  );
};

const mapStateToProps = (state) => ({
  themeMode: state.themeMode,
});

export default connect(mapStateToProps)(Icon);
