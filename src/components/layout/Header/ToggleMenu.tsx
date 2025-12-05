import { ReactNode } from "react";

interface ToggleMenuProps {
  children: ReactNode;
  menuIsOpen: boolean;
  toggleMenu: () => void;
  position: "left" | "right";
}

export const ToggleMenu = ({
  menuIsOpen,
  toggleMenu,
  children,
  position,
}: ToggleMenuProps) => {
  return (
    <div
      className={`menu-container ${position} ${
        menuIsOpen ? "menu-is-open" : "menu-is-closed"
      }`}
    >
      <div className="d-flex justify-content-start p-3">
        <i className="bi bi-x-lg close-icon" onClick={toggleMenu}></i>
        <button className="close-button" onClick={toggleMenu}>
          <p>Cerrar</p>
        </button>
      </div>
      <div>{children}</div>
    </div>
  );
};
