import React, { useEffect, useRef, useState } from "react";
import styles from "../portfolio.module.css";
import link from "../../../../../assets/icons/link.svg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";

import { connect } from "react-redux";

const AllPorfolio = (props) => {
  const { handlePortfolioPopup, handlePortfolioPopupData, portfolio } = props;

  const handlePopup = (item) => {
    handlePortfolioPopupData(item);
    handlePortfolioPopup();
  };

  return (
    <section>
      <div className={`container`}>
        <div className={`${styles.portfolio_stepper_container}`}>
          <div>
            <h5>My Works</h5>
            <h2>Portfolio</h2>
          </div>
        </div>
        <div>
          <div className={`${styles.seeAllPortfolio_container}`}>
            {portfolio?.map((item) => (
              <div
                key={item?.id}
                className={`hover_color ${styles.portfolio_cards}`}
                onClick={() => handlePopup(item)}
              >
                <div className={`${styles.portfolio_thumbnail_container}`}>
                  <Image
                    src={item.image}
                    alt="project thumbnail"
                    className={`${styles.portfolio_thumbnail}`}
                  />
                </div>
                <div className={`${styles.portfolio_content}`}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                    }}
                  >
                    <h4 className={`${styles.portfolio_title}`}>
                      {item.title}
                    </h4>

                    {item?.link && (
                      <Link href={item?.link} target="_blank">
                        <Image src={link} alt="link icon" />
                      </Link>
                    )}
                  </div>
                  <div className={`${styles.portfolio_details}`}>
                    <div className={`${styles.portfolio_details_buildWith}`}>
                      Build with <span>{item.companyBuiltWith}</span> team
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  themeMode: state.themeMode,
});
export default connect(mapStateToProps)(AllPorfolio);
