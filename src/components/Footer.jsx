import { Logo } from "./Header";
import style from "./Footer.module.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className={style.container}>
      <div className={style.wrapper}>
        <Connect />

        {/* contact */}
        <div className={style.box}>
          <ul>
            <li className={style.listHead}>Contact us</li>
            <li>
              <Link>08105020473</Link>
            </li>
            <li>
              <Link>christianabennet@gmail.com</Link>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div className={style.box}>
          <ul>
            <li className={style.listHead}>Explore</li>
            <li>
              <Link to="/women">Product</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
            <li>
              <Link to="#/">Reviews</Link>
            </li>
          </ul>
        </div>

        {/* Get Help  */}
        <div className={style.box}>
          <ul className={style.listHead}>
            <li>Get Help</li>
            <li>
              <Link to="/help">FAQ</Link>
            </li>
            <li>
              <Link to="#/">Shipping</Link>
            </li>
            <li>
              <Link to="/payment">Payment </Link>
            </li>
            <li>
              <Link to="#/">Returns</Link>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div className={style.copyright}>
        <img
          src="../../assets/icons/copyright.svg"
          alt="Copy right"
          loading="lazy"
        />
        <p>2024 KCOAT. All Rights Reserved</p>
      </div>
    </div>
  );
}

function Connect() {
  return (
    <div className={style.connect}>
      <div className={style.footLogo}>
        <Logo />
      </div>
      <p>connect with us on social media</p>
      <div className={style.socials}>
        <Socials socialImg="../../assets/icons/facebook.svg" name="facebook" />
        <Socials
          socialImg="../../assets/icons/instagram.svg"
          name="instagram"
        />
        <Socials socialImg="../../assets/icons/x.svg" name="twitter" />
      </div>
    </div>
  );
}

function Socials({ socialImg, name }) {
  return (
    <div className={style.social}>
      <img src={socialImg} alt={name} />
    </div>
  );
}
