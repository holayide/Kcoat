import { NavLink } from "react-router-dom";
import style from "./Header.module.css";
import { isUserLogin } from "../utilities/user";

export default function NavBar({ lists, isOpen }) {
  const user = isUserLogin();

  return (
    <nav className={`${style.nav} ${isOpen ? style.navMobile : ""}`}>
      <ul>
        {lists.map((list) => (
          <HeaderIcons
            iconimage={list.iconimage}
            icontext={list.icontext}
            goto={list.goto}
            key={list.id}
            isLogin={user}
          />
        ))}
      </ul>
    </nav>
  );
}

export function HeaderIcons({ iconimage, icontext, goto, isLogin }) {
  const destination = isLogin && icontext === "Account" ? "/profile" : goto;

  return (
    <li>
      <NavLink to={destination}>
        <img src={iconimage} alt={icontext} />
        <p>{isLogin && icontext === "Account" ? "User" : icontext}</p>
      </NavLink>
    </li>
  );
}
