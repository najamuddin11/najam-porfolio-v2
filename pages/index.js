import React, { useEffect } from "react";
import { connect } from "react-redux";
import Header from "../component/layout/Header";
import Navbar from "../component/layout/Navbar";
import { clearErrors } from "../state-management/actions/errors";

const Home = (props) => {
  useEffect(() => {
    return () => {
      props?.clearErrors();
    };
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
      <div>Hello</div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  errors: state.errors,
  themeMode: state.themeMode,
});
export default connect(mapStateToProps, { clearErrors })(Home);
