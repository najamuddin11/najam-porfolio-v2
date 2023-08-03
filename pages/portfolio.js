import React, { useEffect, useRef, useState } from "react";
import { connect } from "react-redux";
import Popup from "../component/common/popup/Popup";
import Footer from "../component/layout/Footer";
import Header from "../component/layout/Header";
import SecondaryHeader from "../component/layout/Header/SecondaryHeader";
import Navbar from "../component/layout/Navbar";
import Portfolio from "../component/main/home/Portfolio";
import AllPortfolio from "../component/main/home/Portfolio/AllPortfolio";
import PortfolioPopup from "../component/main/home/Portfolio/PortfolioPopup";
import { clearErrors } from "../state-management/actions/errors";
import { getHomeData } from "../state-management/actions/home";
const portfolio = (props) => {
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
    props?.getHomeData();

    return () => {
      props?.clearErrors();
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
      {console.log(portfolioPopupShow)}
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
  portfolio
);
