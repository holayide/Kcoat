import style from "./AdminLogin.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function AdminLogin() {
  const [view, setView] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eye
  function handleClick() {
    setView(() => !view);
  }

  function handleAdminLogin(e) {
    e.preventDefault();
  }

  return (
    <div>
      <div className={style.container}>
        <div className={style.forms}>
          {/* form */}
          <form onSubmit={handleAdminLogin}>
            <h2>Welcome Admin!</h2>
            <p>Enter your details to access your account</p>

            {/* email */}
            <div className={style.input}>
              <label htmlFor="loginEmail">Email address</label>
              <input
                type="email"
                id="loginEmail"
                placeholder="abc123@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* password */}
            <div className={style.input}>
              <label htmlFor="loginPword">Password</label>
              <input
                type={view ? "text" : "password"}
                id="loginPword"
                placeholder="Name"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

            <Link to="/dashboard">
              <button className={style.tertiaryBtn}> Login </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

// /dashboard
