import { PropsWithChildren } from "react";
import { SkeletonLayout } from "./Skeleton.style";

type SkeletonProps = {
  hasLoading: boolean;
  fallback: React.ReactNode;
} & PropsWithChildren;

const Skeleton = ({ hasLoading, children, fallback }: SkeletonProps) => {
  if (!hasLoading) return <>{children}</>;

  return <SkeletonLayout>{fallback}</SkeletonLayout>;
};

export default Skeleton;
