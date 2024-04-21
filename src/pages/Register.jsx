import { Link } from "react-router-dom";
import Header from "../components/Header";
import style from "./Account.module.css";
import { useState } from "react";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import registerImg from "../../src/components/ShopAssets/register_img.jpg";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function Register() {
  const [viewReg, setViewReg] = useState(false);
  // form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // eye
  function handleClickReg() {
    setViewReg(() => !viewReg);
  }

  const navigate = useNavigate();

  function handleName(e) {
    setName(e.target.value);
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  // handleRegister
  function handleRegister(e) {
    e.preventDefault();
    // checking if the input field is not empty
    if (!name) {
      return toast("Enter Your Name", {
        theme: "light",
      });
    } else if (!email) {
      return toast("Enter Email", {
        theme: "light",
      });
    } else if (!password) {
      return toast("Enter Password", {
        theme: "light",
      });
    }

    // username: email
    const payload = { username: name, email, password };

    fetch("https://kcoat-1-c4lk.onrender.com/register", {
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

        // Go back to the previous page
        response && navigate("/account");
        toast.success("Registration successful!");
      })

      .catch((error) => {
        toast.error(
          error.message || "An error occurred. Please try again later."
        );
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
          {/* form2 onSubmit={handleSubmit}*/}
          <form onSubmit={handleRegister}>
            <h2>Register</h2>
            <p>Enter your details to create an account</p>
            <div className={style.input}>
              <label htmlFor="registerUser">Name</label>
              <input
                name="name"
                type="text"
                id="registerUser"
                placeholder="Enter your name"
                onChange={handleName}
                required
              />
            </div>

            <div className={style.input}>
              <label htmlFor="registerEmail">Email address</label>
              <input
                name="email"
                type="email"
                id="registerEmail"
                placeholder="Enter your email"
                onChange={handleEmail}
                required
              />
            </div>

            <div className={style.input}>
              <label htmlFor="registerPword">Password</label>
              <input
                name="password"
                type={viewReg ? "text" : "password"}
                id="registerPword"
                placeholder="Name"
                onChange={handlePassword}
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

            <button className={style.tertiaryBtn}>Sign up</button>

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
