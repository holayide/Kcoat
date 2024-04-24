import React from "react";
import styles from "./SortBy.module.css";

const SortBy = ({ onSortChange }) => {
  return (
    <div className={styles.sortBy}>
      <h3>PRODUCT</h3>
      <div className={styles.sortByViews}>
        <div className={styles.sortByLabel}>
          <label htmlFor="sort">Sort by:</label>
          <select
            onChange={(e) => onSortChange(e.target.value)}
            className={styles.sortBySelect}
            id="sort"
          >
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>
        </div>
        <p>View</p>
        <img src="../../assets/Menu.svg" alt="menu" loading="lazy" />
      </div>
    </div>
  );
};

export default SortBy;
