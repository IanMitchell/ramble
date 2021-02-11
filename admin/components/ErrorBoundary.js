import { Component } from "react";

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
    };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    console.log(error);
    console.error(errorInfo);
  }

  render() {
    const { error } = this.state;
    const { children, fallback } = this.props;

    if (error) {
      return fallback(error);
    }

    return children;
  }
}
