import React from "react";
import styles from "./User.module.css";
import { Link } from "react-router-dom";

const UserProfile = () => {
  return (
    <div className={styles.MainContent}>
      {/* <Sidebar /> */}
      <h1>My Details</h1>
      <h4>Personal information</h4>
      <div className={styles.PersonalInfo}>
        <div className={styles.detail}>
          <p>First Name</p>
          <p>Tolani</p>
        </div>

        <div className={styles.detail}>
          <p>Last Name</p>
          <p>Oyebanji</p>
        </div>

        <div className={styles.detail}>
          <p>Email</p>
          <p>Tolani123@gmail.com</p>
        </div>

        <div className={styles.detail}>
          <p>Gender</p>
          <p>F</p>
        </div>

        <div className={styles.detail}>
          <p>Phone Number</p>
          <p>+234 ********</p>
        </div>

        <div className={styles.detailProfitLink}>
          <Link>Edit profile</Link>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
