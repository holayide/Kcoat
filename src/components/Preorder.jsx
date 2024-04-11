import style from "./Preorder.module.css";
import Button from "./Button";

const preorderItems = [
  {
    id: 220,
    img: "../../assets/trouser.svg",
    title: "PALLAZO TROUSER",
    amount: "18,000",
  },
  {
    id: 221,
    img: "../../assets/ring.svg",
    title: "DIAMOND RING",
    amount: "120,000",
  },
  {
    id: 222,
    img: "../../assets/shirt.svg",
    title: "MEN’S SHIRT",
    amount: "10,000",
  },
];

export default function Preorder() {
  return (
    <div className={style.wrapper}>
      <h3>Preorder</h3>
      <p>Secure your favorite items by preordering now!</p>
      <PreorderCards />
    </div>
  );
}

function PreorderCards() {
  return (
    <div className={style.PreorderCards}>
      {preorderItems !== null &&
        preorderItems.map((item) => (
          <PreorderCard
            picture={item.img}
            title={item.title}
            amount={item.amount}
            key={item.id}
          />
        ))}
    </div>
  );
}

function PreorderCard({ picture, title, amount }) {
  return (
    <div className={style.PreorderCard}>
      <div className={style.picture}>
        <img src={picture} alt={title} />
      </div>
      <p className={style.title}>{title}</p>
      <div className={style.amount}>
        ₦ <span>{amount}</span>
      </div>
      <div className={style.orderBtn}>
        <Button goto="./#" classname={style.miniBtn}>
          ORDER
        </Button>
      </div>
    </div>
  );
}
