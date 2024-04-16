import { Link } from "react-router-dom";
import Header from "../components/Header";
import style from "./Account.module.css";
import { useState } from "react";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

export default function Register() {
  const [viewReg, setViewReg] = useState(false);

  function handleClickReg() {
    setViewReg(() => !viewReg);
  }

  return (
    <div>
      <div className={style.headWrapper}>
        <Header />
      </div>

      <div className={style.container}>
        <h2 className={style.heroHead}>My account</h2>
        <div className={style.forms}>
          {/* form2 */}
          <form action="/#">
            <h2 className={style.heroHead}>REGISTER</h2>
            <div className={style.input}>
              <label htmlFor="registerUser"> Username</label>
              <input
                type="text"
                id="registerUser"
                placeholder="abc123"
                required
              />
            </div>

            <div className={style.input}>
              <label htmlFor="registerEmail">Email</label>
              <input
                type="email"
                id="registerEmail"
                placeholder="abc123@gmail.com"
                required
              />
            </div>

            <div className={style.input}>
              <label htmlFor="registerPword">Password</label>
              <input
                type={viewReg ? "text" : "password"}
                id="registerPword"
                placeholder="......."
                required
              />
              <img
                onClick={handleClickReg}
                src={
                  viewReg
                    ? "../../assets/eye.svg "
                    : "../../assets/eye-slash.svg"
                }
                alt="Eye"
              />
            </div>
            <div classname={style.acctBtn}>
              <Link to="/#" className={style.tertiaryBtn}>
                Sign up
              </Link>
            </div>
          </form>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}
