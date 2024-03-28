import { NavLink } from "react-router-dom";

export default function NavBar({ lists }) {
  return (
    <nav>
      <ul>
        {lists.map((list) => (
          <HeaderIcons
            icon={list.icon}
            icontext={list.icontext}
            goto={list.goto}
          />
        ))}
      </ul>
    </nav>
  );
}

export function HeaderIcons({ icon, icontext, goto }) {
  return (
    <li>
      <NavLink to={goto}>
        <img src={icon} alt={icontext} />
        <p>{icontext}</p>
      </NavLink>
    </li>
  );
}
