import React, {Component, PropsWithChildren, ErrorInfo} from 'react'
import {ScrollView, Text} from 'react-native'

export enum ErrorMode {
  ALWAYS,
  DEV,
  PROD,
  NEVER,
}

interface Props {
  errorMode: ErrorMode
}

interface State {
  error?: Error
  errorInfo?: ErrorInfo
}

class ErrorBoundary extends Component<PropsWithChildren<Props>, State> {
  state: State = {}

  // If an error in a child is encountered, this will run
  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // Catch errors in any components below and re-render with error message
    this.setState({
      error,
      errorInfo,
    })

    // You can also log error messages to an error reporting service here
    // This is a great place to put BugSnag, Sentry, Honeybadger, etc:
    // reportErrorToCrashReportingService(error)
  }

  // Reset the error back to null
  resetError = () => {
    this.setState({})
  }

  // To avoid unnecessary re-renders
  shouldComponentUpdate(
    nextProps: Readonly<any>,
    nextState: Readonly<any>,
  ): boolean {
    return nextState.error !== nextProps.error
  }

  // Only enable if we're catching errors in the right environment
  isEnabled(): boolean {
    return (
      this.props.errorMode === ErrorMode.ALWAYS ||
      (this.props.errorMode === ErrorMode.DEV && __DEV__) ||
      (this.props.errorMode === ErrorMode.PROD && !__DEV__)
    )
  }

  // Render an error UI if there's an error; otherwise, render children
  render() {
    return this.isEnabled() && this.state.error ? (
      <ScrollView>
        <Text>{`${this.state.error}`}</Text>
        {this.state.errorInfo && (
          <Text>{`${this.state.errorInfo.componentStack}`}</Text>
        )}
      </ScrollView>
    ) : (
      this.props.children
    )
  }
}

export default ErrorBoundary
