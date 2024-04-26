import React from "react";
import Styles from "./Address.module.css";
import NewsLetter from "../../components/NewsLetter";
import Header from "../Header";
import Footer from "../Footer";
import Sidebar from "./SideBar";

const AddAddress = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.addressheader}>
        <Header />
      </div>
      <div className={Styles.adressMainWrapper}>
        <div className={Styles.adressSidwBar}>
          <Sidebar />
        </div>
        <div className={Styles.adressMain}>
          <form>
            <div className={Styles.newadress}>
              <div className={Styles.header}>
                <span className={Styles.backArrow}>←</span>
                <h1 className={Styles.title}>Add a New Address</h1>
              </div>
              <div className={Styles.form}>
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

                  <select name="cities" className={Styles.selectHalf}>
                    <option value="">City</option>
                    <option value="Abia">Abia</option>
                    <option value="Ibadan">Ibadan</option>
                    <option value="Lagos">Lagos</option>
                    <option value="Ogun">Ogun</option>
                  </select>
                </div>
              </div>
            </div>
            <button className={Styles.saveButton} type="submit">
              Save
            </button>
          </form>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default AddAddress;
