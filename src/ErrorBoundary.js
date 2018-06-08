// @flow
import React, { Component } from 'react'

type State = {
  hasError: boolean,
}
type Props = {
  children: any,
}

export default class ErrorBoundary extends Component<Props, State> {
  state = { hasError: false }

  componentDidCatch (error: string, info: any) {
    this.setState({ hasError: true })
    // logErrorToMyService(error, info)
  }

  render () {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>
    }
    return this.props.children
  }
}
