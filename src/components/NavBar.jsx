import { NavLink } from "react-router-dom";
import style from "./Header.module.css";

export default function NavBar({ lists, isOpen }) {
  return (
    <nav className={`${style.nav} ${isOpen ? style.navMobile : ""}`}>
      <ul>
        {lists.map((list) => (
          <HeaderIcons
            iconimage={list.iconimage}
            icontext={list.icontext}
            goto={list.goto}
            key={list.id}
          />
        ))}
      </ul>
    </nav>
  );
}

export function HeaderIcons({ iconimage, icontext, goto }) {
  return (
    <li>
      <NavLink to={goto}>
        <img src={iconimage} alt={icontext} />
        <p>{icontext}</p>
      </NavLink>
    </li>
  );
}
