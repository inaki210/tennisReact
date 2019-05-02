import React, { InputHTMLAttributes } from 'react'
import TennisGame from './TennisGame'
import './estilos.scss'
import VistaEnJuego from './VistaEnJuego'

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
  <div className="vh-100 display-flex-row justify-content-center color-fondo--azul-claro">
    <div className="display-flex-column justify-content-center align-items-center margin-top-10-percent">
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
            value={nombreJugador1}
            onChange={onChangeNombreJugador1}
          />
        </div>

        <div className="margin-horizontal-small display-flex-column align-items-center">
          <h4 id="lblPlayer2">Player2</h4>
          <input
            type="text"
            placeholder="Nombre jugador 2"
            value={nombreJugador2}
            onChange={onChangeNombreJugador2}
          />
        </div>
      </div>

      <div className="display-flex-row justify-content-center">
        <button className="width-medium" onClick={onIniciarPartida}>
          Play!
        </button>
      </div>
    </div>
  </div>
)

export default App
