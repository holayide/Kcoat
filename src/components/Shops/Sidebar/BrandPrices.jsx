import Buttons from "../Piece/Buttons";
import style from "../SideBar.module.css";
import Input from "../Piece/Input";

export default function BrandPrices({ handleChange }) {
  return (
    <>
      <div className={style.brandPrice}>
        <h3>BY PRICE</h3>
        <div className={style.priceline}>
          <div className={style.circle1}></div>
          <hr />
          <div className={style.circle2}></div>
        </div>
        <p>#2,000-500,000</p>
        <hr />

        <h3>BY COLOR</h3>

        {/* radio */}
        <div className={style.inputs}>
          <label className={style.sidebarlabelcontainer}>
            <input onChange={handleChange} type="radio" value="" name="test1" />
            <span className={`${style.checkmark} ${style.all}`}></span>
          </label>

          <Input
            handleChange={handleChange}
            value="green"
            name="test1"
            color="#67C635"
          />

          <Input
            handleChange={handleChange}
            value="gold"
            name="test1"
            color="orange"
          />

          <Input
            handleChange={handleChange}
            value="blue"
            name="test1"
            color="#2092B2"
          />

          <Input
            handleChange={handleChange}
            value="orange"
            name="test1"
            color="red"
          />

          <Input
            handleChange={handleChange}
            value="black"
            name="test1"
            color="black"
          />
        </div>

        {/* remove */}
        {/* <label className="sidebar-label-container">
          <input
            onChange={handleChange}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className={style.checkmark}
            style={{ background: "white", border: "2px solid black" }}
          ></span>
        </label> */}

        {/* end radio */}

        <hr />

        <h3>BY SIZE</h3>
        <div className={style.weight}>
          {/* <Buttons value="" title="Body" /> */}
          <Buttons value="neck" title="S" className={style.btnweight} />
          <Buttons value="hand" title="M" className={style.btnweight} />
          <Buttons value="lips" title="L" className={style.btnweight} />
          <Buttons value="lips" title="XL" className={style.btnweight} />
          <Buttons value="lips" title="XXL" className={style.btnweight} />
        </div>
        <hr />
      </div>
    </>
  );
}
