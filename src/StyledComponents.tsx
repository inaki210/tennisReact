import styled from 'styled-components'

export {
  Fondo,
  GameContainer,
  GameTitle,
  JugadoresContainer,
  Jugador,
  ButtonWrapper,
}

const Fondo = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgb(200, 230, 240);
`
const GameContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`
const GameTitle = styled.div`
  display: flex;
  justify-content: center;
`
const JugadoresContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 2rem auto;
`
const Jugador = styled.div`
  margin: auto 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`
const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`
