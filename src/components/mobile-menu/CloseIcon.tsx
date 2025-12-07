import type React from "preact/compat";

import "./CloseIcon.css";

export const CloseIcon: React.FC = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    class="close-icon"
    viewBox="0 0 64 64"
    width="64"
    height="64"
  >
    <path d="m34.12 32 14.64-14.64a1.5 1.5 0 1 0 -2.12-2.12l-14.64 14.64-14.64-14.64a1.5 1.5 0 0 0 -2.12 2.12l14.64 14.64-14.64 14.64a1.5 1.5 0 1 0 2.12 2.12l14.64-14.64 14.64 14.64a1.5 1.5 0 1 0 2.12-2.12z" />
  </svg>
);
