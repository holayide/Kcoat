import { useState } from "react";
import style from "../pages/Help.module.css";

export function QuestionCards({
  qImg,
  title,
  para,
  question1,
  answer1,
  question2,
  answer2,
  question3,
  answer3,
}) {
  return (
    <div className={style.inquires}>
      <div className={style.qHeading}>
        <img src={qImg} alt={title} />
        <h2>{title}</h2>
        <p>{para}</p>
      </div>
      {/* QA cards */}
      <div className={style.qCards}>
        <Questions question={question1} answer={answer1} index={1} />
        <Questions question={question2} answer={answer2} index={2} />
        <Questions question={question3} answer={answer3} index={3} />
      </div>
    </div>
  );
}

export function Questions({ question, answer }) {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(() => !toggle);
  };

  return (
    <div className={style.cardsqtn}>
      <div className={style.cardHead} onClick={handleToggle}>
        <div className={style.leftCardHead}>
          <div className={style.layer}>
            <img src="../../assets/icons/layer.svg" alt="layer" />
          </div>

          <h5>{question}</h5>
        </div>
        {toggle ? (
          <img src="../../assets/icons/drop-up.svg" alt="drop up" />
        ) : (
          <img src="../../assets/icons/drop-down.svg" alt="drop down" />
        )}
      </div>
      <p>{toggle && answer}</p>
    </div>
  );
}
