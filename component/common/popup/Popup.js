import { useEffect, useRef } from "react";
import styles from "./popup.module.css";

const Popup = (props) => {
  function closeModalDone(e) {
    e.stopPropagation();
    props.handlePopup();
  }
  const popup = useRef();
  useEffect(() => {
    return () => {
      // document.body.style.overflowY = "auto";
    };
  }, []);

  return (
    <div className={`${styles.popup}`} onClick={closeModalDone} ref={popup}>
      <div
        className={`${styles.popup_content}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`${styles.popup_content_container}`}>
          <div
            className={`hover_size ${styles.popup_close}`}
            onClick={closeModalDone}
          >
            &times;
          </div>
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default Popup;
