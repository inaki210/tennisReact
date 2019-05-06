import React from 'react'
import { JugadoresContainer, Jugador, ButtonWrapper } from '../StyledComponents'

interface Props {
  historicoMarcador: string[]
  nombreJugador1: string
  nombreJugador2: string
  onNewGame: () => void
  onJugador1WonPoint: () => void
  onJugador2WonPoint: () => void
}

class VistaEnJuego extends React.Component<Props> {
  render() {
    const {
      nombreJugador1,
      nombreJugador2,
      onNewGame,
      onJugador1WonPoint,
      onJugador2WonPoint,
    } = this.props

    return (
      <>
        <JugadoresContainer>
          <Jugador>
            <h4>{nombreJugador1}</h4>
            <button onClick={onJugador1WonPoint}>Won Point</button>
          </Jugador>

          <Marcador historicoMarcador={this.props.historicoMarcador} />

          <Jugador>
            <h4>{nombreJugador2}</h4>
            <button onClick={onJugador2WonPoint}>Won Point</button>
          </Jugador>
        </JugadoresContainer>

        <ButtonWrapper>
          <button onClick={onNewGame}>New Game</button>
        </ButtonWrapper>
      </>
    )
  }
}

interface MarcadorProps {
  historicoMarcador: string[]
}
const Marcador: React.SFC<MarcadorProps> = ({ historicoMarcador }) => (
  <div
    className="display-flex-column align-items-center"
    style={{ minWidth: '300px' }}
  >
    {historicoMarcador.length > 0 && (
      <ul>
        {historicoMarcador.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
)

export default VistaEnJuego
