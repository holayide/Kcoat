import home from "../images-icons/home-2.svg";
import shop from "../images-icons/shop.svg";
import info from "../images-icons/info-circle.svg";
import help from "../images-icons/Help.svg";
import user from "../images-icons/User.svg";
import like from "../images-icons/Like.svg";
import cart from "../images-icons/cart.svg";

export const lists = [
  {
    id: 1,
    iconimage: home,
    icontext: "Home",
    goto: "/",
  },
  {
    id: 2,
    iconimage: shop,
    icontext: "Shop",
    goto: "/women",
  },
  {
    id: 3,
    iconimage: info,
    icontext: "About",
    goto: "/about",
  },
  {
    id: 4,
    iconimage: help,
    icontext: "Help",
    goto: "/help",
  },
];

export const lists2 = [
  {
    id: 1,
    iconimage: user,
    icontext: "Account",
    goto: "/account",
  },
  {
    id: 2,
    iconimage: like,
    icontext: "Wish List",
    goto: "/wishlist",
  },
  {
    id: 3,
    iconimage: cart,
    icontext: "Cart",
    goto: "/cart",
  },
];
