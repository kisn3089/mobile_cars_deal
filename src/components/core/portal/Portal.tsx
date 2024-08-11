import { PropsWithChildren } from "react";
import ReactDOM from "react-dom";

export const Portal = ({ children }: PropsWithChildren) => {
  const modal = document.getElementById("modal");
  document.body.style.overflow = "hidden";
  document.body.style.touchAction = "none";

  return modal && ReactDOM.createPortal(children, modal);
};
