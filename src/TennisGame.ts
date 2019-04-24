
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

    private nombreJugador1:string;
    private nombreJugador2:string;
    private puntuacionJugador1:Puntuacion;
    private puntuacionJugador2:Puntuacion;
    public ganador:string | null;

    
	constructor(nombreJugador1:string, nombreJugador2:string) {
        this.nombreJugador1 = nombreJugador1;
        this.nombreJugador2 = nombreJugador2;
        this.puntuacionJugador1 = Puntuacion.love;
        this.puntuacionJugador2 = Puntuacion.love;
        this.ganador = null;
    }
    
    public wonPoint(nombreJugador:string) {
        if (this.ganador === null) {

            if (nombreJugador === this.nombreJugador1) {

                switch (this.puntuacionJugador1) {
                    case Puntuacion.love:
                        this.puntuacionJugador1 = Puntuacion.fiveteen;
                        break;
                    case Puntuacion.fiveteen:
                        this.puntuacionJugador1 = Puntuacion.thirty;
                        break;
                    case Puntuacion.thirty:
                        this.puntuacionJugador1 = Puntuacion.forty;
                        if (this.puntuacionJugador1 === Puntuacion.forty && this.puntuacionJugador2 === Puntuacion.forty) {
                            this.puntuacionJugador1 = Puntuacion.deuce;
                            this.puntuacionJugador2 = Puntuacion.deuce;
                        }
                        break;
                    case Puntuacion.forty:
                        if (this.puntuacionJugador2 === Puntuacion.ventaja) {
                            this.puntuacionJugador1 = Puntuacion.deuce;
                            this.puntuacionJugador2 = Puntuacion.deuce;
                        }
                        else {
                            this.puntuacionJugador1 = Puntuacion.winner;
                            this.ganador = this.nombreJugador1;
                        }
                        break;
                    case Puntuacion.deuce:
                        this.puntuacionJugador1 = Puntuacion.ventaja;
                        this.puntuacionJugador2 = Puntuacion.forty;
                        break;
                    case Puntuacion.ventaja:
                        this.puntuacionJugador1 = Puntuacion.winner;
                        this.ganador = this.nombreJugador1;
                        break;
                }
            }
            else if (nombreJugador === this.nombreJugador2) {
                switch (this.puntuacionJugador2) {
                    case Puntuacion.love:
                        this.puntuacionJugador2 = Puntuacion.fiveteen;
                        break;
                    case Puntuacion.fiveteen:
                        this.puntuacionJugador2 = Puntuacion.thirty;
                        break;
                    case Puntuacion.thirty:
                        this.puntuacionJugador2 = Puntuacion.forty;
                        if (this.puntuacionJugador2 === Puntuacion.forty && this.puntuacionJugador1 === Puntuacion.forty) {
                            this.puntuacionJugador1 = Puntuacion.deuce;
                            this.puntuacionJugador2 = Puntuacion.deuce;
                        }
                        break;
                    case Puntuacion.forty:
                        if (this.puntuacionJugador1 === Puntuacion.ventaja) {
                            this.puntuacionJugador2 = Puntuacion.deuce;
                            this.puntuacionJugador1 = Puntuacion.deuce;
                        }
                        else {
                            this.puntuacionJugador2 = Puntuacion.winner;
                            this.ganador = this.nombreJugador2;
                        }
                        break;
                    case Puntuacion.deuce:
                        this.puntuacionJugador2 = Puntuacion.ventaja;
                        this.puntuacionJugador1 = Puntuacion.forty;
                        break;
                    case Puntuacion.ventaja:
                        this.puntuacionJugador2 = Puntuacion.winner;
                        this.ganador = this.nombreJugador2;
                        break;
                }
            }
        }
    }

    public getScore():string {
        return `${this.puntuacionJugador1} - ${this.puntuacionJugador2}` ;
    }
}
export default TennisGame;
