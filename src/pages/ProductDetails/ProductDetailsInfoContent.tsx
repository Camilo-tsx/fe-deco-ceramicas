import "./ProductDetails.css";
import { useCartContext } from "../../context/CartContext";
import { ProductsFromBE } from "../Catalog/Catalog";

interface ProductInfoProps {
  product: ProductsFromBE;
}

export const ProductDetailsInfoContent = ({ product }: ProductInfoProps) => {
  const { addToCart } = useCartContext();

  return (
    <>
      <div className="product-details-title">
        <strong>{product.name}</strong>
      </div>
      <div className="product-details-category">
        <small>{product.category}</small>
      </div>
      <div className="product-details-price">
        <strong>${product.price}</strong>
      </div>
      <div className="product-details-description-title">
        <strong>Descripcion:</strong>
      </div>
      <div className="product-details-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo nam
        voluptate maxime nemo, eos eligendi adipisci consequuntur soluta in
        debitis sit nulla doloribus rerum blanditiis dolorum ab laboriosam aut
        molestiae?
        <br />
        <br />
        Medidas: 20x20x20
      </div>
      <div className="product-details-button">
        <button onClick={() => addToCart(product)}>Agregar al carrito</button>
      </div>
    </>
  );
};
