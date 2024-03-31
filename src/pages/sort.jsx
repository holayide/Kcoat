import React from "react";
import styles from "./SortBy.module.css";

const SortBy = ({ onSortChange }) => {
  return (
    <div className={styles.sortBy}>
      <label className={styles.sortByLabel}>
        Sort by:
        <select
          onChange={(e) => onSortChange(e.target.value)}
          className={styles.sortBySelect}
        >
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </label>
    </div>
  );
};

export default SortBy;
