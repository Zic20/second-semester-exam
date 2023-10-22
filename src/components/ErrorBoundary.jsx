import React from "react";
import { Outlet } from "react-router-dom";
import ErrorBoundaryPage from "../pages/ErrorBoundaryPage";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ hasError: true });
  }

  render() {
    if (this.state.hasError) {
      return <ErrorBoundaryPage />;
    }

    return <Outlet />;
  }
}

export default ErrorBoundary;
