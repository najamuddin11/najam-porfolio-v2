import React, { useEffect } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../../../state-management/actions/errors";
import profilePic from "../../../assets/images/front.png";
import styles from "./header.module.css";
const Header = (props) => {
  const { clearErrors } = props;
  useEffect(() => {
    return () => {
      clearErrors();
    };
  }, []);
  return (
    <div className={`${styles.header}`}>
      <div className={`container ${styles.header_container}`}>
        <div className={`${styles.header_leftCol}`}>
          <h4>MY NAME IS</h4>
          <h1>
            Najam <span style={{ color: "var(--purple)" }}>Uddin</span>
          </h1>
          <p>
            Creative front-end developer with more than +5 years of experience
            in enterprise companies and startups. Proficient in JavaScript,
            Angular, and React. Passionate about UI/UX
          </p>
        </div>
        <div className={`${styles.header_rightCol}`}>
          <div>
            <div className={`${styles.header_rightColImg_bg}`}></div>

            <div className={`${styles.header_rightColImg_wrapper}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { clearErrors })(Header);
