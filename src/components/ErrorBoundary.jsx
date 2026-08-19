import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Component error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black p-8">
          <div className="max-w-2xl p-8 border border-white/10 bg-white/[0.02]">
            <h2 className="text-white font-bold mb-4">Algo deu errado</h2>
            <p className="text-white/60 text-sm mb-6">
              Ocorreu um erro inesperado. Tente recarregar a página.
            </p>
            <pre className="text-red-400 text-xs font-mono whitespace-pre-wrap">
              {this.state.error?.toString()}
            </pre>
            <button
              onClick={() => window.location.reload()}
              className="mt-6 px-4 py-2 border border-white/20 text-white text-sm hover:bg-white/5 transition-colors"
            >
              Recarregar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
