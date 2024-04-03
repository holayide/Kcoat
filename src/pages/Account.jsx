import Header from "../components/Header";
import style from "./Account.module.css";
import Button from "../components/Button";

export default function Account() {
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
            <div className={style.login}>
              <label htmlFor="loginEmail">Email or username</label>
              <input
                type="text"
                id="loginEmail"
                placeholder="abc123@gmail.com"
                required
              />
            </div>
            <div className={style.login}>
              <label htmlFor="loginPword">Password</label>
              <input
                type="password"
                id="loginPword"
                placeholder="abc123@gmail.com"
                required
              />
            </div>
            <div className={style.checkbox}>
              <input type="checkbox" name="check" id="check" />
              <label htmlFor="check">check</label>
            </div>

            <Button classname={style.primaryBtn}>Login</Button>
            <div className="forget">
              <a href="#/">Forget password ?</a>
            </div>
          </form>

          {/* form2 */}
          <form action="#/">
            <h2 className={style.heroHead}>REGISTER</h2>
            <div className="registerUser">
              <label htmlFor="registerUser"> Username</label>
              <input
                type="text"
                id="registerUser"
                placeholder="abc123"
                required
              />
            </div>

            <div className="registerEmail">
              <label htmlFor="registerEmail">Email or username</label>
              <input
                type="email"
                id="loginEmail"
                placeholder="abc123@gmail.com"
                required
              />
            </div>

            <div className="registerPword">
              <label htmlFor="registerPword">Password</label>
              <input type="password" id="registerPword" required />
            </div>
            <div>
              <Button classname={style.tertiaryBtn}>Login</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
