import { PropsWithChildren } from "react";
import { FooterLayout } from "./Footer.style";

const Footer = ({ children }: PropsWithChildren) => {
  return <FooterLayout>{children}</FooterLayout>;
};

export default Footer;
