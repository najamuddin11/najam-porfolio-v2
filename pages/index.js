import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../component/layout/Header";
import Navbar from "../component/layout/Navbar";
import Education from "../component/main/home/Education";
import Portfolio from "../component/main/home/Portfolio";
import Services from "../component/main/home/Services";
import Testimonials from "../component/main/home/Testimonials";
import WorkExperience from "../component/main/home/WorkExperience";
import { clearErrors } from "../state-management/actions/errors";
import { getHomeData } from "../state-management/actions/home";
import Contact from "../component/main/home/Contact";
import Footer from "../component/layout/Footer";
import { useState } from "react";
import { useRef } from "react";
import PortfolioPopup from "../component/main/home/Portfolio/PortfolioPopup";
import Popup from "../component/common/popup/Popup";

const Home = (props) => {
  const { getHomeData, clearErrors } = props;
  const [portfolioPopupShow, setPortfolioPopupShow] = useState(false);
  const handlePortfolioPopup = () => {
    setPortfolioPopupShow((prev) => !prev);
  };
  const [portfolioPopupData, setPortfolioPopupData] = useState();
  const handlePortfolioPopupData = (data) => {
    setPortfolioPopupData(data);
  };

  const portfolioPopup = useRef();
  useEffect(() => {
    getHomeData();

    return () => {
      clearErrors();
    };
  }, []);
  useEffect(() => {
    if (portfolioPopupShow) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [portfolioPopupShow]);
  return (
    <React.Fragment>
      <div ref={portfolioPopup}>
        {portfolioPopupShow && (
          <Popup handlePopup={handlePortfolioPopup}>
            <PortfolioPopup portfolioPopupData={portfolioPopupData} />
          </Popup>
        )}
      </div>
      <Navbar />
      <Header />
      <Services services={props?.homeData?.serviceData} />
      <Portfolio
        portfolio={props?.homeData?.portfolioData}
        handlePortfolioPopup={handlePortfolioPopup}
        handlePortfolioPopupData={handlePortfolioPopupData}
      />
      <WorkExperience experience={props?.homeData?.workExperienceData} />
      {props?.homeData?.testimonialsData?.length > 2 && (
        <Testimonials testimonials={props?.homeData?.testimonialsData} />
      )}
      <Education
        education={props?.homeData?.educationData}
        skills={props?.homeData?.skillsData}
      />
      <Contact contact={props?.homeData?.contactData} />
      <Footer />
    </React.Fragment>
  );
};
const mapStateToProps = (state) => ({
  errors: state.errors,
  themeMode: state.themeMode,
  homeData: state.homeData,
});
export default connect(mapStateToProps, { clearErrors, getHomeData })(Home);
