import { PropsWithChildren } from "react";
import { Portal } from "../../portal/Portal";
import { Center, Dim } from "./ModalLayout.style";

const ModalLayout = ({ children }: PropsWithChildren) => {
  return (
    <Portal>
      <Center>
        <Dim>{children}</Dim>
      </Center>
    </Portal>
  );
};

export default ModalLayout;
