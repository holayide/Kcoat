import style from "./CustomersReview.module.css";

export default function CustomersReview() {
  return (
    <div className={style.container}>
      <h3>What Our Customers Say about us</h3>
      <p>
        our customer rave about their experience shopping at our online fashion
        store
      </p>
      <div className={style.slider}>
        <div className={style.review}>
          <div className={style.laura}>
            <Customer profileImg="../../assets/laura.svg" name="Laura">
              I got exactly what i ordered for, top quality at that. Thank you
              for the fast response and prompt delivery.
            </Customer>
          </div>
          <div className={style.adebayo} name="Adebayo">
            <Customer profileImg="../../assets/adebayo.svg" name="adebayo">
              Great customer service, i love my order. Definitely going to refer
              and come back for more.
            </Customer>
          </div>
        </div>
        <div className={style.nextGroup}>
          <Next />
          <Next />
        </div>
      </div>
    </div>
  );
}

function Customer({ profileImg, name, children }) {
  return (
    <div className={style.Customer}>
      {Array.from({ length: 5 }, (_, index) => (
        <img
          key={index}
          src="../../assets/icons/yellow-star.svg"
          alt="full star"
          loading="lazy"
        />
      ))}
      <p>{children}</p>
      <div className={style.profile}>
        <div>
          <img src={profileImg} alt="Profile" />
        </div>
        <p>{name}</p>
      </div>
    </div>
  );
}

function Next() {
  return (
    <div className={style.next}>
      <img src="../../assets/Arrows.svg" alt="Next" loading="lazy" />
    </div>
  );
}
