import { Link } from "react-router-dom";
import Header from "../components/Header";
import style from "./Account.module.css";
import { useState } from "react";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import loginImg from "../../src/components/ShopAssets/login_img.jpg";

export default function Account() {
  const [view, setView] = useState(false);

  function handleClick() {
    setView(() => !view);
  }

  return (
    <div>
      <div className={style.headWrapper}>
        <Header />
      </div>
      <div className={style.container}>
        <div className={style.forms}>
          {/* form */}
          <form action="/#">
            <h2>Welcome back!</h2>
            <p>Enter your details to access your account</p>
            <div className={style.input}>
              <label htmlFor="loginEmail">Email address</label>
              <input
                type="email"
                id="loginEmail"
                placeholder="abc123@gmail.com"
                required
              />
            </div>
            <div className={style.input}>
              <label htmlFor="loginPword">Password</label>
              <input
                type={view ? "text" : "password"}
                id="loginPword"
                placeholder="Name"
                required
              />
              <img
                onClick={handleClick}
                src={
                  view ? "../../assets/eye.svg " : "../../assets/eye-slash.svg"
                }
                alt="Eye"
              />
            </div>

            <div className={style.checkforget}>
              <div className={style.checkbox}>
                <input type="checkbox" name="check" id="check" />
                <label htmlFor="check">Remember me</label>
              </div>

              <div className={style.forget}>
                <a href="#/">Forget password ?</a>
              </div>
            </div>

            <Link to="/Profile" className={style.tertiaryBtn}>
              <input type="submit" value="Login" />
            </Link>

            <div className={style.divider}>
              <span>Or</span>
            </div>

            <div className={style.toSignup}>
              Don’t have an account? <Link to="/register">Register</Link>
            </div>
          </form>

          {/* img */}
          <div className={style.accountImg}>
            <img src={loginImg} alt="Account" />
          </div>
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}
