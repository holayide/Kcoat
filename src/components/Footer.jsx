import { Logo } from "./Header";
import style from "./Footer.module.css";

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
              <a href="#/">+23480******</a>
            </li>
            <li>
              <a href="#/">Email: support@email.com</a>
            </li>
          </ul>
        </div>

        {/* Explore */}
        <div className={style.box}>
          <ul>
            <li className={style.listHead}>Explore</li>
            <li>
              <a href="#/">Product</a>
            </li>
            <li>
              <a href="#/">About</a>
            </li>
            <li>
              <a href="#/">Account</a>
            </li>
            <li>
              <a href="#/">Reviews</a>
            </li>
          </ul>
        </div>

        {/* Get Help  */}
        <div className={style.box}>
          <ul className={style.listHead}>
            <li>Get Help</li>
            <li>
              <a href="#/">FAQ</a>
            </li>
            <li>
              <a href="#/">Shipping</a>
            </li>
            <li>
              <a href="#/">Payment </a>
            </li>
            <li>
              <a href="#/">Returns</a>
            </li>
          </ul>
        </div>
      </div>
      <hr />

      <div className={style.copyright}>
        <img src="../../assets/icons/copyright.svg" alt="Copy right" />
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
