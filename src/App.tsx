import React from 'react'
import TennisGame from './TennisGame'
import VistaInicio from './Vistas/VistaInicio'
import VistaEnJuego from './Vistas/VistaEnJuego'
import GameLayout from './components/GameLayout'

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

  jugadorWonPoint = (nombreJugador: string) => {
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

    return (
      <GameLayout>
        {enJuego ? (
          <VistaEnJuego
            historicoMarcador={historicoMarcador}
            nombreJugador1={nombreJugador1}
            nombreJugador2={nombreJugador2}
            onNewGame={this.handleNewGame}
            onJugador1WonPoint={() => this.jugadorWonPoint(nombreJugador1)}
            onJugador2WonPoint={() => this.jugadorWonPoint(nombreJugador2)}
          />
        ) : (
          <VistaInicio
            onChangeNombreJugador1={this.handleChangeNombreJugador1}
            onChangeNombreJugador2={this.handleChangeNombreJugador2}
            nombreJugador1={nombreJugador1}
            nombreJugador2={nombreJugador2}
            onIniciarPartida={this.iniciarPartida}
          />
        )}
      </GameLayout>
    )
  }
}

export default App
