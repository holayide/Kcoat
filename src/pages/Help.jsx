import Header from "../components/Header";
import style from "./Help.module.css";
import PremierService from "../components/PremierService";
import { Qcards } from "../utilities/helpSession";
import { QuestionCards } from "../components/Questions";
import Footer from "../components/Footer";
import NewsLetter from "../components/NewsLetter";
import whatsappLogo from "../components/ShopAssets/whatsApp.svg";
import { Link } from "react-router-dom";

export default function Help() {
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
      {/* working */}
      <div className={style.whatsappLogo}>
        <Link to="https:wa.me/2348105020473">
          <img src={whatsappLogo} alt="WhatsappLogo" />
        </Link>
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
