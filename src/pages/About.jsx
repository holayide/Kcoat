import Header from "../components/Header";
import style from "./About.module.css";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";
import PremierServices from "../components/PremierService";
import loginImg from "../../src/components/ShopAssets/login_img.jpg";
import CustomersReview from "../components/CustomersReview";

export default function About() {
  return (
    <div className={style.aboutPage}>
      <Header />
      {/* hero */}
      <div className={style.HeroAbout}>
        <div className={style.heroImg}>
          <img src="../../assets/about-us.png" alt="about-us" loading="lazy" />
        </div>
      </div>
      <div>
        <PremierServices />
      </div>

      <div className={style.section}>
        <h3 className={style.aboutTitle}>
          We’re here to <br />
          <span>guarantee you quality shopping experience</span>
        </h3>
        <hr />

        <div className={style.mission}>
          <h2>Our Mission</h2>
          <p>
            Our mission is to empower conscious consumers by offering a curated
            selection of sustainable and ethically made products, and
            revolutionize the e-commerce experience by prioritizing
            environmental responsibility and fair trade practices
          </p>
          <div className={style.missionimg}>
            <img src={loginImg} alt="Mission" />
          </div>
        </div>

        <div className={style.Vision}>
          <h2>Our Vision</h2>
          <p>
            We envision a world where everyone has access to high-quality,
            ethically sourced products, or sustainable practices become the norm
            in e-commerce
          </p>
        </div>
      </div>
      <div className={style.aboutTestimonies}>
        <CustomersReview />
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}
