import Button from "./Button";
import style from "./Hero.module.css";

export default function HeroPage() {
  return (
    <div className={style.main}>
      <HeroText />
      <HeroImages />
    </div>
  );
}

function HeroText() {
  return (
    <div className={style.heroText}>
      <div className={style.leftText}>
        <h1>Explore a world of style and comfort</h1>
        <p>
          Explore our latest fashion trends for men and women online- we have
          everything you need to elevate your style, from classic attire to
          glamorous ensembles.
        </p>
        <Button goto="./shop">Shop Now</Button>
      </div>
    </div>
  );
}

function HeroImages() {
  return (
    <div className={style.rightImg}>
      <div className={style.heroImages}>
        <div className={style.blue}>
          <HeroImageShapes src="../../assets/blue-shape.svg" alt="Blue shape" />
        </div>
        <div className={style.purple} class="">
          <HeroImageShapes
            src="../../assets/purple-shape.svg"
            alt="Purple shape"
          />
        </div>
        <div className={style.lady}>
          <HeroImageShapes src="../../assets/hero-lady.svg" alt="lady" />
        </div>
      </div>
    </div>
  );
}

function HeroImageShapes({ src, alt }) {
  return <img src={src} alt={alt} />;
}
