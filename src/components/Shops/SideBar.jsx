import BrandGroups from "./Sidebar/BrandGroups";
import BrandTags from "./Sidebar/BrandTags";
import BrandPrices from "./Sidebar/BrandPrices";
import style from "./SideBar.module.css";

export default function SideBar({ handleClick, handleChange }) {
  return (
    <div className={style.navbars}>
      <BrandGroups />
      <BrandTags handleClick={handleClick} />
      <BrandPrices handleChange={handleChange} />
    </div>
  );
}
