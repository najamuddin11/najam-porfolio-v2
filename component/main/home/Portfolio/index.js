import React, { useEffect, useRef, useState } from "react";
import styles from "./portfolio.module.css";
import link from "../../../../assets/icons/link.svg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import left_dark from "../../../../assets/icons/left-dark.svg";
import left_light from "../../../../assets/icons/left-light.svg";
import Link from "next/link";
import arrow from "../../../../assets/icons/arrow.svg";
import darkArrow from "../../../../assets/icons/arrow-dark.svg";

import { connect } from "react-redux";

const Portfolio = (props) => {
  const {
    handlePortfolioPopup,
    handlePortfolioPopupData,
    portfolio,
    themeMode,
    seeAll,
  } = props;

  const swiperRef = useRef();
  const [beginning, setBeginning] = useState(true);
  const [endding, setEndding] = useState(false);

  const handleClick = (step) => {
    step === "prev"
      ? swiperRef.current?.slidePrev()
      : swiperRef.current?.slideNext();
  };

  const handlePopup = (item) => {
    handlePortfolioPopupData(item);
    handlePortfolioPopup();
  };

  const sliderSettings = {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    576: {
      slidesPerView: 2,
      spaceBetween: 30,
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  };
  return (
    <section id="portfolio">
      <div className={`container`}>
        <div className={`${styles.portfolio_stepper_container}`}>
          <div>
            <h5>My Works</h5>
            <h2>Freatured Portfolios</h2>
          </div>
          <div className={`${styles.swiper_button_container}`}>
            <div
              className={`hover_size ${styles.swiper_button} ${
                beginning && styles.swiper_end
              }`}
              onClick={() => handleClick("prev")}
            >
              <Image
                src={themeMode === "dark" ? left_dark : left_light}
                alt="left icon"
              />
            </div>
            <div
              className={`hover_size ${styles.swiper_button} ${
                endding && styles.swiper_end
              }`}
              onClick={() => handleClick("next")}
            >
              <Image
                style={{ transform: "rotate(180deg)" }}
                src={themeMode === "dark" ? left_dark : left_light}
                alt="right icon"
              />
            </div>
          </div>
        </div>
        <div className={`${styles.seeAll_link_container}`}>
          <Link href="/portfolio" className={`${styles.seeAll_link}`}>
            <div>See all projects</div>
            <div className={`${styles.arrow_img_container}`}>
              <Image
                className={`${styles.seeAll_link_arrow}`}
                src={themeMode === "dark" ? darkArrow : arrow}
                alt="..."
              />
            </div>
          </Link>
        </div>
        <div>
          <Swiper
            ref={swiperRef}
            breakpoints={sliderSettings}
            loop={false}
            loopFillGroupWithBlank={true}
            onBeforeInit={(swiper) => {
              swiperRef.current = swiper;
            }}
            onSlideChange={(current) => {
              setBeginning(current.isBeginning);
              setEndding(current.isEnd);
            }}
          >
            {portfolio?.map((item) => (
              <SwiperSlide key={item.id} onClick={() => handlePopup(item)}>
                <div className={`hover_color ${styles.portfolio_swiper}`}>
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

                      {/* {item?.projectLogo ? (
                      <Image src={item?.projectLogo} alt="" />
                    ) : (
                      <h4>{item.title}</h4>
                    )} */}
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
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
  themeMode: state.themeMode,
});
export default connect(mapStateToProps)(Portfolio);
