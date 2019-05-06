import Jugador from './Jugador'
/*
 * Posée dos clases Jugador
 * Controla cuando los dos jugadores tengan puntuación igual.
 */
export class Juego2 {
  private jugadores: Jugador[] = new Array(2)
  public ganador: Jugador | null

  constructor(nombre1: string, nombre2: string) {
    if (nombre1 === null || nombre1 === '') {
      nombre1 = 'Jugador1'
    }
    if (nombre2 === null || nombre2 === '') {
      nombre2 = 'Jugador2'
    }

    this.jugadores[0] = new Jugador(nombre1)
    this.jugadores[1] = new Jugador(nombre2)
    this.ganador = null
  }

  public getNombreJugador(numJugador: number): string {
    if (numJugador == 1) {
      return this.jugadores[0].getNombre()
    }
    return this.jugadores[1].getNombre()
  }

  public setNombreJugador(numJugador: number, nuevoNombre: string) {
    this.jugadores[numJugador - 1].setNombre(nuevoNombre)
  }

  public getJugador(numJugador: number): Jugador {
    return this.jugadores[numJugador - 1]
  }

  public wonPoint(PJ: Jugador) {
    PJ.anota()
  }

  public getScore(): string {
    let j1: Jugador = this.jugadores[0],
      j2: Jugador = this.jugadores[1],
      punt1: number = j1.getPuntuacion(),
      punt2: number = j2.getPuntuacion(),
      punt: string

    // Iguales | Ventaja
    if (punt1 >= 40 && punt2 >= 40) {
      if (punt1 == 60) {
        this.ganador = j1
      } else if (punt2 == 60) {
        this.ganador = j2
      } else if (punt1 == 50 && punt2 == 40) {
        return 'Ventaja ' + j1.getNombre()
      } else if (punt1 == 40 && punt2 == 50) {
        return 'Ventaja ' + j2.getNombre()
      } else {
        if (punt1 == 50 && punt2 == 50) {
          j1.setPuntuacion(40)
          j2.setPuntuacion(40)
        }
        return 'Deuce'
      }
    } else if (punt1 == 50) {
      this.ganador = j1
    } else if (punt2 == 50) {
      this.ganador = j2
    }

    // Ganador y salir
    if (this.ganador != undefined) {
      return 'Win ' + this.ganador.getNombre() + '!!!'
    }

    // puntos Jugador1
    switch (punt1) {
      case 0:
        punt = 'love'
        break
      case 15:
        punt = 'fiveteen'
        break
      case 30:
        punt = 'thirty'
        break
      case 40:
        punt = 'forty'
        break
      default:
        punt1 = 40
        punt = 'forty'
        break
    }

    // Iguales (All ...)
    if (punt1 == punt2) {
      return punt + ' All'
    }

    // puntos Jugador2
    switch (punt2) {
      case 0:
        punt += ' - love'
        break
      case 15:
        punt += ' - fiveteen'
        break
      case 30:
        punt += ' - thirty'
        break
      case 40:
        punt += ' - forty'
        break
      default:
        break
    }

    return punt
  }
}
export default Juego2
