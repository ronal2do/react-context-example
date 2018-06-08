// @flow

import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import MyProvider from './MyProvider'
import ErrorBoundary from './ErrorBoundary'

ReactDOM.render(
  <MyProvider>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </MyProvider>,
  (document.getElementById('root'): any)
)
registerServiceWorker()
