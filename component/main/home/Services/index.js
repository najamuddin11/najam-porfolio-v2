import React, { useEffect } from "react";
import { connect } from "react-redux";
import { clearErrors } from "../../../../state-management/actions/errors";
const Services = (props) => {
  useEffect(() => {
    return () => {
      clearErrors();
    };
  }, []);
  return <div>Services</div>;
};
const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { clearErrors })(Services);
