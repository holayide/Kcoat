import "./Buttons.css";

export default function Buttons({ onClick, title, value, className = "btns" }) {
  return (
    <button onClick={onClick} value={value} className={className}>
      {title}
    </button>
  );
}
