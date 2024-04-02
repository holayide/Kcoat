import { lists, lists2 } from "../utilities/ListNav";
import NavBar from "./NavBar";
import style from "./Header.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <Logo />
      <NavBar lists={lists} />
      <SearchBar />
      <NavBar lists={lists2} />
      <MenuBar />
    </header>
  );
}

export function Logo() {
  return (
    <div className={style.logo}>
      <img src="../../assets/icons/kcoat-logo.svg" alt="Kcoat Logo" />
    </div>
  );
}

function SearchBar() {
  return (
    <div className={style.search}>
      <img src="../../assets/icons/search.svg" alt="" />
      <input type="text" />
    </div>
  );
}

function MenuBar() {
  return (
    <div className={style.menu}>
      <img src="../../assets/icons/sidemenu.svg" alt="sidemenu" />
    </div>
  );
}
