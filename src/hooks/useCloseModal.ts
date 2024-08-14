import { useEffect } from "react";

export const useCloseModal = (
  outSideRef: React.RefObject<HTMLDivElement>,
  callback: () => void
) => {
  useEffect(() => {
    const onClose = (e: MouseEvent) => {
      if (
        outSideRef.current &&
        !outSideRef.current.contains(e.target as Node)
      ) {
        callback();
      }
    };

    const ESCOnClose = (e: KeyboardEvent) => {
      if (e.code === "Escape") callback();
    };

    document.addEventListener("mousedown", onClose);
    document.addEventListener("keydown", ESCOnClose);
    return () => {
      document.removeEventListener("mousedown", onClose);
      document.removeEventListener("keydown", ESCOnClose);
    };
  }, [outSideRef]);
};
