import Header from "../components/Header";
import WishListItems from "../components/Wish lists/WishListItems";

export default function WishList() {
  const wishHeader = {
    filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.25))",
    position: "sticky",
    top: 0,
    zIndex: 1,
  };

  return (
    <div>
      <div style={wishHeader}>
        <Header />
      </div>

      <WishListItems />
    </div>
  );
}
