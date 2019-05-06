import TennisGame from './TennisGameOldd'
/*
 * Aplicación de Tennis
 * Crea la app Juego que creará los dos jugadores.
 * Introduce los nómbres de los jugadores.
 *
 */
export class Main {
  public juego1: TennisGame
  public resultadoCadena: string

  constructor() {
    this.juego1 = new TennisGame('', '')
    this.resultadoCadena = ''
  }

  public anotarPunto(num: number) {
    if (this.juego1 != null) {
      if (num == 1) {
        this.juego1.wonPointOld(this.juego1.getJugador(1))
      } else if (num == 2) {
        this.juego1.wonPointOld(this.juego1.getJugador(2))
      } else {
      }

      this.imprimirResultado()
    }
  }

  private imprimirResultado() {
    if (this.juego1 != null) {
      this.resultadoCadena += '<p>' + this.juego1.getScore() + '</p>'
      ;(document.getElementById(
        'divResultados',
      ) as HTMLElement).innerHTML = this.resultadoCadena

      // Si ha ganado un jugador -> se bloquean los botones
      if (this.juego1.getScore().indexOf('Win') >= 0) {
        // Esconder botones
        /*(document.getElementById("btnPlayer1") as HTMLElement).disabled = true;
                (document.getElementById("btnPlayer2") as HTMLElement).disabled = true;*/
      }
    }
  }

  public iniciar(action: string) {
    // variables con valores
    let accion: string = action,
      lblJugador1: HTMLElement | null = document.getElementById('lblPlayer1'),
      lblJugador2: HTMLElement | null = document.getElementById('lblPlayer2'),
      txtJugador1: HTMLElement | null = document.getElementById('txtPlayer1'),
      txtJugador2: HTMLElement | null = document.getElementById('txtPlayer2'),
      btnPunto1: HTMLElement | null = document.getElementById('btnPlayer1'),
      btnPunto2: HTMLElement | null = document.getElementById('btnPlayer2'),
      nombre1: string = '' /*(txtJugador1 as HTMLElement).value*/,
      nombre2: string = '' /*(txtJugador2 as HTMLElement).value*/

    if (accion == 'jugar') {
      if (nombre1 == null || nombre1 == '') {
        nombre1 = 'Jugador1'
      }
      if (nombre2 == null || nombre2 == '') {
        nombre2 = 'Jugador2'
      }
      this.juego1 = new TennisGame(nombre1, nombre2)

      // resetea el resultado y comienza desde cero (love-love)
      this.resultadoCadena = ''
      this.imprimirResultado()

      // Poner nombres
      ;(lblJugador1 as HTMLElement).innerHTML = nombre1
      ;(lblJugador2 as HTMLElement).innerHTML = nombre2

      // Mostrar botones
      ;(btnPunto1 as HTMLElement).classList.remove('display-none')
      ;(btnPunto2 as HTMLElement).classList.remove('display-none')

      // Esconder cajas de texto
      /*(txtJugador1 as HTMLElement).value = "";
            (txtJugador2 as HTMLElement).value = "";*/
      ;(txtJugador1 as HTMLElement).classList.add('display-none')
      ;(txtJugador2 as HTMLElement).classList.add('display-none')

      // Ocultar botón Play y mostrar el botón New
      ;(document.getElementById('btnPlay') as HTMLElement).classList.add(
        'display-none',
      )
      ;(document.getElementById('btnNew') as HTMLElement).classList.remove(
        'display-none',
      )
    } else if (accion == 'nuevo') {
      // Poner titulos
      ;(lblJugador1 as HTMLElement).innerHTML = 'Player 1'
      ;(lblJugador2 as HTMLElement).innerHTML = 'Player 2'

      // Esconder botones
      /*(btnPunto1 as HTMLElement).disabled = false;
            (btnPunto2 as HTMLElement).disabled = false;*/
      ;(btnPunto1 as HTMLElement).classList.add('display-none')
      ;(btnPunto2 as HTMLElement).classList.add('display-none')

      // Mostrar cajas de texto
      ;(txtJugador1 as HTMLElement).classList.remove('display-none')
      ;(txtJugador2 as HTMLElement).classList.remove('display-none')

      // Borrar resultados
      ;(document.getElementById('divResultados') as HTMLElement).innerHTML = ''

      // Ocultar botón New y mostrar el botón Play
      ;(document.getElementById('btnNew') as HTMLElement).classList.add(
        'display-none',
      )
      ;(document.getElementById('btnPlay') as HTMLElement).classList.remove(
        'display-none',
      )
    }
  }
}
export default Main
