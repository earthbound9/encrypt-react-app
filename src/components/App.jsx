import React from 'react'
import styled from 'styled-components'

import Header from './Header.jsx'
import EncryptionInput from './EncryptionInput.jsx'

const Wrapper = styled.div`
  background: #333;
  color: #f0f0f0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const App = () => (
  <Wrapper>
    <Header />
    <EncryptionInput />
  </Wrapper>
)

export default App
