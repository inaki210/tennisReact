
import Jugador from './Jugador';
/* 
 * Posée dos clases Jugador
 * Controla cuando los dos jugadores tengan puntuación igual.
 */
export class Juego {

    private j1:Jugador;
    private j2:Jugador;
    public ganador:Jugador | null;

	constructor(nombre1:string, nombre2:string) {
        if (nombre1 === null || nombre1 === '') {
            nombre1 = 'Jugador1';
        }
        if (nombre2 === null || nombre2 === '') {
            nombre2 = 'Jugador2';
        }
        this.j1 = new Jugador(nombre1);
        this.j2 = new Jugador(nombre2);
        this.ganador = null;
    }
    
    public getNombreJugador(numJugador:number):string {
        if (numJugador == 1) {
            return this.j1.getNombre();
        }
        return this.j2.getNombre();
    }

    public setNombreJugador(numJugador:number, nuevoNombre:string) {
        if (numJugador == 1) {
            this.j1.setNombre(nuevoNombre);
        }
        else {
            this.j2.setNombre(nuevoNombre);
        }
    }

    public getJugador(numJugador:number) :Jugador {
        if (numJugador == 1) {
            return this.j1;
        }
        return this.j2;
    }

    public wonPoint(PJ:Jugador) {
        PJ.anota();
    }

    public getScore():string {

        let punt1:number = this.j1.getPuntuacion(),
            punt2:number = this.j2.getPuntuacion(),
            punt:string;

        // Iguales | Ventaja
        if (punt1 >= 40 && punt2 >= 40) {
            if (punt1 == 60) {
                this.ganador = this.j1;
            }
            else if (punt2 == 60) {
                this.ganador = this.j2;
            }
            else if (punt1 == 50 && punt2 == 40) {
                return "Ventaja " + this.j1.getNombre();
            }
            else if (punt1 == 40 && punt2 == 50) {
                return "Ventaja " + this.j2.getNombre();
            }
            else {
                if (punt1 == 50 && punt2 == 50) {
                    this.j1.setPuntuacion(40);
                    this.j2.setPuntuacion(40);
                }
                return "Deuce";
            }
        }
        else if (punt1 == 50) {
            this.ganador = this.j1;
        }
        else if (punt2 == 50) {
            this.ganador = this.j2;
        }

        // Ganador y salir
        if (this.ganador != undefined) {
            return "Win " + this.ganador.getNombre() + "!!!"
        }

        // puntos Jugador1
        switch (punt1) {
            case 0:
                punt = "love";
                break;
            case 15:
                punt = "fiveteen";
                break;
            case 30:
                punt = "thirty";
                break;
            case 40:
                punt = "forty";
                break;
            default:
                punt1 = 40;
                punt = "forty";
                break;
        }

        // Iguales (All ...)
        if (punt1 == punt2) {
            return punt + " All";
        }

        // puntos Jugador2
        switch (punt2) {
            case 0:
                punt += " - love";
                break;
            case 15:
                punt += " - fiveteen";
                break;
            case 30:
                punt += " - thirty";
                break;
            case 40:
                punt += " - forty";
                break;
            default:
                break;
        }

        return punt;
    }
}
export default Juego;
