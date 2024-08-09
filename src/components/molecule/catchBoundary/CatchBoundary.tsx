import ErrorBoundary from "@/util/method/errorBoundary";
import { PropsWithChildren, Suspense } from "react";

type CatchBoundaryProps = {
  loading: React.ReactElement;
  error: React.ReactElement;
} & PropsWithChildren;

const CatchBoundary = ({ children, loading, error }: CatchBoundaryProps) => {
  return (
    <ErrorBoundary fallback={error}>
      <Suspense fallback={loading}>{children}</Suspense>
    </ErrorBoundary>
  );
};

export default CatchBoundary;
