import styled from 'styled-components'

export { GameContainer, GameTitle, JugadoresContainer, Jugador, ButtonWrapper }

const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
`
const FlexColumnCenter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const GameContainer = styled(FlexColumnCenter)`
  justify-content: center;
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
const Jugador = styled(FlexColumnCenter)`
  margin: auto 2rem;
`
const ButtonWrapper = styled(FlexCenter)``
