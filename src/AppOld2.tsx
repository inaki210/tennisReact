import React from 'react'
import TennisGame from './TennisGame'
import DivJugadores from './DivJugadores'
import './estilos.scss'

interface State {
  enJuego: boolean
  cadena: string
  partida: TennisGame
  nombreJugador1: string
  nombreJugador2: string
  //hayGanador: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    enJuego: false,
    cadena: '',
    partida: new TennisGame('', ''),
    nombreJugador1: '',
    nombreJugador2: '',
    //hayGanador: false
  }

  iniciarApp = () => {
    if (!this.state.enJuego) {
      // Se crea el Juego y los Jugadores con un nombre por defecto en caso de que estén vacíos.
      const nombre1: string = '' //this.state.partida.getNombreJugador1();
      const nombre2: string = '' //this.state.partida.getNombreJugador2();

      this.setState({ nombreJugador1: nombre1 })
      this.setState({ nombreJugador2: nombre2 })
      this.setState({ partida: new TennisGame(nombre1, nombre2) })
      this.resetResultados()
    }

    this.setState({ enJuego: !this.state.enJuego })
  }

  render() {
    return (
      <div className="vh-100 display-flex-row justify-content-center color-fondo--azul-claro">
        <div className="display-flex-column justify-content-center align-items-center margin-top-10-percent">
          <div className="display-flex-row justify-content-center">
            <h1>TENNIS GAME</h1>
          </div>
          <div
            id="divJugadores"
            className="display-flex-row justify-content-space-around margin-vertical-small"
          >
            {this.state.partida && (
              <DivJugadores
                isPlaying={this.state.enJuego}
                game={this.state.partida}
                //hayGanador={this.state.hayGanador}
                nombreJugador={this.state.nombreJugador1}
                numeroJugador={1}
                onPrint={this.setResultados}
                onChange={this.setNombre1}
              />
            )}

            {this.state.enJuego && (
              <DivResultados resultados={this.state.cadena} />
            )}

            {this.state.partida && (
              <DivJugadores
                isPlaying={this.state.enJuego}
                game={this.state.partida}
                //hayGanador={this.state.hayGanador}
                nombreJugador={this.state.nombreJugador2}
                numeroJugador={2}
                onPrint={this.setResultados}
                onChange={this.setNombre2}
              />
            )}
          </div>
          <div className="display-flex-row justify-content-center">
            <button className="width-medium" onClick={this.iniciarApp}>
              {this.state.enJuego ? 'New Game' : 'Play!'}
            </button>
          </div>
        </div>
      </div>
    )
  }

  setResultados = (score: string) => {
    let str: string = this.state.cadena
    this.setState({ cadena: str + '<p>' + score + '</p>' })
  }

  resetResultados = () => {
    this.setState({ cadena: '<p>love-love</p>' })
  }

  setNombre1 = (nombre: string) => {
    this.setState({
      partida: new TennisGame(nombre, this.state.nombreJugador2),
    })
  }

  setNombre2 = (nombre: string) => {
    this.setState({
      partida: new TennisGame(this.state.nombreJugador1, nombre),
    })
  }
}

interface Resultados {
  resultados: string
}
const DivResultados: React.SFC<Resultados> = ({ resultados }) => (
  <div
    id="divResultados"
    className="display-flex-column align-items-center"
    dangerouslySetInnerHTML={{ __html: resultados }}
  />
)

export default App
