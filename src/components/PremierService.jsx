import style from "./Hero.module.css";

const services = [
  {
    id: 1,
    img: "../../assets/icons/high-quality.svg",
    title: "High Quality",
    detail: "crafted from top materials",
  },
  {
    id: 2,
    img: "../../assets/icons/worldwide.svg",
    title: "Worldwide Shipping",
    detail: "Easy doorstep delivery",
  },
  {
    id: 3,
    img: "../../assets/icons/online-support.svg",
    title: "Easy online Support",
    detail: "Dedicated support",
  },
];

export default function PremierService() {
  return (
    <>
      <Services />
    </>
  );
}

function Services() {
  return (
    <div className={style.services}>
      {services &&
        services.map((service) => (
          <Quality
            image={service.img}
            title={service.title}
            detail={service.detail}
            key={service.id}
          />
        ))}
    </div>
  );
}

function Quality({ image, title, detail }) {
  return (
    <div className={style.quality}>
      <div>
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div>
        <h4>{title}</h4>
        <p>{detail}</p>
      </div>
    </div>
  );
}
