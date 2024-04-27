import { Link, useNavigate } from "react-router-dom";
import AdminHeader from "../Admin Header/AdminHeader";
import style from "./NewProduct.module.css";
import { useState } from "react";

export default function NewProduct() {
  const [image, setImage] = useState(false);
  const navigate = useNavigate();

  const handleImage = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className={style.newProductContainer}>
      <AdminHeader />
      <div className={style.newProductMain}>
        <div className={style.backToProduct}>
          <div onClick={() => navigate(-1)} className={style.backToProductImg}>
            ←
          </div>
          <p>Back to product list</p>
        </div>
        <div className={style.newProductText}>
          <h3>Add new product</h3>
          <div className={style.viewShop}>View Shop</div>
        </div>
        <div className={style.newProductBoxes}>
          <div className={style.newProductDescriptionBoxes}>
            <div className={style.newProductInfo}>
              <div className={style.newProductName}>
                <h4>Name & description</h4>
                <div className={style.newProductTitle}>
                  <div className={style.newProduct}>
                    <label htmlFor="title">Product title</label>
                    <input type="text" name="title" id="title" />
                  </div>
                  <div className={style.newProduct}>
                    <label htmlFor="description">Description</label>
                    <textarea
                      name="description"
                      id="description"
                      cols="30"
                      rows="8"
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className={style.newProductName}>
                <h4>Category</h4>
                <div className={style.newProductTitle}>
                  <div className={style.newProduct}>
                    <label htmlFor="category">Product category</label>
                    <select name="category" id="category">
                      <option value="women">Women wear</option>
                      <option value="men">Men wear</option>
                      <option value="jelwery">Jelwery</option>
                      <option value="beauty">Beauty Product</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={style.newProductName}>
                <h4>Brands&Tages</h4>
                <div
                  className={`${style.newProductTitle} ${style.smallbrands}`}
                >
                  <div className={style.newProduct}>
                    <label htmlFor="brands">Product brands</label>
                    <input type="text" name="brands" id="brands" />
                  </div>
                  <div className={style.newProduct}>
                    <label htmlFor="tags">Product Tags</label>
                    <select name="tags" id="tags">
                      <option value="hand">Hand</option>
                      <option value="body">Body</option>
                      <option value="lip">Lip</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className={style.newProductName}>
                <h4>Inventory</h4>
                <div
                  className={`${style.newProductTitle} ${style.smallbrands}`}
                >
                  <div className={style.newProduct}>
                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" name="quantity" id="quantity" />
                  </div>
                  <div className={style.newProduct}>
                    <label htmlFor="SKU">SKU(Optional)</label>
                    <input type="text" name="SKU" id="SKU" />
                  </div>
                </div>
              </div>
            </div>

            <div className={style.newProductImageSection}>
              <div className={style.newProductName}>
                <h4>Product image</h4>
                <div className={style.productimgBox}>
                  <label>Content</label>
                  <div className={style.uploadBox}>
                    <div>
                      <label htmlFor="file-input">
                        {image ? (
                          <img src={URL.createObjectURL(image)} alt="Product" />
                        ) : (
                          <p>Click to add images</p>
                        )}
                      </label>
                    </div>
                    <input
                      onChange={handleImage}
                      type="file"
                      name="image"
                      id="file-input"
                      hidden
                    />
                  </div>
                </div>
              </div>

              <div
                className={`${style.newProductName} ${style.priceproductbox}`}
              >
                <h4>Price</h4>
                <div className={style.productimgBox}>
                  <label>Amount</label>
                  <div className={style.setprice}>
                    <div className="newProductPriceImage">₦</div>
                    <input type="text" name="price" id="price" />
                  </div>
                </div>
              </div>

              <div
                className={`${style.newProductName} ${style.priceproductbox}`}
              >
                <h4>Size</h4>
                <div className={style.productimgBox}>
                  <label htmlFor="sizes">Product sizes</label>
                  <div className={style.setSizes}>
                    <p>S</p>
                    <p>M</p>
                    <p>L</p>
                    <p>XL</p>
                    <p>XXL</p>
                  </div>
                </div>
              </div>

              <div className={style.newProductName}>
                <h4>Colors</h4>
                <div className={style.productimgBox}>
                  <label htmlFor="color">Product color</label>
                  <div className={style.setColors}>
                    <Link>+ Add colors</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={style.newProductPreview}>
            <div>
              <h3>Preview</h3>
              <div className={style.previewCard}>
                <div className={style.previewImg}></div>
                <div className={style.previewName}>
                  <p>Jumpsuit by Ofure</p>
                  <img src="../../assets/icons/favourite.svg" alt="heart" />
                </div>
                <div className={style.sethearts}>
                  <img
                    src="../../assets/icons/yellow-star.svg"
                    alt="full star"
                  />
                  <img
                    src="../../assets/icons/yellow-star.svg"
                    alt="full star"
                  />
                  <img
                    src="../../assets/icons/yellow-star.svg"
                    alt="full star"
                  />
                  <img
                    src="../../assets/icons/yellow-star.svg"
                    alt="full star"
                  />
                  <img
                    src="../../assets/icons/yellow-star.svg"
                    alt="full star"
                  />
                </div>
                <p>₦ 12000</p>
                <div className={style.previewlabel}>
                  <p>label</p>
                  <button>🛒 ADD TO CART</button>
                </div>
              </div>
              <div className={style.previewButtons}>
                <div className={style.previewBtn}>Discard</div>
                <div className={style.shedules}>
                  <div className={style.previewBtn}>Schedule</div>
                  <div className={`${style.previewBtn} ${style.publish}`}>
                    Publish
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
