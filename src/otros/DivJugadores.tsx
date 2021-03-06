import React from 'react'
import TennisGame from '../TennisGame'
import './estilos.scss'

interface Props {
  isPlaying: boolean
  game: TennisGame
  //hayGanador: boolean;
  nombreJugador: string
  numeroJugador: number
  onPrint: (cadena: string) => void
  onChange: (nombre: string) => void
}

class DivJugadores extends React.Component<Props> {
  /*
    resultadoCadena :string = '';
    state = {
        nombreJugador1: this.props.game.getNombreJugador1(),
        nombreJugador2: this.props.game.getNombreJugador2()
    };

    getNombre = (numeroJugador:number) => {
        if (numeroJugador === 1) {
            return this.state.nombreJugador1;
        }
        else if (numeroJugador === 2) {
            return this.state.nombreJugador2;
        }
        return 'Anon';
    }*/

  state = {
    ganador: false,
  }

  anotarPunto = (nombreJugador: string) => {
    this.props.game.wonPoint(nombreJugador)
  }

  imprimirResultado() {
    if (this.props.isPlaying) {
      const puntuacion = this.props.game.getScore()
      this.props.onPrint(puntuacion)
      // CUANDO se haya impreso una puntuación con ganador -> se desabilitan los botones.
      const pos = puntuacion.indexOf(`Win`)
      if (pos === 0) {
        this.state.ganador = true
      }
    }
  }

  render() {
    const { isPlaying: status, numeroJugador /*, hayGanador*/ } = this.props
    const ganador = this.state.ganador

    return (
      <div className="margin-horizontal-small display-flex-column align-items-center">
        <h4 id="lblPlayer">
          {status ? this.props.nombreJugador : 'Player' + numeroJugador}
        </h4>
        {status ? (
          <button
            onClick={() => {
              this.props.game.wonPoint(this.props.nombreJugador),
                this.imprimirResultado()
            }}
            disabled={!!ganador}
          >
            Won point
          </button>
        ) : (
          <TxtJugador
            nombreJugador={this.props.nombreJugador}
            numero={numeroJugador}
            onChange={this.props.onChange}
          />
        )}
      </div>
    )
  }
}

interface Nombre {
  nombreJugador: string
  numero: number
  onChange: (str: string) => void
}
const TxtJugador: React.SFC<Nombre> = ({ nombreJugador, numero, onChange }) => (
  <input
    type="text"
    name={'txtJugadr' + numero}
    value={nombreJugador}
    placeholder={'Jugador' + numero}
    onChange={event => onChange(event.target.value)}
  />
)

export default DivJugadores
