import React from 'react'
import {
  Fondo,
  GameContainer,
  GameTitle,
  JugadoresContainer,
  Jugador,
  ButtonWrapper,
} from '../StyledComponents'

interface VistaInicioProps {
  onChangeNombreJugador1: (event: React.ChangeEvent<HTMLInputElement>) => void
  onChangeNombreJugador2: (event: React.ChangeEvent<HTMLInputElement>) => void
  onIniciarPartida: () => void
  nombreJugador1: string
  nombreJugador2: string
}

const VistaInicio: React.SFC<VistaInicioProps> = ({
  onChangeNombreJugador1,
  onChangeNombreJugador2,
  onIniciarPartida,
  nombreJugador1,
  nombreJugador2,
}) => (
  <Fondo>
    <GameContainer>
      <GameTitle>
        <h1>TENNIS GAME</h1>
      </GameTitle>

      <JugadoresContainer>
        <Jugador>
          <h4>Player1</h4>
          <input
            type="text"
            placeholder="Nombre jugador 1"
            value={nombreJugador1}
            onChange={onChangeNombreJugador1}
          />
        </Jugador>

        <Jugador>
          <h4>Player2</h4>
          <input
            type="text"
            placeholder="Nombre jugador 2"
            value={nombreJugador2}
            onChange={onChangeNombreJugador2}
          />
        </Jugador>
      </JugadoresContainer>

      <ButtonWrapper>
        <button onClick={onIniciarPartida}>Play!</button>
      </ButtonWrapper>
    </GameContainer>
  </Fondo>
)

export default VistaInicio
