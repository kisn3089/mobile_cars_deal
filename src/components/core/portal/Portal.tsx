import { PropsWithChildren, useEffect } from "react";
import ReactDOM from "react-dom";

export const Portal = ({ children }: PropsWithChildren) => {
  const modal = document.getElementById("modal");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.body.style.touchAction = "none";

    return () => {
      document.body.style.overflow = "auto";
      document.body.style.touchAction = "auto";
    };
  }, [modal]);

  return modal && ReactDOM.createPortal(children, modal);
};
