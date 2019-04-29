
enum Puntuacion {
  love,
  fiveteen,
  thirty,
  forty,
  deuce,
  ventaja,
  winner
}

interface Jugador {
  nombre: string;
  puntuacion: Puntuacion;
}

export class TennisGame {
  private jugador1: Jugador;
  private jugador2: Jugador;
/*
  private nombreJugador1: string;
  private nombreJugador2: string;
  private puntuacionJugador1: Puntuacion;
  private puntuacionJugador2: Puntuacion;
*/
  constructor(nombreJugador1: string, nombreJugador2: string) {
/** 
    this.nombreJugador1 = nombreJugador1;
    this.nombreJugador2 = nombreJugador2;
    this.puntuacionJugador1 = Puntuacion.love;
    this.puntuacionJugador2 = Puntuacion.love;
*/
    this.jugador1 = {nombre: nombreJugador1, puntuacion: Puntuacion.love};
    this.jugador2 = {nombre: nombreJugador2, puntuacion: Puntuacion.love}

  }

  public getNombreJugador1() {
    return this.jugador1.nombre;
  }

  public getNombreJugador2() {
    return this.jugador2.nombre;
  }

  public wonPoint(nombreAnotador: string) {
    /* Precondiciones */
    if (nombreAnotador == null || nombreAnotador === undefined) {
      return;
    }

    if (nombreAnotador === this.jugador1.nombre) {
      
      const {
        puntuacionAnotador,
        puntuacionOtroJugador
      } = this.wonPointJugador({
        puntuacionAnotador: this.jugador1.puntuacion,
        puntuacionOtroJugador: this.jugador2.puntuacion
      });
/*
      this.puntuacionJugador1 = puntuacionAnotador;
      this.puntuacionJugador2 = puntuacionOtroJugador;
*/
      /* Actualización  */
      this.jugador1.puntuacion = puntuacionAnotador;
      this.jugador2.puntuacion = puntuacionOtroJugador;

    } else if (nombreAnotador === this.jugador2.nombre) {
      const {
        puntuacionAnotador,
        puntuacionOtroJugador
      } = this.wonPointJugador({
        puntuacionAnotador: this.jugador2.puntuacion,
        puntuacionOtroJugador: this.jugador1.puntuacion
      });
/*
      this.puntuacionJugador2 = puntuacionAnotador;
      this.puntuacionJugador1 = puntuacionOtroJugador;
*/
      this.jugador2.puntuacion = puntuacionAnotador;
      this.jugador1.puntuacion = puntuacionOtroJugador;
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
    /*
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
    */
    if (this.jugador1.puntuacion === Puntuacion.winner) {
      return `Win ${this.jugador1.nombre}!!!`;
    }
    if (this.jugador2.puntuacion === Puntuacion.winner) {
      return `Win ${this.jugador2.nombre}!!!`;
    }

    if (this.jugador1.puntuacion === this.jugador2.puntuacion) {
      if (this.jugador1.puntuacion === Puntuacion.deuce) {
        return `Deuce`;
      }
      return `${Puntuacion[this.jugador1.puntuacion]} All`;
    }
/*
    if (this.jugador1.puntuacion === Puntuacion.ventaja) {
      return `Ventaja ${this.jugador1.nombre}`;
    }

    if (this.jugador2.puntuacion === Puntuacion.ventaja) {
      return `Ventaja ${this.jugador2.nombre}`;
    }
*/
    if (this.jugador1.puntuacion === Puntuacion.ventaja) {
      return this.ventaja(this.jugador1.nombre);
    }

    if (this.jugador2.puntuacion === Puntuacion.ventaja) {
      return this.ventaja(this.jugador2.nombre);
    }

    return `${Puntuacion[this.jugador1.puntuacion]} - ${
      Puntuacion[this.jugador2.puntuacion]}`;
  }


  private ventaja(nombre:string):string {
    return `Ventaja ${nombre}`;
  }


}
export default TennisGame;
