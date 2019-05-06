import react from 'react'
import styled from 'styled-components'

const Fondo = styled.view`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgb(200, 230, 240);
`
const ContainerGame = styled.view`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: centexport const Foo = "bar";

  import { Foo } from './DivJugadores'
  import Pepe from './DivJugadores'er;
  margin-top: 10%;
`
const Titulo = styled.view``

const htmlApp = (
  <Fondo>
    <ContainerGame>
      <div className="display-flex-row justify-content-center">
        <h1>TENNIS GAME</h1>
      </div>

      <div
        id="divJugadores"
        className="display-flex-row justify-content-space-around margin-vertical-small"
      >
        <div className="margin-horizontal-small display-flex-column align-items-center">
          <h4 id="lblPlayer1">Player1</h4>
          <input
            type="text"
            placeholder="Nombre jugador 1"
            value={'nombreJugador1'}
          />
        </div>

        <div className="margin-horizontal-small display-flex-column align-items-center">
          <h4 id="lblPlayer2">Player2</h4>
          <input
            type="text"
            placeholder="Nombre jugador 2"
            value={'nombreJugador2'}
          />
        </div>
      </div>

      <div className="display-flex-row justify-content-center">
        <button className="width-medium">Play!</button>
      </div>
    </ContainerGame>
  </Fondo>
)
