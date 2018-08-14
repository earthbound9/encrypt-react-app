import React, { Component } from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 0 auto;
  width: 20%;

  form {
    display: flex;
    flex-direction: column;
  }

  span {
    display: flex;
    border: 2px solid #3283ff;
    overflow: hidden;
    border-radius: 5px;
  }

  i {
    margin: auto;
    padding: 10px;
    color: #c8c8cd;
    background-color: #339acc;
    font-size: 1.5rem;
  }

  a {
    text-decoration: none;
    color: green;
  }

  input {
    color: #333;
    background: #f0f0f0;
    width: 400px;
    padding: 2px;
    text-indent: 10px;
    font-size: 1.2rem;
    border: none;
  }

  button {
    margin: 15px auto;
    padding: 1rem 2rem;
    border-color: #339acc;
    color: #f0f0f0;
    border-radius: 3px;
    background-color: #339acc;

    &:hover {
      background-color: #11faf3;
      color: #333;
    }
  }

  h1 {
    text-align: center;
    padding: 2rem;
  }
`

class EncryptionInput extends Component {
  state = {
    lock: true,
    inputText: '',
    encryptStart: ' abcdefghijklmnopqrstuvwxyz',
    encryptEnd: ' zyxwvutsrqponmlkjihgfedcba',
    encrypted: ''
  }

  handleLockType = () => {
    this.setState({
      lock: !this.state.lock
    })
  }

  handleInputValue = e => {
    this.setState({
      inputText: e.target.value
    })
  }

  handleEncryption = e => {
    e.preventDefault()
    const encrypt = this.state.encryptEnd.split('')
    const decrypt = this.state.encryptStart.split('')
    const textToEncrypt = this.state.inputText
    let indexer = []
    let encryptedText = []

    if (this.state.lock) {
      textToEncrypt.split('').forEach(letter => {
        decrypt.findIndex((decLetter, index) => {
          if (decLetter === letter) {
            indexer.push(index)
          }
        })
      })

      indexer.forEach(i => {
        encryptedText.push(encrypt[i])
      })
    } else {
      textToEncrypt.split('').forEach(letter => {
        encrypt.findIndex((decLetter, index) => {
          if (decLetter === letter) {
            indexer.push(index)
          }
        })
      })

      indexer.forEach(i => {
        encryptedText.push(decrypt[i])
      })
    }

    this.setState({
      encrypted: encryptedText.join('')
    })
  }

  render () {
    return (
      <div>
        <Wrapper>
          <form>
            <span>
              <a href='#' onClick={this.handleLockType}>
                <i
                  className={this.state.lock ? 'fa fa-lock' : 'fa fa-unlock'}
                />
              </a>
              <input type='text' onChange={this.handleInputValue} />
            </span>

            <button onClick={this.handleEncryption}>
              {this.state.lock ? 'Encrypt' : 'Decrypt'}
            </button>
          </form>
        </Wrapper>
        {this.state.encrypted.length > 1 && (
          <h1 style={{ textAlign: 'center', padding: '2rem' }}>
            {this.state.encrypted}
          </h1>
        )}
      </div>
    )
  }
}

export default EncryptionInput
