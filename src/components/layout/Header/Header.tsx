import { useState } from "react";
import logo from "../../../assets/images/logo.png";
import "./Header.css";
import { OverlayMenu } from "./OverlayMenu";
import { BurgerMenu } from "./BurgerMenu";
import { Cart } from "../Cart/Cart";

export const Header = () => {
  const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCartMenu = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleBurgerMenu = () => {
    setIsBurgerMenuOpen(!isBurgerMenuOpen);
  };

  return (
    <header className="header-container">
      <i className="bi bi-list burger-menu" onClick={toggleBurgerMenu}></i>
      <a href="/" className="homelogo-link">
        <img className="image-Logo" src={logo} alt="image-logo" />
      </a>
      <i className="bi bi-bag-check cart-icon" onClick={toggleCartMenu}></i>
      <Cart menuIsOpen={isCartOpen} toggleMenu={toggleCartMenu} />
      <BurgerMenu toggleMenu={toggleBurgerMenu} menuIsOpen={isBurgerMenuOpen} />
      <OverlayMenu isOpen={isBurgerMenuOpen} onClose={toggleBurgerMenu} />
      <OverlayMenu isOpen={isCartOpen} onClose={toggleCartMenu} />
    </header>
  );
};
