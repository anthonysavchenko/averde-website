import React from "preact/compat";
import "./Menu.css";
import { CloseIcon } from "./CloseIcon";

type Props = {
  children?: React.ReactNode;
  onClose: () => void;
};

export const Menu: React.FC<Props> = ({ children, onClose }) => (
  <ul class="mobile-menu">
    <div class="mobile-menu-header">
      <h2 class="logo">AV</h2>
      <button class="close-button" onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
    {children}
  </ul>
);
