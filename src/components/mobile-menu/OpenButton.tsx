import "./OpenButton.css";

import React from "preact/compat";
import { Menu } from "./Menu";
import { BurgerIcon } from "./BurgerIcon";

export type Props = {
  children?: React.ReactNode;
};

export const OpenButton: React.FC<Props> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleOpenButtonClick = () => {
    setIsMenuOpen(true);
  };

  const handleCloseButtonClick = () => {
    setTimeout(() => setIsMenuOpen(false), 0);
  };

  return (
    <button class="open-button" onClick={handleOpenButtonClick}>
      <BurgerIcon />
      {isMenuOpen && <Menu onClose={handleCloseButtonClick}>{children}</Menu>}
    </button>
  );
};
