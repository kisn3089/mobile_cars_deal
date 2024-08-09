import { PropsWithChildren } from "react";

type CarListLoadingProps = {
  hasLoading: boolean;
  fallback: React.ReactElement[];
  //   children: React.ReactElement[];
} & PropsWithChildren;

const CarListLoading = ({
  hasLoading,
  children,
  fallback,
}: CarListLoadingProps) => {
  if (hasLoading) return <>{fallback}</>;
  return <>{children}</>;
};

export default CarListLoading;
