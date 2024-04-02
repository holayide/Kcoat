import style from "./Preorder.module.css";

export default function Categories() {
  return (
    <div className={style.wrapper}>
      <h3 className={style.orderDetails}>Categories</h3>
      <p className={style.categoryDetails}>
        Explore our diverse categories, from men’s and women’s clothing to
        accessories and makeup products
      </p>
      <CategoriesCards />
    </div>
  );
}

function CategoriesCards() {
  return (
    <div className={style.categories}>
      <CategoriesCard>
        <div className={style.womenCloth}>
          <img src="../../assets/women-cloth.svg" alt="women cloth" />
          <p className={style.catText}>women’s clothing</p>
        </div>
      </CategoriesCard>

      <div className={style.shortCards}>
        <CategoriesCard>
          <div className={style.makeup}>
            <img src="../../assets/makeup.svg" alt="markup" />
            <p className={style.catMakeupText}>makeup products</p>
          </div>
        </CategoriesCard>

        <CategoriesCard>
          <div className={style.accessories}>
            <img src="../../assets/accessories.svg" alt="accessories" />
            <p className={style.accessoriesText}>Accessories</p>
          </div>
        </CategoriesCard>
      </div>

      <CategoriesCard>
        <div className={style.menCloth}>
          <img src="../../assets/men-cloth.svg" alt="accessories" />
          <p className={style.catText}>Men’s Clothing</p>
        </div>
      </CategoriesCard>
    </div>
  );
}

function CategoriesCard({ children }) {
  return <div>{children}</div>;
}

// function ShortCards({ catImage, catText, className }) {
//   return (
// <div className={className}>
//   <img src={catImage} alt={catText} />
//   <p className={style.catText}>{catText}</p>
// </div>
//   );
// }

//   <CategoriesCard
//           catImage=
//           catText="makeup products"
//           className="cat-style"
//         />

/* function ShortCards({ catImage, catText, className }) {
  return (
    <div className={className}>
      <img src={catImage} alt={catText} />
      <p className={style.catText}>{catText}</p>
    </div>
  );
} */

// catImage=
// catText=
