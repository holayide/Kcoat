import Header from "../components/Header";
import style from "./About.module.css";

export default function About() {
  return (
    <div>
      <Header />
      <div className={style.HeroAbout}>
        <div className={style.heroImg}>
          <img src="../../assets/about-us.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
