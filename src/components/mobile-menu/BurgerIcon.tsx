import type React from "preact/compat";

import "./BurgerIcon.css";

export const BurgerIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="burger-icon"
    viewBox="0 0 50 50"
    width="50"
    height="50"
  >
    <path
      fill="currentColor"
      d="m40.637 14.67h-31.274a1 1 0 0 1 0-2h31.274a1 1 0 0 1 0 2z"
    ></path>
    <path
      fill="currentColor"
      d="m40.637 26h-31.274a1 1 0 0 1 0-2h31.274a1 1 0 0 1 0 2z"
    ></path>
    <path
      fill="currentColor"
      d="m40.637 37.33h-31.274a1 1 0 0 1 0-2h31.274a1 1 0 0 1 0 2z"
    ></path>
  </svg>
);
