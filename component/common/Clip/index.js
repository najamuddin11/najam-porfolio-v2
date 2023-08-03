import React, { useEffect, useState } from "react";
import styles from "./clip.module.css";
import check_dark from "../../../assets/icons/check-dark.svg";
import check_light from "../../../assets/icons/check-light.svg";
import down_dark from "../../../assets/icons/chevron-down-dark.svg";
import down_light from "../../../assets/icons/chevron-down-light.svg";
import up_dark from "../../../assets/icons/chevron-up-dark.svg";
import up_light from "../../../assets/icons/chevron-up-light.svg";
import Image from "next/image";
import useWindowSize from "../../hooks/useWindowSize";
import { connect } from "react-redux";
import { toggleClip } from "../../../state-management/actions/clip";

const level = ["Beginner", "Intermediate", "Expert"];

const Clip = (props) => {
  const { value, skill, clipMode } = props;
  const [proficiency, setProficiency] = useState(false);
  const size = useWindowSize();

  const handleClick = () => {
    if (clipMode && !proficiency) {
      setProficiency(true);
      props.toggleClip(false);
    } else if (!clipMode && proficiency) {
      props.toggleClip(true);
      setProficiency(false);
    }
  };

  return (
    <div className={`hover_size ${skill && styles.skills_hover}`}>
      <div className={`${styles.clip}`}>
        <p className={`${styles.clip_text}`}>{value}</p>
        {/* {size < 1024 && skill && (
          <Image
            src={down_dark}
            alt="down arrow icon"
            className={`${styles.clip_icon}`}
            onClick={() => {
              handleClick();
            }}
          />
        )} */}
      </div>
      {/* {skill && size > 1023 && <Proficiency skill={skill} />} */}

      {/* {skill && proficiency && <Proficiency skill={skill} />} */}
    </div>
  );
};

const Proficiency = (props) => {
  const { skill } = props;
  return (
    <div className={`${styles.skills_container}`}>
      <p>Proficiency level</p>
      <div>
        {level.map((item) => (
          <div className={`${styles.clip_inner_container}`} key={item}>
            <p>{item}</p>
            {item === skill && <Image src={check_dark} alt="check icon" />}
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  clipMode: state.clipMode,
});
const mapDispatchToProps = (dispatch) => {
  return {
    toggleClip: (state) => dispatch(toggleClip(state)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Clip);
