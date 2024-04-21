import { Link } from "react-router-dom";
import Header from "../components/Header";
import style from "./Account.module.css";
import { useState } from "react";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import loginImg from "../../src/components/ShopAssets/login_img.jpg";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

export default function Account() {
  const [view, setView] = useState(false);
  // form
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);

  // eye
  function handleClick() {
    setView(() => !view);
  }

  const navigate = useNavigate();

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  // handleLogin
  function handleLogin(e) {
    e.preventDefault();
    // checking if the input field is not empty
    if (!email) {
      return toast("Enter Email ", {
        theme: "light",
      });
    } else if (!password) {
      return toast("Enter Password", {
        theme: "light",
      });
    }

    setIsSubmit(true);

    // username: email
    const payload = { email, password };

    fetch("https://kcoat-1-c4lk.onrender.com/UserLogin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(async (response) => {
        if (response.status !== 200) {
          const data = await response.json();
          throw data;
        }
        return response.json();
      })
      .then((response) => {
        // clear input{not working}
        setEmail("");
        setPassword("");

        response && navigate("/cart");
        toast.success("Login successful!");
      })

      .catch((error) => {
        // clear input{not working}
        setEmail("");
        setPassword("");

        toast.error(error.message || "Wrong Email / Password");
      })
      .finally(() => {
        setIsSubmit(false);
      });
  }
  // end

  return (
    <div>
      <div className={style.headWrapper}>
        <Header />
      </div>
      <div className={style.container}>
        <div className={style.forms}>
          {/* form */}
          <form onSubmit={handleLogin} disabled={isSubmit}>
            <h2>Welcome back!</h2>
            <p>Enter your details to access your account</p>

            {/* email */}
            <div className={style.input}>
              <label htmlFor="loginEmail">Email address</label>
              <input
                type="email"
                id="loginEmail"
                placeholder="abc123@gmail.com"
                onChange={handleEmail}
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
                onChange={handlePassword}
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
            {/* to="/Profile" link*/}
            <button className={style.tertiaryBtn}>
              Login
              {/* <input type="submit" value="" /> */}
            </button>

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
