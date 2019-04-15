
/* 
 * Recibe de la Clase Juego la orden de anotar e incrementa su puntuación.
 * Cuando la puntuación alcance 50 ganará el juego.
 * En caso de empate (iguales) 50 será ventaja y cuando llegue a 60 ganará.
 * Cuando el otro jugador tenga la ventaja se modificará la puntuación de éste a 40.
 */

export class Jugador {

    private nombre:string;
    private puntuacion:number;
    private ventaja:boolean;

	constructor(nombre:string) {
        this.nombre = nombre;
        this.puntuacion = 0;
        this.ventaja = false;
	}

    public getNombre():string {
        return this.nombre;
    }
    public setNombre(nuevoNombre:string) {
        this.nombre = nuevoNombre;
    }

	public getPuntuacion():number {
		return this.puntuacion;
    }
	public setPuntuacion(nueva:number) {
        this.puntuacion = nueva;
    }

    public getVentaja():boolean {
        return this.ventaja;
    }
    public setVentaja(nuevaVentaja:boolean) {
        this.ventaja = nuevaVentaja;
    }
    
    // Incrementa la puntuación un nivel.
	public anota() {
        let p:number = this.getPuntuacion();
        
        if (p == 0 || p == 15) {
            p += 15;
        }
        else {
            p += 10;
        }

        this.setPuntuacion(p);
	}
}
export default Jugador;
