import { PropsWithChildren, useRef } from "react";
import { Header, Layout, XLogo } from "./Modal.style";
import { useCloseModal } from "@/hooks/useCloseModal";
import ModalLayout from "./modalLayout/ModalLayout";

const Modal = ({ children }: PropsWithChildren) => {
  const insideRef = useRef<HTMLDivElement>(null);
  const onClose = () => {};
  useCloseModal(insideRef, onClose);

  return (
    <ModalLayout>
      <Layout ref={insideRef}>
        <Header>
          <XLogo src="/assets/icons/ic_x.svg" alt="x" onClick={onClose} />
        </Header>
        {children}
      </Layout>
    </ModalLayout>
  );
};

export default Modal;
