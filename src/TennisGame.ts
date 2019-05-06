enum Puntuacion {
  love,
  fiveteen,
  thirty,
  forty,
  deuce,
  ventaja,
  winner,
}

interface Jugador {
  nombre: string
  puntuacion: Puntuacion
}

export class TennisGame {
  private jugador1: Jugador
  private jugador2: Jugador

  constructor(nombreJugador1: string = 'Jugador1', nombreJugador2: string) {
    this.jugador1 = { nombre: nombreJugador1, puntuacion: Puntuacion.love }
    this.jugador2 = { nombre: nombreJugador2, puntuacion: Puntuacion.love }
  }

  public wonPoint(nombreAnotador: string) {
    /* Precondiciones */
    if (nombreAnotador == null || nombreAnotador === undefined) {
      return
    }

    const anotador = this.getJugadorByNombre(nombreAnotador)
    const otroJugador = this.getElOtroJugador(anotador)

    this.wonPointJugador({ anotador, otroJugador })
  }

  private getJugadorByNombre(nombreJugador: string) {
    if (nombreJugador == this.jugador1.nombre) {
      return this.jugador1
    } else if ((nombreJugador = this.jugador2.nombre)) {
      return this.jugador2
    } else {
      throw 'Nombre de jugador no reconocido'
    }
  }

  private getElOtroJugador(jugador: Jugador) {
    return jugador === this.jugador1 ? this.jugador2 : this.jugador1
  }

  private wonPointJugador({
    anotador,
    otroJugador,
  }: {
    anotador: Jugador
    otroJugador: Jugador
  }) {
    switch (anotador.puntuacion) {
      case Puntuacion.love:
        anotador.puntuacion = Puntuacion.fiveteen
        break

      case Puntuacion.fiveteen:
        anotador.puntuacion = Puntuacion.thirty
        break

      case Puntuacion.thirty:
        anotador.puntuacion = Puntuacion.forty
        if (otroJugador.puntuacion === Puntuacion.forty) {
          anotador.puntuacion = Puntuacion.deuce
          otroJugador.puntuacion = Puntuacion.deuce
        }
        break

      case Puntuacion.forty:
        if (otroJugador.puntuacion === Puntuacion.ventaja) {
          anotador.puntuacion = Puntuacion.deuce
          otroJugador.puntuacion = Puntuacion.deuce
        } else {
          anotador.puntuacion = Puntuacion.winner
        }
        break

      case Puntuacion.deuce:
        anotador.puntuacion = Puntuacion.ventaja
        otroJugador.puntuacion = Puntuacion.forty
        break

      case Puntuacion.ventaja:
        anotador.puntuacion = Puntuacion.winner
        break
    }
  }

  public getScore(): string {
    if (this.jugador1.puntuacion === Puntuacion.winner) {
      return this.buildWinScore(this.jugador1.nombre)
    }
    if (this.jugador2.puntuacion === Puntuacion.winner) {
      return this.buildWinScore(this.jugador2.nombre)
    }

    if (this.jugador1.puntuacion === this.jugador2.puntuacion) {
      if (this.jugador1.puntuacion === Puntuacion.deuce) {
        return `Deuce`
      }
      return `${Puntuacion[this.jugador1.puntuacion]} All`
    }

    if (this.jugador1.puntuacion === Puntuacion.ventaja) {
      return this.buildVentajaScore(this.jugador1.nombre)
    }

    if (this.jugador2.puntuacion === Puntuacion.ventaja) {
      return this.buildVentajaScore(this.jugador2.nombre)
    }

    return `${Puntuacion[this.jugador1.puntuacion]} - ${
      Puntuacion[this.jugador2.puntuacion]
    }`
  }

  private buildWinScore(nombreJugador: string) {
    return `Win ${nombreJugador}!!!`
  }

  private buildVentajaScore(nombreJugador: string) {
    return `Ventaja ${nombreJugador}`
  }
}
export default TennisGame
