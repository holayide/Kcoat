import Header from "../components/Header";
import style from "./Help.module.css";
import PremierService from "../components/PremierService";
import { Qcards } from "../utilities/helpSession";
import { QuestionCards } from "../components/Questions";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import whatsappLogo from "../components/ShopAssets/whatsApp.svg";
import sms from "../components/ShopAssets/sms.svg";
import tiktok from "../components/ShopAssets/tiktok.svg";
import insta from "../components/ShopAssets/insta.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Help() {
  const [showSocial, setShowSocial] = useState(false);

  return (
    <div className={style.helpContainer}>
      <Header />
      <div className={style.helpHero}>
        <div className={style.innerHelpHero}>
          <h2>24/7 CUSTOMER SERVICE</h2>
          <p>We are always available to provide you with assistance</p>
        </div>
      </div>
      <div className={style.borderLine}>
        <PremierService />
      </div>

      {/*not  working */}

      <div
        className={style.socialLogo}
        onClick={() => setShowSocial(!showSocial)}
      >
        {/* <Link  */}
        {showSocial ? (
          <img
            src="../../assets/icons/cancel_menu.svg"
            alt="cancel"
            loading="lazy"
          />
        ) : (
          <img src={sms} alt="smsLogo" loading="lazy" />
        )}

        {/* href="https://Instagram.com/golden" */}

        <div className={showSocial ? style.smallimages : style.disappearimg}>
          <a href="https:wa.me/2348105020473" target="blank">
            <img src={whatsappLogo} alt="whatsappLogo" />
          </a>
          <a href="https://Instagram.com/golden" target="blank">
            <img src={insta} alt="insta" loading="lazy" />
          </a>
          <Link>
            <img src={tiktok} alt="tiktok" loading="lazy" />
          </Link>
        </div>
      </div>

      {/* stop */}

      <div className={style.QAsession}>
        {Qcards.map((qcard) => {
          return (
            <QuestionCards
              key={qcard.id}
              qImg={qcard.qImg}
              title={qcard.title}
              para={qcard.para}
              question1={qcard.question1}
              answer1={qcard.answer1}
              question2={qcard.question2}
              answer2={qcard.answer2}
              question3={qcard.question3}
              answer3={qcard.answer3}
            />
          );
        })}
      </div>

      <NewsLetter />
      <Footer />
    </div>
  );
}
