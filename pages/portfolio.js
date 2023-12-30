import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Popup from "../component/common/popup/Popup";
import Footer from "../component/layout/Footer";
import SecondaryHeader from "../component/layout/Header/SecondaryHeader";
import Navbar from "../component/layout/Navbar";
import AllPortfolio from "../component/main/home/Portfolio/AllPortfolio";
import PortfolioPopup from "../component/main/home/Portfolio/PortfolioPopup";
import { clearErrors } from "../state-management/actions/errors";
import { getHomeData } from "../state-management/actions/home";
const Portfolio = (props) => {
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
    <div>
      <div ref={portfolioPopup}>
        {portfolioPopupShow && (
          <Popup handlePopup={handlePortfolioPopup}>
            <PortfolioPopup portfolioPopupData={portfolioPopupData} />
          </Popup>
        )}
      </div>
      <Navbar />
      <SecondaryHeader />
      <AllPortfolio
        portfolio={props?.homeData?.portfolioData}
        handlePortfolioPopup={handlePortfolioPopup}
        handlePortfolioPopupData={handlePortfolioPopupData}
      />
      <Footer />
    </div>
  );
};
const mapStateToProps = (state) => ({
  errors: state.errors,
  homeData: state.homeData,
});
export default connect(mapStateToProps, { clearErrors, getHomeData })(
  Portfolio
);
