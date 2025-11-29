import "./Alert.css";

export type Props = {
  title?: string;
  children?: React.ReactNode;
  onClick: () => void;
};

export const Alert: React.FC<Props> = ({ title, children, onClick }) => (
  <div class="alert" onClick={onClick}>
    <div class="icon-container">{children}</div>
    <div>{title}</div>
  </div>
);
