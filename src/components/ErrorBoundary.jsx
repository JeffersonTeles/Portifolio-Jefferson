import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Critical Component Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="fixed inset-0 bg-black flex items-center justify-center p-8 text-center">
          <div className="font-mono text-dark-accent max-w-lg">
            <h1 className="text-2xl mb-4 uppercase tracking-[0.2em]">System Recovery Active</h1>
            <p className="text-sm opacity-60 mb-8">
              A critical module encountered an error. The system is attempting to stabilize the interface.
            </p>
            <button 
              onClick={() => window.location.reload()}
              className="px-6 py-2 border border-dark-accent hover:bg-dark-accent hover:text-black transition-all text-xs uppercase"
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
