import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../../../state-management/actions/errors";
import logo from "../../../assets/logo/Logo.svg";
import darkLogo from "../../../assets/logo/DarkLogo.svg";

import barIcon from "../../../assets/icons/bars-solid.svg";
import barIconDark from "../../../assets/icons/bars-solid-dark.svg";

import moon from "../../../assets/icons/moon.svg";
import sun from "../../../assets/icons/Sun.svg";
import ellipse_dark from "../../../assets/icons/ellipse-dark.svg";
import ellipse_light from "../../../assets/icons/ellipse-light.svg";
import home_light from "../../../assets/icons/home-light.svg";
import home_purple from "../../../assets/icons/home-purple.svg";
import about_purple from "../../../assets/icons/about-purple.svg";
import about_light from "../../../assets/icons/about-light.svg";
import portfolio_light from "../../../assets/icons/briefcase-light.svg";
import portfolio_purple from "../../../assets/icons/briefcase-purple.svg";
import contact_light from "../../../assets/icons/phone-call-light.svg";
import contact_purple from "../../../assets/icons/phone-call-purple.svg";
import down_dark from "../../../assets/icons/chevron-down-light.svg";
import down_light from "../../../assets/icons/chevron-down-dark.svg";
import up_dark from "../../../assets/icons/chevron-up-dark.svg";
import up_light from "../../../assets/icons/chevron-up-light.svg";

import styles from "./navbar.module.css";
import Image from "next/image";
import { toggleTheme } from "../../../state-management/actions/theme";
import Link from "next/link";
import Dropdown from "./Dropdown";
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

  const dropdownData = [
    { id: 1, title: "Services", link: "#services" },
    { id: 2, title: "Work Experience", link: "#work" },
    { id: 3, title: "Education and Skills", link: "#education" },
  ];

  const [toggleDropdown, setToggleDropdown] = useState(false);

  return (
    <div className={`${styles.navbar}`}>
      <div className={`container ${styles.nav}`}>
        <div className={`${styles.inner_container}`}>
          <div>
            <a
              href="/"
              className={`${styles.nav_anchor} ${styles.brand}`}
              onMouseOver={() => setToggleDropdown(false)}
            >
              <Image
                src={themeMode === "dark" ? darkLogo : logo}
                alt=""
                srcSet=""
              />
            </a>
          </div>
          <div className={`${styles.nav_items_container}`}>
            <a
              href="/"
              className={`${styles.nav_anchor} ${styles.nav_links}`}
              onMouseOver={() => setToggleDropdown(false)}
            >
              Home
            </a>
            <div
              className={styles.nav_dropdown}
              onMouseOver={() => setToggleDropdown(true)}
            >
              <Link
                href=""
                className={`${styles.nav_anchor}`}
                onClick={() => setToggleDropdown(!toggleDropdown)}
              >
                About
              </Link>
              {toggleDropdown && (
                <Dropdown
                  items={dropdownData}
                  onClick={() => setToggleMenu(!toggleMenu)}
                  onMouseLeave={() => setToggleDropdown(false)}
                />
              )}
            </div>
            <a
              href="#portfolio"
              className={`${styles.nav_anchor} ${styles.nav_links}`}
              onMouseOver={() => setToggleDropdown(false)}
            >
              Portfolio
            </a>

            <a
              href="#contact"
              className={`${styles.nav_anchor} ${styles.nav_links}`}
              onMouseOver={() => setToggleDropdown(false)}
            >
              Contact
            </a>
          </div>
          <div
            className={`${styles.last_nav}`}
            onMouseOver={() => setToggleDropdown(false)}
          >
            <Image
              key={themeMode}
              src={themeMode === "light" ? moon : sun}
              alt="..."
              className={`hover_size ${styles.theme_toggler}`}
              onClick={() => toggleTheme()}
            />
            <Link href={process.env.NEXT_PUBLIC_RESUME_PATH} target="_blank">
              <button
                onMouseMove={(e) => onMouseMove(e)}
                className={`${styles.resume_btn}`}
                onMouseOver={() => setToggleDropdown(false)}
              >
                Resume
              </button>
            </Link>
          </div>
        </div>

        <div
          className={styles.hamburger_menu}
          onMouseOver={() => setToggleDropdown(false)}
        >
          <Image
            src={themeMode === "dark" ? barIcon : barIconDark}
            alt="menu-icon"
            className={styles.nav_icon}
            onClick={() => setToggleMenu(!toggleMenu)}
          />
          <div className={styles.mobile_menu_container} ref={mobileMenu}>
            <div className={styles.nav_head}>
              <Image src={themeMode === "dark" ? darkLogo : logo} alt="logo" />
              <div
                className={styles.close_nav}
                onClick={() => setToggleMenu(!toggleMenu)}
              >
                &times;
              </div>
            </div>
            <a
              href="#"
              className={styles.nav_anchor}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <Image
                className={styles.nav_link_icon}
                src={themeMode === "dark" ? home_light : home_purple}
              />
              Home
            </a>

            <div
              className={styles.nav_dropdown}
              onClick={() => setToggleDropdown(!toggleDropdown)}
            >
              <a href="#about" className={styles.nav_anchor}>
                <Image
                  className={styles.nav_link_icon}
                  src={themeMode === "dark" ? about_light : about_purple}
                />
                About
              </a>
              <Image
                src={
                  toggleDropdown
                    ? themeMode === "dark"
                      ? up_light
                      : up_dark
                    : themeMode === "dark"
                    ? down_dark
                    : down_light
                }
              />
            </div>
            <div>
              {toggleDropdown && (
                <Dropdown
                  items={dropdownData}
                  onClick={() => setToggleMenu(!toggleMenu)}
                />
              )}
            </div>

            <a
              href="#portfolio"
              className={styles.nav_anchor}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <Image
                className={styles.nav_link_icon}
                src={themeMode === "dark" ? portfolio_light : portfolio_purple}
              />
              Portfolio
            </a>

            <a
              href="#contact"
              className={styles.nav_anchor}
              onClick={() => setToggleMenu(!toggleMenu)}
            >
              <Image
                className={styles.nav_link_icon}
                src={themeMode === "dark" ? contact_light : contact_purple}
              />
              Contact
            </a>

            <div className={styles.splitter} />

            <div className={styles.mobile_theme_toggle_container}>
              <div className={styles.mobile_theme_toggle_container}>
                <Image
                  key={themeMode}
                  src={themeMode === "light" ? moon : sun}
                  alt="..."
                  className={`hover_size ${styles.theme_toggler}`}
                />
                <p>{themeMode === "light" ? "dark" : "light"} mode</p>
              </div>
              <div
                onClick={() => toggleTheme()}
                className={styles.mobile_theme_toggle}
                style={{
                  justifyContent: `${
                    themeMode === "dark" ? "flex-end" : "flex-start"
                  }`,
                }}
              >
                <Image
                  src={themeMode === "dark" ? ellipse_dark : ellipse_light}
                  alt="..."
                />
              </div>
            </div>
            <Link href={process.env.NEXT_PUBLIC_RESUME_PATH} target="_blank">
              <button
                style={{ marginTop: "40px" }}
                onMouseMove={(e) => onMouseMove(e)}
                className={`${styles.resume_btn}`}
              >
                Resume
              </button>
            </Link>
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
