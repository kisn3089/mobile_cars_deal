import { PropsWithChildren } from "react";
import { Portal } from "../portal/Portal";
import { Center, Dim } from "./Modal.style";

const Modal = ({ children }: PropsWithChildren) => {
  return (
    <Portal>
      <Center>
        <Dim>{children}</Dim>
      </Center>
    </Portal>
  );
};

export default Modal;
