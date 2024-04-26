import { Link } from "react-router-dom";
import AdminHeader from "../Admin Header/AdminHeader";
import style from "./NewProduct.module.css";

export default function NewProduct() {
  return (
    <div>
      <AdminHeader />
      <div className={style.newProductMain}>
        <div className={style.backToProduct}>
          <div className={style.backToProductImg}>←</div>
          <p>Back to product list</p>
        </div>
        <div className={style.newProductText}>
          <h3>Add new product</h3>
          <div className={style.viewShop}>View Shop</div>
        </div>
        <div className={style.newProductBoxes}>
          <div className="style.newProductDescriptionBoxes">
            <div className="newProductInfo">
              <div className="newProductName">
                <h4>Name & description</h4>
                <div className="style newProductTitle">
                  <div className="newProduct">
                    <label htmlFor="title">Product title</label>
                    <input type="text" name="title" id="title" />
                  </div>
                  <div className="style newProductDescription">
                    <label htmlFor="description">Description</label>
                    <input type="text" name="description" id="description" />
                  </div>
                </div>
              </div>
              <div className="style newcat">
                <h4>Category</h4>
                <div className="style productcat">
                  <label htmlFor="category">Product category</label>
                  <select name="category" id="category">
                    <option value="women">Women wear</option>
                    <option value="men">Men wear</option>
                    <option value="jelwery">Jelwery</option>
                    <option value="beauty">Beauty Product</option>
                  </select>
                </div>
              </div>
              <div className="style BrandsTags">
                <h4>Brands&Tages</h4>
                <div className="style.smallbrands">
                  <div>
                    <label htmlFor="brands">Product brands</label>
                    <input type="text" name="brands" id="brands" />
                  </div>
                  <div>
                    <label htmlFor="tags">Product Tags</label>
                    <select name="tags" id="tags">
                      <option value="hand">Hand</option>
                      <option value="body">Body</option>
                      <option value="lip">Lip</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="style inventory">
                <h4>Brands&Tages</h4>
                <div className="style.smallbrands">
                  <div>
                    <label htmlFor="quantity">Quantity</label>
                    <input type="text" name="quantity" id="quantity" />
                  </div>
                  <div>
                    <label htmlFor="SKU">SKU(Optional)</label>
                    <input type="text" name="SKU" id="SKU" />
                  </div>
                </div>
              </div>
            </div>
            <div className="newProductImageSection">
              <div className="productimg">
                <h4>Product image</h4>
                <div className="productimgBox">
                  <p></p>
                  <div className="uploadBox">
                    <p>Click to add images</p>
                  </div>
                </div>
              </div>
              <div className="newProductPrice">
                <h4>Price</h4>
                <div className="priceBox">
                  <p>Amount</p>
                  <div>
                    <div className="newProductPriceImage">₦</div>
                    <input type="text" name="price" id="price" />
                  </div>
                </div>
              </div>
              <div className="newProductsize">
                <h4>size</h4>
                <div className="sizeBox">
                  <p>S</p>
                  <p>M</p>
                  <p>L</p>
                  <p>XL</p>
                  <p>XXL</p>
                </div>
              </div>
              <div className="newProduccolors">
                <h4>Product colors</h4>
                <div className="colorBox">
                  <Link>+ Add colors</Link>
                </div>
              </div>
            </div>
          </div>
          <div className="style.newProductPreview">
            <div className="previewCard">
              <div className="previewImg"></div>
              <div className="previewName">
                <p>Jumpsuit by Ofure</p>
                <p>#love</p>
              </div>
              <p>12000</p>
              <div className="previewlabel">
                <div></div>
                <button>ADD TO CART</button>
              </div>
            </div>
            <div>
              <div className="">Discard</div>
              <div>
                <div>Schedule</div>
                <div>Publish</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
