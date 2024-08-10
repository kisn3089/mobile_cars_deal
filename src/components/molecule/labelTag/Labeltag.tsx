import { PropsWithChildren } from "react";
import { LabelTag } from "./LabelTag.style";

const Labeltag = ({ children }: PropsWithChildren) => {
  return <LabelTag>{children}</LabelTag>;
};

export default Labeltag;
