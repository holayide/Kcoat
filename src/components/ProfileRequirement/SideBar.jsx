import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaUser,
  FaShoppingBag,
  FaAddressBook,
  FaStar,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import styles from "./Sidebar.module.css";
import { logout } from "../../utilities/user";
import { useState } from "react";

const Sidebar = () => {
  const [activeUserMenu, setActiveUserMenu] = useState("");
  const location = useLocation();

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={styles.sidebar}>
      <div className={styles.innersidebar}>
        <div className={styles.userinfo}>
          <img src="../../assets/Tolani.svg" alt="User" />
          <h2>Hello Tolani!</h2>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <Link
                to="/profile"
                onClick={() => {
                  setActiveUserMenu("profile");
                }}
                className={`${styles.navItem} ${
                  activeUserMenu === "profile" ||
                  location.pathname === "/profile"
                    ? styles.clickedUserMenu
                    : ""
                } `}
              >
                <FaUser className={styles.icon} />
                <p>Profile Details</p>
              </Link>

              {/* 2 */}
              <Link
                to="/Order"
                onClick={() => {
                  setActiveUserMenu("Order");
                }}
                className={`${styles.navItem} ${
                  activeUserMenu === "Order" || location.pathname === "/Order"
                    ? styles.clickedUserMenu
                    : ""
                } `}
              >
                <FaShoppingBag className={styles.icon} />
                <p>Orders</p>
              </Link>

              {/* 3 */}
              <Link
                to="/Address"
                onClick={() => {
                  setActiveUserMenu("Address");
                }}
                className={`${styles.navItem} ${
                  activeUserMenu === "Address" ||
                  location.pathname === "/Address"
                    ? styles.clickedUserMenu
                    : ""
                } `}
              >
                <FaAddressBook className={styles.icon} />
                <p>Address Book</p>
              </Link>

              {/* 4 */}
              <a
                href="#/"
                onClick={() => {
                  setActiveUserMenu("rating");
                }}
                className={`${styles.navItem} ${
                  activeUserMenu === "rating" || location.pathname === "/rating"
                    ? styles.clickedUserMenu
                    : ""
                } `}
              >
                <FaStar className={styles.icon} />
                <p>Reviews & Ratings</p>
              </a>

              {/* 5 */}
              <Link
                to="/General"
                onClick={() => {
                  setActiveUserMenu("General");
                }}
                className={`${styles.navItem} ${
                  activeUserMenu === "General" ||
                  location.pathname === "/General"
                    ? styles.clickedUserMenu
                    : ""
                } `}
              >
                <FaCog className={styles.icon} />
                <p>Account Settings</p>
              </Link>

              {/* no file attached */}
              <Link
                to="/account"
                onClick={handleLogout}
                className={styles.navItem}
              >
                <FaSignOutAlt className={styles.icon} />
                <p> Sign out</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
