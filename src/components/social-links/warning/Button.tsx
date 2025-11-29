import React from "preact/compat";
import "./Button.css";
import { Alert } from "./Alert";

export type Props = {
  title: string;
  children?: React.ReactNode;
};

export const Button: React.FC<Props> = ({ title, children }) => {
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);
  const timeout = React.useRef<NodeJS.Timeout>();

  const handleButtonClick = () => {
    if (timeout.current) {
      clearTimeout(timeout.current);
    } else {
      setIsAlertOpen(true);
    }

    timeout.current = setTimeout(() => {
      timeout.current = undefined;
      setIsAlertOpen(false);
    }, 3500);
  };

  const handleAlertClick = () => {
    setTimeout(() => {
      if (timeout.current) {
        clearTimeout(timeout.current);
        timeout.current = undefined;
      }

      setIsAlertOpen(false);
    }, 0);
  };

  return (
    <div class="button" onClick={handleButtonClick}>
      {children}
      {isAlertOpen && (
        <Alert title={title} onClick={handleAlertClick}>
          {children}
        </Alert>
      )}
    </div>
  );
};
