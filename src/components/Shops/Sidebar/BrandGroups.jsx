import { Link } from "react-router-dom";
import style from "../SideBar.module.css";

export default function BrandGroups() {
  return (
    <div className={style.brandCategory}>
      <h3>PRODUCT CATEGORIES</h3>
      <div className={style.brandlist}>
        <ul>
          <li>
            <Link to="/women">Women’s wear</Link>
          </li>
          <li>
            <Link to="/men">Men’s wear</Link>
          </li>
          <li>
            <Link to="/accessories">Jewelry</Link>
          </li>
          <li>
            <Link to="/lip">Makeup</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
