import { NavLink } from "react-router-dom";

export default function NavBar({ lists }) {
  return (
    <nav>
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
