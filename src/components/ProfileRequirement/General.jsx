import React from "react";
import Styles from "./GeneralSettings.module.css";

const GeneralSettings = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.profileColumn}>
        <div className={Styles.profileHeader}>
          <h2>General Settings</h2>
        </div>
        <div className={Styles.profileDetails}>
          <div className={Styles.profile}>
            <h3> Profile Details </h3>
            <h3>Edit Details</h3>
          </div>
          <div className={Styles.profileImageWrapper}>
            <img
              src="../../assets/Tolani.svg"
              alt="Profile"
              className={Styles.profilePic}
            />
            <button className={Styles.photoButton}>
              Upload/change profile photo
            </button>
            <button className={Styles.deleteButton}>Delete</button>
          </div>
          <div className={Styles.infoWrapper}>
            <div className={Styles.infoField}>
              <span className={Styles.infoLabel}>First Name</span>
              <span className={Styles.infoValue}>Tolani</span>
            </div>
            <div className={Styles.infoField}>
              <span className={Styles.infoLabel}>Last Name</span>
              <span className={Styles.infoValue}>Oyebanji</span>
            </div>
            <div className={Styles.infoField}>
              <span className={Styles.infoLabel}>Email</span>
              <span className={Styles.infoValue}>Tolani123@gmail.com</span>
            </div>
            <div className={Styles.infoField}>
              <span className={Styles.infoLabel}>Gender</span>
              <span className={Styles.infoValue}>F</span>
            </div>
            <div className={Styles.infoField}>
              <span className={Styles.infoLabel}>Birth Date</span>
              <span className={Styles.infoValue}>02-11-1992</span>
            </div>
            <div className={Styles.infoField}>
              <span className={Styles.infoLabel}>Phone Number</span>
              <span className={Styles.infoValue}>+234 **********</span>
            </div>
          </div>
        </div>
      </div>

      <div className={Styles.settingsColumn}>
        <div className={Styles.changePassword}>
          <h2>Change Password</h2>
          <form className={Styles.passwordForm}>
            <input
              className={Styles.input}
              type="password"
              placeholder="Current Password"
            />
            <input
              className={Styles.input}
              type="password"
              placeholder="New Password"
            />
            <input
              className={Styles.input}
              type="password"
              placeholder="Confirm Password"
            />
            <button className={Styles.saveButton}>Save</button>
          </form>
        </div>

        <div className={Styles.closeAccount}>
          <h2>Close Account</h2>
          <p>You can permanently delete or temporarily freeze your account.</p>
          <button className={Styles.freezeButton}>Freeze Account</button>
          <button className={Styles.deleteAccountButton}>Delete Account</button>
        </div>
      </div>
    </div>
  );
};

export default GeneralSettings;
