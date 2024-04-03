import Header from "../components/Header";
import style from "./About.module.css";
import NewsLetter from "../components/NewsLetter";
import Footer from "../components/Footer";

export default function About() {
  return (
    <div>
      <Header />
      <div className={style.HeroAbout}>
        <div className={style.heroImg}>
          <img src="../../assets/about-us.svg" alt="" />
        </div>
      </div>
      <div className={style.section}>
        {/* vision */}

        <div className={style.vision}>
          <h3>Our Vision</h3>
          <p>
            We envision a world where everyone has access to high-quality,
            ethically sourced products, or sustainable practices become the norm
            in e-commerce
          </p>
        </div>

        <div className={style.visionImg}>
          <img src="../../assets/vision.svg" alt="vision" />
        </div>

        {/* mission */}

        <div className={style.missionImg}>
          <img src="../../assets/mission.svg" alt="vision" />
        </div>

        <div className={style.mission}>
          <div className={style.innerMission}>
            <h3>Our Mission</h3>
            <p>
              Our mission is to empower conscious consumers by offering a
              curated selection of sustainable and ethically made products, or
              revolutionize the e-commerce experience by prioritizing
              environmental responsibility and fair trade practices
            </p>
          </div>
        </div>

        {/* Approach */}
        <div className={style.approach}>
          <h3>Our Approach</h3>
          <p>
            Beyond the Sale: We believe in the power of positive change. That's
            why a portion of every sale goes towards supporting environmental
            initiatives and we partner with ethical producers who reinvest in
            their communities.) Join Us on the Journey: By shopping with us,
            you're not just making a purchase, you're making a statement.
            Together, we can create a more conscious and sustainable future for
            all.
          </p>
        </div>

        <div className={style.approachImg}>
          <img src="../../assets/vision.svg" alt="vision" />
        </div>
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}
