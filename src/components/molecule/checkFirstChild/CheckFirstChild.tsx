import { PropsWithChildren } from "react";
import CheckLayout from "./checkLayout/CheckLayout";

type HasCarsProps = {
  checkFor: boolean;
  fallback: React.ReactElement;
} & PropsWithChildren;

const CheckFirstChild = ({ children, checkFor, fallback }: HasCarsProps) => {
  if (checkFor) return <>{children}</>;

  return <CheckLayout>{fallback}</CheckLayout>;
};

export default CheckFirstChild;
