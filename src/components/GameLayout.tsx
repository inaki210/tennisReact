import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { GameContainer, GameTitle } from '../StyledComponents'

const GlobalStyles = createGlobalStyle`
  body {
    background-color: rgb(200, 230, 240);
  }
`

const GameLayout: React.FunctionComponent = ({ children }) => {
  return (
    <>
      <GlobalStyles />
      <GameContainer>
        <GameTitle>
          <h1>TENNIS GAME</h1>
        </GameTitle>
        {children}
      </GameContainer>
    </>
  )
}

export default GameLayout
