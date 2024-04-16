import { lists, lists2 } from "../utilities/ListNav";
import NavBar from "./NavBar";
import style from "./Header.module.css";
import { useContext, useState } from "react";
import { ShopContext } from "../Context/ShopContext";

export default function Header() {
  const { getTotalCartItems } = useContext(ShopContext);
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(() => !isOpen);
  }

  return (
    <header className={style.header}>
      <Logo />
      <div className={style.navLeft}>
        <NavBar lists={lists} isOpen={isOpen} />
      </div>

      <SearchBar />
      <div className={style.cartTop}>
        <NavBar lists={lists2} isOpen={isOpen} />
        <div className={style.cartCircle}>{getTotalCartItems()}</div>
      </div>

      <MenuBar toggleMenu={toggleMenu} isOpen={isOpen} />
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

function MenuBar({ toggleMenu, isOpen }) {
  return (
    <div onClick={toggleMenu} className={style.menu}>
      {isOpen ? (
        <img src="../../assets/icons/cancel_menu.svg" alt="Cancel Menu" />
      ) : (
        <img src="../../assets/icons/sidemenu.svg" alt="Main Menu" />
      )}
    </div>
  );
}
