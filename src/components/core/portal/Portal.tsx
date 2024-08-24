import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

export const Portal = ({ children }: PropsWithChildren) => {
  const modal = document.getElementById("modal");

  return modal && ReactDOM.createPortal(children, modal);
};
