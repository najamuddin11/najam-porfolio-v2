import Image from "next/image";
import React from "react";
import styles from "./footer.module.css";
import insta from "../../../assets/icons/Instagram.svg";
import git from "../../../assets/icons/GithubIcon.svg";
import twitter from "../../../assets/icons/Twitter.svg";
import linkedin from "../../../assets/icons/Linkedin.svg";
import Link from "next/link";

const Footer = () => {
  const icons = [
    { id: 1, icon: insta, url: "https://www.instagram.com/najam_uddin11/" },
    { id: 2, icon: git, url: "https://github.com/najamuddin11" },
    { id: 3, icon: twitter, url: "https://twitter.com/Najam_Uddin11" },
    {
      id: 4,
      icon: linkedin,
      url: "https://www.linkedin.com/in/najam-uddin-6641741ab/",
    },
  ];
  return (
    <footer className="container">
      <div className={`${styles.footer_container}`}>
        <div className={`${styles.footer_row}`}>
          {icons.map((item) => (
            <Link
              href={item.url}
              key={item.id}
              className={`${styles.footer_icons_links}`}
              target="_blank"
            >
              <Image src={item.icon} alt="brand-icon" />
            </Link>
          ))}
        </div>
        <p>© {new Date().getFullYear()} - Najam Uddin</p>
      </div>
    </footer>
  );
};

export default Footer;
