import { Link } from "react-router-dom";
import { useCartContext } from "../../../context/CartContext";
import "./Products.css";
import { ProductsFromBE } from "../../../pages/Catalog/Catalog";
import { imgUrl } from "./ImgUrl";

interface ProductsComponentProps {
  filteredProducts: ProductsFromBE[];
}

export const Products = ({ filteredProducts }: ProductsComponentProps) => {
  const { addToCart } = useCartContext();

  return (
    <>
      <div className="catalog-container">
        {filteredProducts.map(product => (
          <div key={product.id} className="catalog-card">
            <div className="catalog-item">
              <Link to={"/product-details?id=" + product.id}>
                <img src={imgUrl[0]} alt="image-example" />
              </Link>
              <div
                className="catalog-item-cart"
                onClick={() => addToCart(product)}
              >
                <p>AGREGAR AL CARRITO</p>
              </div>
            </div>
            <div className="catalog-item-description">
              <p className="item-description">{product.name}</p>
              <p className="item-price">${product.price}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};
