import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../../../state-management/actions/errors";
import logo from "../../../assets/logo/Logo.svg";
import darkLogo from "../../../assets/logo/DarkLogo.svg";

import barIcon from "../../../assets/icons/bars-solid.svg";

import moon from "../../../assets/icons/moon.svg";
import sun from "../../../assets/icons/Sun.svg";

import styles from "./navbar.module.css";
import Image from "next/image";
import { toggleTheme } from "../../../state-management/actions/theme";
const Navbar = (props) => {
  const { clearErrors, themeMode, toggleTheme } = props;

  const [toggleMenu, setToggleMenu] = useState(false);
  const [isScrollable, setIsScrollable] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", getWindowHeight);
  });
  const getWindowHeight = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const isScrollableOn = 10;
    //Now In the condition change the state to smaller so if the condition is true it will change to smaller otherwise to default state
    if (distanceY > isScrollableOn) {
      setIsScrollable(false);
    } else {
      setIsScrollable(true);
    }
  };
  const mobileMenu = useRef();

  useEffect(() => {
    if (toggleMenu) {
      mobileMenu.current.style.display = "block";
    } else {
      mobileMenu.current.style.display = "none";
    }
  }, [toggleMenu]);

  useEffect(() => {
    return () => {
      clearErrors();
    };
  }, []);

  function onMouseMove(event) {
    // get cursor coordinates to container (the link itself).
    const { x, y } = event.target.getBoundingClientRect();

    // get relative coordinates.
    const relativeX = event.clientX - x;
    const relativeY = event.clientY - y;

    // apply coordinates values to CSS variables.
    event.target.style.setProperty("--x-cursor-position", relativeX);
    event.target.style.setProperty("--y-cursor-position", relativeY);
  }

  return (
    <div
      className={`${styles.navbar}`}
      //   style={{
      //     height: isScrollable ? "80px" : "70px",
      //     background: isScrollable ? "rgba(0,0,0,0)" : "var(--bg-navbar)",
      //   }}
    >
      <div className={`container ${styles.nav}`}>
        <div className={`${styles.inner_container}`}>
          <div>
            <a href="/" className={`${styles.nav_anchor} ${styles.brand}`}>
              <Image
                src={themeMode === "dark" ? darkLogo : logo}
                alt=""
                srcSet=""
              />
            </a>
          </div>
          <div className={`${styles.nav_items_container}`}>
            <a href="#" className={`${styles.nav_anchor} ${styles.nav_links}`}>
              Home
            </a>
            <a
              href="#about"
              className={`${styles.nav_anchor} ${styles.nav_links}`}
            >
              About
            </a>
            <a
              href="#portfolio"
              className={`${styles.nav_anchor} ${styles.nav_links}`}
            >
              Portfolio
            </a>
            <a
              href="#contact"
              className={`${styles.nav_anchor} ${styles.nav_links}`}
            >
              Contact
            </a>
          </div>
          <div className={`${styles.last_nav}`}>
            <Image
              key={themeMode}
              src={themeMode === "light" ? moon : sun}
              alt="..."
              className={styles.theme_toggler}
              onClick={() => toggleTheme()}
            />
            <button
              onMouseMove={(e) => onMouseMove(e)}
              className={`${styles.resume_btn}`}
            >
              Resume
            </button>
          </div>
        </div>

        <div className={styles.hamburger_menu}>
          <Image
            src={barIcon}
            alt="menu-icon"
            className={styles.nav_icon}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          <div className={styles.mobile_menu_container} ref={mobileMenu}>
            <div
              className={styles.close_nav}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              &times;
            </div>
            <a
              href="#"
              className={styles.nav_anchor}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Home
            </a>
            <div className={styles.splitter} />
            <a
              href="#about"
              className={styles.nav_anchor}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              About
            </a>
            <div className={styles.splitter} />
            <a
              href="#portfolio"
              className={styles.nav_anchor}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Portfolio
            </a>
            <div className={styles.splitter} />
            <a
              href="#contact"
              className={styles.nav_anchor}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              Contact
            </a>
            <div className={styles.splitter} />
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  errors: state.errors,
  themeMode: state.themeMode,
});
export default connect(mapStateToProps, { clearErrors, toggleTheme })(Navbar);
