//type Puntuacion = 15 | 30 | 40 | 'ventaja' | ganador?

enum Puntuacion {
  love,
  fiveteen,
  thirty,
  forty,
  deuce,
  ventaja,
  winner
}
/*
let puntuacion: Puntuacion
puntuacion = Puntuacion.love;
*/

/*
 * Posée dos clases Jugador
 * Controla cuando los dos jugadores tengan puntuación igual.
 */
export class TennisGame {
  private nombreJugador1: string;
  private nombreJugador2: string;
  private puntuacionJugador1: Puntuacion;
  private puntuacionJugador2: Puntuacion;

  constructor(nombreJugador1: string, nombreJugador2: string) {
    this.nombreJugador1 = nombreJugador1;
    this.nombreJugador2 = nombreJugador2;
    this.puntuacionJugador1 = Puntuacion.love;
    this.puntuacionJugador2 = Puntuacion.love;
  }

  public getNombreJugador1() {
    return this.nombreJugador1;
  }
  public getNombreJugador2() {
    return this.nombreJugador2;
  }

  public wonPoint(nombreAnotador: string) {
    /* Precondiciones */
    if (nombreAnotador == null || nombreAnotador === undefined) {
      return;
    }

    if (nombreAnotador === this.nombreJugador1) {
      const {
        puntuacionAnotador,
        puntuacionOtroJugador
      } = this.wonPointJugador({
        puntuacionAnotador: this.puntuacionJugador1,
        puntuacionOtroJugador: this.puntuacionJugador2
      });

      this.puntuacionJugador1 = puntuacionAnotador;
      this.puntuacionJugador2 = puntuacionOtroJugador;
      
    } else if (nombreAnotador === this.nombreJugador2) {
      const {
        puntuacionAnotador,
        puntuacionOtroJugador
      } = this.wonPointJugador({
        puntuacionAnotador: this.puntuacionJugador2,
        puntuacionOtroJugador: this.puntuacionJugador1
      });

      this.puntuacionJugador2 = puntuacionAnotador;
      this.puntuacionJugador1 = puntuacionOtroJugador;
    }
  }

  private wonPointJugador({
    puntuacionAnotador,
    puntuacionOtroJugador
  }: {
    puntuacionAnotador: Puntuacion;
    puntuacionOtroJugador: Puntuacion;
  }) {
    switch (puntuacionAnotador) {
      case Puntuacion.love:
        puntuacionAnotador = Puntuacion.fiveteen;
        break;

      case Puntuacion.fiveteen:
        puntuacionAnotador = Puntuacion.thirty;
        break;

      case Puntuacion.thirty:
        puntuacionAnotador = Puntuacion.forty;
        if (puntuacionOtroJugador === Puntuacion.forty) {
          puntuacionAnotador = Puntuacion.deuce;
          puntuacionOtroJugador = Puntuacion.deuce;
        }
        break;

      case Puntuacion.forty:
        if (puntuacionOtroJugador === Puntuacion.ventaja) {
          puntuacionAnotador = Puntuacion.deuce;
          puntuacionOtroJugador = Puntuacion.deuce;
        } else {
          puntuacionAnotador = Puntuacion.winner;
        }
        break;

      case Puntuacion.deuce:
        puntuacionAnotador = Puntuacion.ventaja;
        puntuacionOtroJugador = Puntuacion.forty;
        break;

      case Puntuacion.ventaja:
        puntuacionAnotador = Puntuacion.winner;
        break;
    }
    return { puntuacionAnotador, puntuacionOtroJugador };
  }

  public getScore(): string {
    if (this.puntuacionJugador1 === Puntuacion.winner) {
      return `Win ${this.nombreJugador1}!!!`;
    }
    if (this.puntuacionJugador2 === Puntuacion.winner) {
      return `Win ${this.nombreJugador2}!!!`;
    }

    if (this.puntuacionJugador1 === this.puntuacionJugador2) {
      if (this.puntuacionJugador1 === Puntuacion.deuce) {
        return `Deuce`;
      }
      return `${Puntuacion[this.puntuacionJugador1]} All`;
    }

    if (this.puntuacionJugador1 === Puntuacion.ventaja) {
      return `Ventaja ${this.nombreJugador1}`;
    }

    if (this.puntuacionJugador2 === Puntuacion.ventaja) {
      return `Ventaja ${this.nombreJugador2}`;
    }

    return `${Puntuacion[this.puntuacionJugador1]} - ${
      Puntuacion[this.puntuacionJugador2]
    }`;
  }
}
export default TennisGame;
