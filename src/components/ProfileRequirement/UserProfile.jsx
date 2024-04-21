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
          <img src="../../assets/icons/line.svg" alt="line" />
          First Name
          <br />
          <span>Tolani</span>
          <img src="../../assets/icons/line.svg" alt="line" />
        </div>
        <div className={styles.detail}>
          <img src="../../assets/icons/line.svg" alt="line" />
          Last Name
          <span>Oyebanji</span>
          <img src="../../assets/icons/line.svg" alt="line" />
        </div>
        <div className={styles.detail}>
          <img src="../../assets/icons/line.svg" alt="line" />
          Email
          <span>Tolani123@gmail.com</span>
          <img src="../../assets/icons/line.svg" alt="line" />
        </div>
        <div className={styles.detail}>
          <img src="../../assets/icons/line.svg" alt="line" />
          Gender
          <span>F</span>
          <img src="../../assets/icons/line.svg" alt="line" />
        </div>
        <div className={styles.detail}>
          <img src="../../assets/icons/line.svg" alt="line" />
          Birth Date
          <span>02-11-1992</span>
          <img src="../../assets/icons/line.svg" alt="line" />
        </div>
        <div className={styles.detail}>
          <img src="../../assets/icons/line.svg" alt="line" />
          Phone Number
          <span>+234 ********</span>
          <img src="../../assets/icons/line.svg" alt="line" />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
