import Buttons from "../Piece/Buttons";
import style from "../SideBar.module.css";

export default function BrandTags({ handleClick }) {
  return (
    <>
      {/* new company */}
      <div className={style.brandTags}>
        <h3>BRANDS</h3>
        <div className={style.brandbtns}>
          <Buttons onClick={handleClick} value="" title="All Products" />
          <Buttons onClick={handleClick} value="fenty" title="Fenty" />
          <Buttons onClick={handleClick} value="dior" title="Dior" />
          <Buttons onClick={handleClick} value="kyle" title="Kyle" />
          <Buttons onClick={handleClick} value="ankara" title="Ankara" />
        </div>
      </div>

      {/* Tags */}
      <div className={style.brandTags}>
        <h3>TAGS</h3>
        <div className={style.brandbtns}>
          <Buttons onClick={handleClick} value="" title="All Products" />
          <Buttons onClick={handleClick} value="body" title="Body" />
          <Buttons onClick={handleClick} value="neck" title="Neck" />
          <Buttons onClick={handleClick} value="hand" title="Hand" />
          <Buttons onClick={handleClick} value="lips" title="Lips" />
        </div>
      </div>
    </>
  );
}
