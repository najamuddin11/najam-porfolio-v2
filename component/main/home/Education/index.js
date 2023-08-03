import Image from "next/image";
import React, { useEffect } from "react";
import Clip from "../../../common/Clip";
import styles from "./education.module.css";
import circle from "../../../../assets/icons/check-dark.svg";

const Education = (props) => {
  const { education, skills } = props;
  return (
    <section id="education">
      <div className="container">
        <h5>learning path</h5>
        <h2>Education & Skills</h2>
        <div className={`${styles.education_row}`}>
          <div className={`${styles.education_left_column}`}>
            <div className={`${styles.education_cal}`}></div>
            <div className={`${styles.education_details_container}`}>
              {education?.map((item) => (
                <div className={`${styles.education_details}`} key={item.id}>
                  <h3 className={`${styles.education_title}`}>
                    {item.academy}
                  </h3>
                  <p className={`${styles.education_content}`}>{item.degree}</p>
                  <h6 style={{ color: "var(--text-primary)" }}>
                    {item.duration}
                  </h6>
                </div>
              ))}
            </div>
          </div>
          <div className={`${styles.education_right_column}`}>
            <p>
              For {new Date().getFullYear() - new Date("2017").getFullYear()}+
              years, I have been continuously learning in the field of front-end
              and experimenting with new technologies and frameworks, and here
              you can see a summary of my skills.
            </p>
            <div className={`${styles.educarion_clip_container}`}>
              {skills?.map((item) => (
                <Clip value={item.title} key={item.id} skill={item.level} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
