import { useCartContext } from "../../../context/CartContext";
import { imgUrl } from "../../catalog/Products/ImgUrl";

export const CartContent = () => {
  const { cart, clearCart, removeItemFromCart, getSubtotal } = useCartContext();

  const emptyCart = cart.length === 0;
  return (
    <>
      <aside className="cart">
        <div className="cart-title">
          <p>
            <i className="bi bi-bag-heart"></i> MI CARRITO
          </p>
        </div>
        <div className="p-2">
          {emptyCart ? "No hay productos en tu carrito" : null}
        </div>
        <ul>
          {cart.map((product, index) => (
            <li key={index}>
              <img src={imgUrl[0]} alt="image-catalog" />
              <div className="cart-product-container">
                <div className="cart-product-info">
                  <strong>{product.name}</strong>
                  <button onClick={() => removeItemFromCart(index)}>X</button>
                </div>
                <p className="category">{product.category}</p>

                <footer className="cart-product-price">
                  <strong>{product.price}</strong>
                </footer>
              </div>
            </li>
          ))}
        </ul>
        <button className="clear-cart-button" onClick={clearCart}>
          Vaciar carrito
        </button>
      </aside>
      <div className="final-price-container">
        <strong className="final-price">
          <span>Subtotal:</span> <span>${getSubtotal()}</span>
        </strong>
        <button className="btn-purchase">Finalizar compra</button>
      </div>
    </>
  );
};
