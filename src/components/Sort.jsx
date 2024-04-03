import React from "react";
import styles from "./SortBy.module.css";

const SortBy = ({ onSortChange }) => {
  return (
    <div className={styles.sortBy}>
      <h2>PRODUCT</h2>
      <label className={styles.sortByLabel}>Sort by:</label>
      <select
        onChange={(e) => onSortChange(e.target.value)}
        className={styles.sortBySelect}
      >
        <option value="newest">Newest</option>
        <option value="oldest">Oldest</option>
      </select>

      <h3>View</h3>
      <img src="../../assets/Menu.svg" alt="menu" />
    </div>
  );
};

export default SortBy;
