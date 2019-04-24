
import Jugador from './Jugador';

//type Puntuacion = 15 | 30 | 40 | 'ventaja' | ganador?

enum Puntuacion {
    zero,
    fiveteen,
    thirty,
    forty,
    ventaja
}

let puntuacion: Puntuacion

puntuacion = Puntuacion.zero;



/* 
 * Posée dos clases Jugador
 * Controla cuando los dos jugadores tengan puntuación igual.
 */
export class TennisGame {

    private jugador1:Jugador;
    private jugador2:Jugador;
    public ganador:Jugador | null;

	constructor(nombreJugador1:string, nombreJugador2:string) {
        if (nombreJugador1 === null || nombreJugador1 === '') {
            nombreJugador1 = 'Jugador1';
        }
        if (nombreJugador2 === null || nombreJugador2 === '') {
            nombreJugador2 = 'Jugador2';
        }
        this.jugador1 = new Jugador(nombreJugador1);
        this.jugador2 = new Jugador(nombreJugador2);
        this.ganador = null;
    }
    
    public getNombreJugador(numJugador:number):string {
        if (numJugador == 1) {
            return this.jugador1.getNombre();
        }
        return this.jugador2.getNombre();
    }

    public setNombreJugador(numJugador:number, nuevoNombre:string) {
        if (numJugador == 1) {
            this.jugador1.setNombre(nuevoNombre);
        }
        else {
            this.jugador2.setNombre(nuevoNombre);
        }
    }

    public getJugador(numJugador:number) :Jugador {
        if (numJugador == 1) {
            return this.jugador1;
        }
        return this.jugador2;
    }

    public wonPointOld(jugador:Jugador) {
        jugador.anota();
    }


    public wonPoint(nombreJugador: string) {
        
    }

    public getScore():string {

        let puntuacionJugador1:number = this.jugador1.getPuntuacion(),
            puntuacionJugador2:number = this.jugador2.getPuntuacion(),
            puntuacionActual:string;

        // Iguales | Ventaja
        if (puntuacionJugador1 >= 40 && puntuacionJugador2 >= 40) {
            if (puntuacionJugador1 == 60) {
                this.ganador = this.jugador1;
            }
            else if (puntuacionJugador2 == 60) {
                this.ganador = this.jugador2;
            }
            else if (puntuacionJugador1 == 50 && puntuacionJugador2 == 40) {
                return "Ventaja " + this.jugador1.getNombre();
            }
            else if (puntuacionJugador1 == 40 && puntuacionJugador2 == 50) {
                return "Ventaja " + this.jugador2.getNombre();
            }
            else {
                if (puntuacionJugador1 == 50 && puntuacionJugador2 == 50) {
                    this.jugador1.setPuntuacion(40);
                    this.jugador2.setPuntuacion(40);
                }
                return "Deuce";
            }
        }
        else if (puntuacionJugador1 == 50) {
            this.ganador = this.jugador1;
        }
        else if (puntuacionJugador2 == 50) {
            this.ganador = this.jugador2;
        }

        // Ganador y salir
        if (this.ganador != undefined) {
            return "Win " + this.ganador.getNombre() + "!!!"
        }

        // puntos Jugador1
        switch (puntuacionJugador1) {
            case 0:
                puntuacionActual = "love";
                break;
            case 15:
                puntuacionActual = "fiveteen";
                break;
            case 30:
                puntuacionActual = "thirty";
                break;
            case 40:
                puntuacionActual = "forty";
                break;
            default:
                puntuacionJugador1 = 40;
                puntuacionActual = "forty";
                break;
        }

        // Iguales (All ...)
        if (puntuacionJugador1 == puntuacionJugador2) {
            return puntuacionActual + " All";
        }

        // puntos Jugador2
        switch (puntuacionJugador2) {
            case 0:
                puntuacionActual += " - love";
                break;
            case 15:
                puntuacionActual += " - fiveteen";
                break;
            case 30:
                puntuacionActual += " - thirty";
                break;
            case 40:
                puntuacionActual += " - forty";
                break;
            default:
                break;
        }

        return puntuacionActual;
    }
}
export default TennisGame;
