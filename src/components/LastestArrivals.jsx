import style from "./Preorder.module.css";
import Button from "./Button";
import Stars from "./Star";
import { useState } from "react";

const arrivals = [
  {
    id: 1,
    arrivalImage: "../../assets/mini-gown.svg",
    arrivalTitle: "MINI GOWN",
    description: "female wear",
    arrivalAmt: "22,OOO",
    designedLove: "../../assets/icons/white-love.svg",
  },
  {
    id: 2,
    arrivalImage: "../../assets/yellow-dress.svg",
    arrivalTitle: "YELLOW DRESS",
    description: "female wear",
    arrivalAmt: "28,OOO",
    designedLove: "../../assets/icons/yellow-love.svg",
  },
  {
    id: 3,
    arrivalImage: "../../assets/men-collection.svg",
    arrivalTitle: "MEN’S COLLECTION",
    description: "male wear",
    arrivalAmt: "25,000",
    designedLove: "../../assets/icons/white-love.svg",
  },
  {
    id: 4,
    arrivalImage: "../../assets/senator.svg",
    arrivalTitle: "SENATOR NATIVE",
    description: "male wear",
    arrivalAmt: "35,000",
    designedLove: "../../assets/icons/yellow-love.svg",
  },
];

export default function LastestArrival() {
  return (
    <div className={style.wrapper}>
      <h3 className={style.orderDetails}>Our latest Arrivals</h3>
      <p>Discover our fresh arrivals for both men and women clothing</p>
      <ArrivalCards />
    </div>
  );
}

function ArrivalCards() {
  return (
    <div className={style.arrivalCards}>
      {arrivals &&
        arrivals.map((arrival) => (
          <ArrivalCard
            key={arrival.id}
            image={arrival.arrivalImage}
            title={arrival.arrivalTitle}
            description={arrival.description}
            arrivalAmt={arrival.arrivalAmt}
            love={arrival.designedLove}
          />
        ))}
    </div>
  );
}

function ArrivalCard({ image, title, description, arrivalAmt, love }) {
  const [rating, setRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div className={style.arrivalCard}>
      <div className={style.imagecontainer}>
        <div className={style.arrivalImage}>
          <img src={image} alt={title} />
        </div>
        <img src={love} alt="love" className={style.loves} />
      </div>
      <div className={style.orderText}>
        <div className={style.arrivalTitles}>
          <h4 className={style.arrivalTitle}>{title}</h4>
          <div className={style.star}>
            {Array.from({ length: 5 }, (_, i) => (
              <Stars
                key={i}
                onRate={() => handleRating(i + 1)}
                full={rating >= i + 1}
              />
            ))}
          </div>
        </div>
        <p className={style.description}>{description}</p>

        <div className={style.amountSection}>
          <p className={style.arrivalAmount}>
            ₦ <span>{arrivalAmt}</span>
          </p>

          <div className={style.btnCart}>
            <div className={style.cart}>
              <img src="../../assets/icons/minicart.svg" alt="mini cart" />
            </div>
            <div>
              <Button goto="./#" classname={style.primaryBtn}>
                <span></span>
                ADD TO CART
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
