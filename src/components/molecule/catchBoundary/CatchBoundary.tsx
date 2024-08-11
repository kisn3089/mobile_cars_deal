import ErrorBoundary, { FallbackProps } from "@/util/method/errorBoundary";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { PropsWithChildren, Suspense } from "react";

type CatchBoundaryProps = {
  loading: React.ReactElement;
  error: ({ resetErrorBoundary }: FallbackProps) => React.ReactElement;
  // error: ({ onReset }: { onReset: () => void }) => React.ReactElement;
} & PropsWithChildren;

const CatchBoundary = ({ children, loading, error }: CatchBoundaryProps) => {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallback={error}>
          <Suspense fallback={loading}>{children}</Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
};

export default CatchBoundary;
