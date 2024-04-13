import style from "./Breadcrum.module.css";
import less from "../../ShopAssets/less.svg";

export default function Breadcrum({ product }) {
  return (
    <div className={style.breadcrum}>
      <p>
        Home
        <img src={less} alt="less" />
        shop
        <img src={less} alt="less" />
        {product.category}
        <img src={less} alt="less" />
        {product.name}
      </p>
    </div>
  );
}
