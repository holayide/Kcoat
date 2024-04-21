import React from "react";
import Styles from "./Address.module.css";
import NewsLetter from "../../components/NewsLetter";
const AddAddress = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.header}>
        <span className={Styles.backArrow}>←</span>
        <h1 className={Styles.title}>Add a New Address</h1>
      </div>
      <form className={Styles.form}>
        <div className={Styles.inputRow}>
          <input
            className={Styles.inputHalf}
            type="text"
            placeholder="First Name"
          />
          <input
            className={Styles.inputHalf}
            type="text"
            placeholder="Last Name"
          />
        </div>
        <div className={Styles.inputRow}>
          <input
            className={Styles.inputHalf}
            type="tel"
            placeholder="+234 Phone Number"
          />
          <input
            className={Styles.inputHalf}
            type="tel"
            placeholder="+234 Additional Phone Number"
          />
        </div>
        <input
          className={Styles.inputFull}
          type="text"
          placeholder="Delivery Address"
        />
        <input
          className={Styles.inputFull}
          type="text"
          placeholder="Email Address"
        />
        <textarea
          className={Styles.textarea}
          placeholder="Additional Information"
        />
        <div className={Styles.selectRow}>
          <select className={Styles.selectHalf}>
            <option value="">Region</option>
          </select>
          <select className={Styles.selectHalf}>
            <option value="">City</option>
            <option>Abia</option>
            <option>Ibadan</option>
            <option>Lagos</option>
            <option>Ogun</option>
          </select>
        </div>
        <button className={Styles.saveButton} type="submit">
          Save
        </button>
      </form>
      <NewsLetter />
    </div>
  );
};

export default AddAddress;
