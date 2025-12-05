import "./Cart.css";
import { ToggleMenu } from "../Header/ToggleMenu";
import { CartContent } from "./CartContent";

interface CartMenuProps {
  menuIsOpen: boolean;
  toggleMenu: () => void;
}

export const Cart = ({ menuIsOpen, toggleMenu }: CartMenuProps) => {
  return (
    <ToggleMenu
      position="right"
      menuIsOpen={menuIsOpen}
      toggleMenu={toggleMenu}
    >
      <CartContent />
    </ToggleMenu>
  );
};
