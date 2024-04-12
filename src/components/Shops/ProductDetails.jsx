import { useContext } from "react";
import { ShopContext } from "../../Context/ShopContext";
import { useParams } from "react-router-dom";
import Header from "../Header";
import style from "./ProductDetail.module.css";
import Breadcrum from "./Details/Breadcrum";
import ProductDisplay from "./Details/ProductDisplay";
import DescriptionBox from "./Details/DescriptionBox";

export default function ProductDetails() {
  const { datas } = useContext(ShopContext);
  const { productId } = useParams(ShopContext);
  const product = datas.find((e) => e.id === Number(productId));
  return (
    <div>
      <div className={style.detailheader}>
        <Header />
      </div>

      <div>
        <Breadcrum product={product} />
        <ProductDisplay product={product} />
        <DescriptionBox />
      </div>
    </div>
  );
}
