import style from "../SideBar.module.css";

const Input = ({ handleChange, value, name, color }) => {
  return (
    <label className={style.sidebarlabelcontainer}>
      <input onChange={handleChange} type="radio" value={value} name={name} />
      <span
        className={style.checkmark}
        style={{ backgroundColor: color }}
      ></span>
    </label>
  );
};

export default Input;
