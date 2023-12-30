import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { connect } from "react-redux";
import { postContact } from "../../../../state-management/actions/home";
import Loader from "../../../common/Loader";
import CustomButton from "../../../Form/CustomButton";
import InputField from "../../../Form/InputField";
import TextArea from "../../../Form/TextArea";
import styles from "./contact.module.css";
import ContactCard from "./ContactCard";

const Contact = (props) => {
  const { errors } = props;
  const formInitial = {
    name: "",
    email: "",
    message: "",
  };
  const [formControl, setFormControl] = useState(formInitial);
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormControl((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    props.postContact(formControl, setFormControl, setLoading, setStatus);
  };

  useEffect(() => {
    let timer;
    timer = setTimeout(() => {
      setStatus();
    }, 5000);

    return () => clearTimeout(timer);
  }, [status]);

  const { contact } = props;
  return (
    <section id="contact">
      <div className="container">
        <h5>Contact me</h5>
        <h2>Contact me</h2>
        <div className={`${styles.contact_inner_container}`}>
          <div className={`${styles.contact_row}`}>
            <form
              onSubmit={handleSubmit}
              className={`${styles.form_container}`}
            >
              {status &&
                (status === 200 ? (
                  <div
                    className={`${styles.alert_message} ${styles.alert_success}`}
                  >
                    Your Message Has Been Sent
                  </div>
                ) : (
                  <div
                    className={`${styles.alert_message} ${styles.alert_error}`}
                  >
                    Something Went Wrong! Please Try Again
                  </div>
                ))}

              <InputField
                type="text"
                value={formControl.name}
                name="name"
                handleChange={handleChange}
                placeholder="Name"
                error={
                  errors?.data?.validationErrors?.name
                    ? errors?.data?.validationErrors?.name
                    : false
                }
              />
              <InputField
                type="email"
                value={formControl.email}
                name="email"
                handleChange={handleChange}
                placeholder="Email"
                error={
                  errors?.data?.validationErrors?.email
                    ? errors?.data?.validationErrors?.email
                    : false
                }
              />
              <TextArea
                type="text"
                value={formControl.message}
                name="message"
                handleChange={handleChange}
                placeholder="Message"
                error={
                  errors?.data?.validationErrors?.message
                    ? errors?.data?.validationErrors?.message
                    : false
                }
              />
              <CustomButton
                text={loading ? <Loader size={"25px"} /> : "Send Message"}
                type="submit"
              />
            </form>
            <div className={`${styles.contact_right_column}`}>
              {contact?.map((item) => (
                <ContactCard key={item.id} data={item} text={item.text} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  errors: state.errors,
});
export default connect(mapStateToProps, { postContact })(Contact);
