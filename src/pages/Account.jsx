import { Link } from "react-router-dom";
import Header from "../components/Header";
import style from "./Account.module.css";
import Button from "../components/Button";
import { useState } from "react";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";

export default function Account() {
  const [view, setView] = useState(false);
  const [viewReg, setViewReg] = useState(false);

  function handleClick() {
    setView(() => !view);
  }

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
          {/* form1 */}
          <form action="#/">
            <h2 className={style.heroHead}>LOGIN</h2>
            <div className={style.input}>
              <label htmlFor="loginEmail">Email or username</label>
              <input
                type="text"
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
                placeholder="......."
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
            <div className={style.checkbox}>
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="check">Remember me</label>
            </div>

            <div classname={style.acctBtn}>
              <Button classname={style.tertiaryBtn}>
                <Link to="/Profile">Login</Link>
              </Button>
            </div>

            <div className={style.forget}>
              <a href="#/">Forget password ?</a>
            </div>
          </form>

          {/* form2 */}
          <form action="#/">
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
              <Button classname={style.tertiaryBtn}>Sign up</Button>
            </div>
          </form>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
}
