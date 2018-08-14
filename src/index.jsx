import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { injectGlobal } from 'styled-components'

injectGlobal`
* {
  margin: 0;
  padding: 0;
}
`

ReactDOM.render(<App />, document.getElementById('app'))
