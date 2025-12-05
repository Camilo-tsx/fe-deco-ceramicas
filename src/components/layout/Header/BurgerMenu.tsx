import { Link } from "react-router-dom";
import "./Header.css";
import { navLinks } from "../../../constants";
import { ToggleMenu } from "./ToggleMenu";

interface BurgerMenuProps {
  menuIsOpen: boolean;
  toggleMenu: () => void;
}

export const BurgerMenu = ({ menuIsOpen, toggleMenu }: BurgerMenuProps) => {
  return (
    <ToggleMenu position="left" menuIsOpen={menuIsOpen} toggleMenu={toggleMenu}>
      <div>
        <ul className="ul-links">
          {navLinks.map(links => (
            <Link to={links.href} key={links.key} onClick={toggleMenu}>
              {links.label}
            </Link>
          ))}
        </ul>
      </div>
    </ToggleMenu>
  );
};
