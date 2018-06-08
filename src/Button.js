import React from 'react'
import { MyContext } from './MyProvider'

type Context = {
  turn: () => void,
}

export default (context: Context): ReactElement => (
  <MyContext.Consumer>
    {context => <button onClick={context.turn}>show</button>}
  </MyContext.Consumer>
)
