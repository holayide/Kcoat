import React from "react";
import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { Link } from "react-router-dom";
import style from "./ProductItem.module.css";

function ProductItem(props) {
  const { addToCart } = useContext(ShopContext);

  return (
    <div className={style.items}>
      <div className={style.itemImage}>
        <Link to={`/product/${props.id}`}>
          <img onClick={window.scrollTo(0, 0)} src={props.image} alt="images" />
        </Link>
      </div>

      <div className={style.productText}>
        <div className={style.productName}>
          <p>{props.name}</p>
          <img src={props.heart} alt="Heart" />
        </div>

        <div className={style.starImages}>
          <img src={props.fullstar} alt="Full Star" />
          <img src={props.fullstar} alt="Full Star" />
          <img src={props.fullstar} alt="Full Star" />
          <img src={props.fullstar} alt="Full Star" />
          <img src={props.halfstar} alt="Full Star" />
        </div>

        <div className={style.productPrice}>{`₦ ${props.price}`}</div>

        <div className={style.details}>
          <p>{props.tag}</p>
          <div
            className={style.productbuttons}
            onClick={() => {
              addToCart(props.id);
            }}
          >
            <img src="../../assets/icons/minicart.svg" alt="mini cart" />
            <button>ADD TO CART</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
