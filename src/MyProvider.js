// @flow
import React, { Component } from 'react'

export const MyContext = React.createContext()

type State = {
  name: string,
  value: number,
  status: boolean,
  data: Array<Object>,
  requested: boolean,
}

export default class MyProvider extends Component<*, State> {
  state = {
    name: 'Xulapa',
    value: 2,
    status: false,
    data: [],
    requested: false
  }

  update = () =>
    this.setState((prevState, props) => ({
      value: prevState.value + 1
    }))

  turn = () =>
    this.setState(prevState => ({
      status: !prevState.status
    }))

  request = async () => {
    if (!this.state.requested) {
      console.log('request')
      await fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.setState({ data, requested: true }))
      console.log('this.state.data', this.state.data)
    }
  }

  render () {
    return (
      <MyContext.Provider
        value={{
          state: this.state,
          update: this.update,
          request: this.request,
          turn: this.turn
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}
