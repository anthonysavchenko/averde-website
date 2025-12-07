import React from "preact/compat";
import "./Menu.css";
import { CloseIcon } from "./CloseIcon";

type Props = {
  children?: React.ReactNode;
  onClose: () => void;
};

export const Menu: React.FC<Props> = ({ children, onClose }) => (
  <ul class="menu-items">
    <div class="menu-header-item">
      <h2 class="logo">AV</h2>
      <button class="close-button" onClick={onClose}>
        <CloseIcon />
      </button>
    </div>
    {children}
  </ul>
);
