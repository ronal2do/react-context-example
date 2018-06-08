// @flow
import React, { Component } from 'react'
import { MyContext } from './MyProvider'

type Props = {
  state: State,
  update: () => void,
  request: () => void,
}

type State = {
  value: number,
  name: string,
  data: Array<Data>,
}

type Data = {
  body: string,
  id: number,
  title: string,
  userId: number,
}

class Todos extends Component<Props> {
  componentDidMount () {
    this.props.request()
  }

  render () {
    const { data, value, name } = this.props.state
    return (
      <React.Fragment>
        <p>{name}</p>
        <p onClick={() => this.props.update()}>{value}</p>
        {data.length < 1
          ? <p>Loading...</p>
          : <ul>
            {data.map(post => <li key={post.id}>{post.title}</li>)}
          </ul>}
      </React.Fragment>
    )
  }
}

export default (context: Object) => (
  <MyContext.Consumer>
    {context => (context.state.status ? <Todos {...context} /> : null)}
  </MyContext.Consumer>
)
