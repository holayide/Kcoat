import React from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaShoppingBag,
  FaAddressBook,
  FaStar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.userinfo}>
        <img src="../../assets/Tolani.svg" alt="User" />
        <h2>Hello Tolani!</h2>
      </div>
      <nav className={styles.navigation}>
        <ul>
          <li>
            <Link to="/UserProfile" className={styles.navItem}>
              <FaUser className={styles.icon} /> Profile Details
            </Link>

            <Link to="/Order" className={styles.navItem}>
              <FaShoppingBag className={styles.icon} />
              Orders
            </Link>
            <Link to="/Address" className={styles.navItem}>
              <FaAddressBook className={styles.icon} />
              Address Book
            </Link>
            <a href="./" className={styles.navItem}>
              <FaStar className={styles.icon} />
              Reviews & Ratings
            </a>
            <Link to="/General" className={styles.navItem}>
              <FaCog className={styles.icon} />
              Account Settings
            </Link>
            <a href="./" className={styles.navItem}>
              <FaSignOutAlt className={styles.icon} />
              Sign out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
