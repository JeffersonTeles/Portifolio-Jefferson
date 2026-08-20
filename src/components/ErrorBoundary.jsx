import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[#0a0a0a] px-6">
          <div className="text-center">
            <p className="text-[#555] text-[0.95rem] mb-4">
              Algo deu errado.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="text-[#e2a63d] text-[0.85rem] border-b border-[#e2a63d]/30 hover:border-[#e2a63d] transition-colors"
            >
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
