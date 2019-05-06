import React from 'react'
import styled from 'styled-components'
import TennisGame from './TennisGame'
import './estilos.scss'
import VistaEnJuego from './VistaEnJuego'

/* Styled components */
const Fondo = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  background-color: rgb(200, 230, 240);
`
const ContainerGame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 10%;
`
const Titulo = styled.div`
  display: flex;
  justify-content: center;
`
const ContainerJugadores = styled.div`
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
const BotonSubmit = styled.div`
  display: flex;
  justify-content: center;
`

let tennisGame: TennisGame
interface State {
  enJuego: boolean
  historicoMarcador: string[]
  nombreJugador1: string
  nombreJugador2: string
}

class App extends React.Component<{}, State> {
  state: State = {
    enJuego: false,
    nombreJugador1: '',
    nombreJugador2: '',
    historicoMarcador: [],
  }

  iniciarPartida = () => {
    const { nombreJugador1, nombreJugador2 } = this.state

    tennisGame = new TennisGame(nombreJugador1, nombreJugador2)

    this.setState({ enJuego: true, historicoMarcador: [] })
  }

  handleNewGame = () => {
    this.setState({ enJuego: false, nombreJugador1: '', nombreJugador2: '' })
  }

  handleChangeNombreJugador1 = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ nombreJugador1: event.target.value })
  }

  handleChangeNombreJugador2 = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ nombreJugador2: event.target.value })
  }

  handleJugador1WonPoint = () => {
    tennisGame.wonPoint(this.state.nombreJugador1)
    const currentScore = tennisGame.getScore()
    this.setState(oldState => ({
      historicoMarcador: [...oldState.historicoMarcador, currentScore],
    }))
  }

  handleJugador2WonPoint = () => {
    tennisGame.wonPoint(this.state.nombreJugador2)
    const currentScore = tennisGame.getScore()
    this.setState(oldState => ({
      historicoMarcador: [...oldState.historicoMarcador, currentScore],
    }))
  }

  handleJugadorWonPoint = (nombreJugador: string) => {
    tennisGame.wonPoint(nombreJugador)
    const currentScore = tennisGame.getScore()
    this.setState(oldState => ({
      historicoMarcador: [...oldState.historicoMarcador, currentScore],
    }))
  }

  render() {
    const {
      enJuego,
      nombreJugador1,
      nombreJugador2,
      historicoMarcador,
    } = this.state

    if (enJuego) {
      return (
        <VistaEnJuego
          historicoMarcador={historicoMarcador}
          nombreJugador1={nombreJugador1}
          nombreJugador2={nombreJugador2}
          onNewGame={this.handleNewGame}
          onJugador1WonPoint={this.handleJugador1WonPoint}
          onJugador2WonPoint={this.handleJugador2WonPoint}
        />
      )
    }
    return (
      <VistaInicio
        onChangeNombreJugador1={this.handleChangeNombreJugador1}
        onChangeNombreJugador2={this.handleChangeNombreJugador2}
        nombreJugador1={nombreJugador1}
        nombreJugador2={nombreJugador2}
        onIniciarPartida={this.iniciarPartida}
      />
    )
  }
}

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
    <ContainerGame>
      <Titulo>
        <h1>TENNIS GAME</h1>
      </Titulo>

      <ContainerJugadores>
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
      </ContainerJugadores>

      <BotonSubmit>
        <button onClick={onIniciarPartida}>Play!</button>
      </BotonSubmit>
    </ContainerGame>
  </Fondo>
)

export default App
