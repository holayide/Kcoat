import React from "react";
// import Sidebar from "../ProfileRequirement/SideBar";
import styles from "./User.module.css";
const UserProfile = () => {
  return (
    <div className={styles.MainContent}>
      {/* <Sidebar /> */}
      <h1>My Details</h1>
      <h3>Personal information</h3>
      <div className={styles.PersonalInfo}>
        <div className={styles.detail}>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
          First Name
          <br />
          <span>Tolani</span>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
        </div>
        <div className={styles.detail}>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
          Last Name
          <span>Oyebanji</span>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
        </div>
        <div className={styles.detail}>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
          Email
          <span>Tolani123@gmail.com</span>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
        </div>
        <div className={styles.detail}>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
          Gender
          <span>F</span>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
        </div>
        <div className={styles.detail}>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
          Birth Date
          <span>02-11-1992</span>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
        </div>
        <div className={styles.detail}>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
          Phone Number
          <span>+234 ********</span>
          <img src="../../assets/icons/line.svg" alt="line" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
