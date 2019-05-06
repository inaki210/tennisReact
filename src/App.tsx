import React from 'react'
import TennisGame from './TennisGame'
import VistaInicio from './VistaInicio'
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

export default App
