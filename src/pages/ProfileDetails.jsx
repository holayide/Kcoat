import React from "react";
import styles from "./ProfileDetails.module.css";
import Sidebar from "../components/ProfileRequirement/SideBar";
import UserProfile from "../components/ProfileRequirement/UserProfile";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
export default function ProfileDetails() {
  return (
    <div>
      <div className={styles.container}>
        <Sidebar />
        <UserProfile />
      </div>
      <div className={styles.footer}>
        <NewsLetter />
        <Footer />
      </div>
    </div>
  );
}
