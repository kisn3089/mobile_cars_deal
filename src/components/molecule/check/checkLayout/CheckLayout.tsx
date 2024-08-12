import { PropsWithChildren } from "react";
import { Layout, Padding } from "./CheckLayout.style";

const CheckLayout = ({ children }: PropsWithChildren) => {
  return (
    <Padding>
      <Layout>{children}</Layout>
    </Padding>
  );
};

export default CheckLayout;
