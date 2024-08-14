import { PropsWithChildren, useRef } from "react";
import { Header, Layout, XLogo } from "./Modal.style";
import { useCloseModal } from "@/hooks/useCloseModal";
import ModalLayout from "./modalLayout/ModalLayout";

type ModalProps = {
  onClose: () => void;
} & PropsWithChildren;

const Modal = ({ children, onClose }: ModalProps) => {
  const insideRef = useRef<HTMLDivElement>(null);

  /* Modal 외부 mousedown 이벤트 탐지 */
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
