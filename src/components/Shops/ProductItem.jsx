import React from "react";
import { Link } from "react-router-dom";
import Button from "../Button";
import style from "./ProductItem.module.css";

function ProductItem(props) {
  return (
    <div className={style.items}>
      <div className={style.itemImage}>
        <Link to={`/product/${props.id}`}>
          <img src={props.image} alt="images" />
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
          <div className={style.productbuttons}>
            <img src="../../assets/icons/minicart.svg" alt="mini cart" />
            <Button goto="./#" classname={style.productBtn}>
              ADD TO CART
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductItem;
