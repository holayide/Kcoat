import style from "./Preorder.module.css";
import { popularProducts } from "../utilities/Products";
import Button from "./Button";
import Stars from "./Star";
import { useState } from "react";

export default function PopularProducts() {
  return (
    <div className={style.wrapper}>
      <h3 className={style.orderDetails}>Our most popular product</h3>
      <p>Discover our most popular product, loved by customers worldwide.</p>
      <MostPopularProducts />
    </div>
  );
}

function MostPopularProducts() {
  return (
    <div className={style.productCards}>
      {popularProducts &&
        popularProducts.map((product) => (
          <MostPopularProduct
            key={product.id}
            image={product.productImage}
            title={product.productTitle}
            arrivalAmt={product.productAmt}
          />
        ))}
    </div>
  );
}

function MostPopularProduct({ image, title, arrivalAmt }) {
  const [rating, setRating] = useState(0);

  function handleRating(rating) {
    setRating(rating);
  }

  return (
    <div className={style.productCard}>
      <div className={style.productcontainer}>
        <div className={style.productImage}>
          <img src={image} alt={title} />
        </div>
      </div>

      <div className={style.productTexts}>
        <div className={style.productTitles}>
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

        <div className={style.productSection}>
          <p className={style.arrivalAmount}>
            ₦ <span>{arrivalAmt}</span>
          </p>
          {/* btnCart */}
          <div className={style.popularBtn}>
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
    </div>
  );
}
