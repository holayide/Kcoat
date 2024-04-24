import style from "./ProductDisplay.module.css";
import { useContext } from "react";
import { ShopContext } from "../../../Context/ShopContext";

export default function ProductDisplay({ product }) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className={style.productdisplay}>
      <div className={style.productdisplayLeft}>
        <div className={style.productDisplayImgList}>
          <img src={product.image} alt="Products" loading="lazy" />
          <img src={product.image} alt="Products" loading="lazy" />
          <img src={product.image} alt="Products" loading="lazy" />
          <img src={product.image} alt="Products" loading="lazy" />
        </div>
        <div className={style.productdisplayImg}>
          <img
            onClick={window.scrollTo(0, 0)}
            className="productdisplay-main-img"
            src={product.image}
            alt="Bigger view"
            loading="lazy"
          />
        </div>
      </div>

      <div className={style.productdisplayRight}>
        <h1>{product.name}</h1>
        <div className={style.stars}>
          <img src={product.fullstar} alt="Full Star" loading="lazy" />
          <img src={product.fullstar} alt="Full Star" loading="lazy" />
          <img src={product.fullstar} alt="Full Star" loading="lazy" />
          <img src={product.fullstar} alt="Full Star" loading="lazy" />
          <img src={product.halfstar} alt="Full Star" loading="lazy" />
        </div>
        <p>₦ {product.price}</p>
        <div className={style.description}>
          Indulge in our curated collection: chic clothing, elegant jewelry,
          luxurious beauty, and essential grooming for all.
        </div>
        <div className={style.productdisplayRightSize}>
          <h3>Select Size</h3>
          <div className={style.productdisplayRightSizes}>
            <div>S</div>
            <div>M</div>
            <div>L</div>
            <div>XL</div>
            <div>XXL</div>
          </div>
        </div>
        <div
          className={style.detailbuttons}
          onClick={() => {
            addToCart(product.id);
          }}
        >
          <button classname={style.detailBtn}>Add to Cart</button>
        </div>
        <div className={style.minitags}>
          <p>
            Category: <span>{product.category}</span>
          </p>
          <p>
            Tags: <span>Mordern Lastest</span>
          </p>
        </div>
      </div>
    </div>
  );
}
