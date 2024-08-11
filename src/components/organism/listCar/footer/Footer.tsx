import { FooterLayout, RequestMore } from "./Footer.style";

type FooterProps = {
  requestMore: () => void;
  disabled?: boolean;
};

const Footer = ({ requestMore, disabled }: FooterProps) => {
  return (
    <FooterLayout>
      <RequestMore onClick={requestMore} disabled={disabled}>
        더보기
      </RequestMore>
    </FooterLayout>
  );
};

export default Footer;
