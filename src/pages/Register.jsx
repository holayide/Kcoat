import { Link } from "react-router-dom";
import Header from "../components/Header";
import style from "./Account.module.css";
import { useState } from "react";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import registerImg from "../../src/components/ShopAssets/register_img.jpg";

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
        <div className={style.forms}>
          {/* form2 */}
          <form action="/#">
            <h2>Register</h2>
            <p>Enter your details to create an account</p>
            <div className={style.input}>
              <label htmlFor="registerUser">Name</label>
              <input
                type="text"
                id="registerUser"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className={style.input}>
              <label htmlFor="registerEmail">Email address</label>
              <input
                type="email"
                id="registerEmail"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className={style.input}>
              <label htmlFor="registerPword">Password</label>
              <input
                type={viewReg ? "text" : "password"}
                id="registerPword"
                placeholder="Name"
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

            <Link to="#/" className={style.tertiaryBtn}>
              <input type="submit" value="Sign up" />
            </Link>

            <div className={style.divider}>
              <span>Or</span>
            </div>

            <div className={style.toSignup}>
              Already Have an account? <Link to="/account">Sign In</Link>
            </div>
          </form>

          <div className={style.accountImg}>
            <img src={registerImg} alt="Account" />
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}
