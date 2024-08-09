import { PropsWithChildren, Suspense } from "react";

type CatchBoundaryProps = {
  fallback: React.ReactNode;
} & PropsWithChildren;

const CatchBoundary = ({ children, fallback }: CatchBoundaryProps) => {
  return <Suspense fallback={fallback}>{children}</Suspense>;
};

export default CatchBoundary;
