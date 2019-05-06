import React from 'react'
import TennisGameOld from './TennisGameOldd'
import TennisGame from '../TennisGame'
import DivJugadores from './DivJugadoresOld'
import './estilos.scss'

interface State {
  enJuego: boolean
  cadena: string
  partidaOld: TennisGameOld
}

class App extends React.Component<{}, State> {
  state: State = {
    enJuego: false,
    cadena: '',
    partidaOld: new TennisGameOld('', ''),
  }

  //partida :Juego = new Juego(this.state.nombre1, this.state.nombre2);

  iniciarApp = () => {
    if (!this.state.enJuego) {
      // Se crea el Juego y los Jugadores con un nombre por defecto en caso de que estén vacíos.
      let nombreJugador1: string
      let nombreJugador2: string
      nombreJugador1 = this.state.partidaOld.getNombreJugador(1) //texto del DivJugadores
      nombreJugador2 = this.state.partidaOld.getNombreJugador(2)

      this.setState({
        partidaOld: new TennisGameOld(nombreJugador1, nombreJugador2),
      })
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
            {this.state.partidaOld && (
              <DivJugadores
                status={this.state.enJuego}
                game={this.state.partidaOld}
                numeroJugador={1}
                onPrint={this.setResultados}
                onChange={this.setNombre1}
              />
            )}

            {this.state.enJuego && (
              <DivResultados resultados={this.state.cadena} />
            )}

            {this.state.partidaOld && (
              <DivJugadores
                status={this.state.enJuego}
                game={this.state.partidaOld}
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
    this.state.partidaOld.setNombreJugador(1, nombre)
    this.setState({ partidaOld: this.state.partidaOld })
  }

  setNombre2 = (nombre: string) => {
    this.state.partidaOld.setNombreJugador(2, nombre)
    this.setState({ partidaOld: this.state.partidaOld })
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
