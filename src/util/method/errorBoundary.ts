import React, { createElement } from "react";
export type FallbackProps = {
  resetErrorBoundary: () => void;
};
/**
 * ErrorBoundary 컴포넌트의 프로퍼티를 정의합니다.
 * @interface ErrorBoundaryProps
 */
interface ErrorBoundaryProps {
  fallback: React.ComponentType<FallbackProps>;
  onReset: () => void;
  children: React.ReactNode;
}

/**
 * ErrorBoundary의 state 프로퍼티를 정의합니다.
 * @interface ErrorBoundaryState
 */
interface ErrorBoundaryState {
  hasError: boolean;
}

/**
 * 에러를 처리하고 대체 UI를 표시하는 React 컴포넌트입니다.
 * @class ErrorBoundary
 * @extends {React.Component<ErrorBoundaryProps, ErrorBoundaryState>}
 */
class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  /* Error 감지시 이벤트 */
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    console.error("Error caught by componentDidCatch:", error, errorInfo);
  }

  reset(): void {
    this.props.onReset();
    this.setState({ hasError: false });
  }

  render() {
    const fallback = this.props.fallback;

    if (this.state.hasError) {
      return createElement(fallback, {
        resetErrorBoundary: this.reset.bind(this),
      });
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
