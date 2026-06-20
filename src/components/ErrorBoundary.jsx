import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    console.error("ErrorBoundary caught error:", error);
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Critical Component Error:", error, errorInfo);
    console.error("Component Stack:", errorInfo.componentStack);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-black p-8">
          <div className="max-w-2xl p-8 border border-red-500/30 bg-red-500/5">
            <h2 className="text-red-500 font-bold mb-4 uppercase tracking-widest text-sm">System Recovery Active</h2>
            <p className="text-white/60 text-xs mb-8">
              A critical module encountered an error. The system is attempting to stabilize the interface.
            </p>
            <div className="p-4 bg-black/50 border border-red-500/20 mb-4 overflow-auto max-h-40">
               <pre className="text-red-400 text-[10px] font-mono whitespace-pre-wrap">
                 {this.state.error && this.state.error.toString()}
               </pre>
            </div>
            {this.state.errorInfo && (
              <div className="p-4 bg-black/50 border border-red-500/20 mb-8 overflow-auto max-h-60">
                <pre className="text-red-300 text-[9px] font-mono whitespace-pre-wrap">
                  {this.state.errorInfo.componentStack}
                </pre>
              </div>
            )}
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 border border-red-500 hover:bg-red-500 hover:text-black transition-all text-xs uppercase text-red-500"
            >
              Restart System
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
