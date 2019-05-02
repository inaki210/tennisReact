import React from 'react';
import TennisGame from './TennisGame';
import './estilos.scss';


interface State {
	enJuego: boolean;
	cadena: string;
	partida: TennisGame;
	nombreJugador1: string;
	nombreJugador2: string;
	//hayGanador: boolean;
}

class AppIndex extends React.Component<{}, State> {
  
  state: State = { 
		enJuego: false,
		cadena: '',
		partida: new TennisGame('', ''),
		nombreJugador1: '',
		nombreJugador2: '',
		//hayGanador: false
	};


	iniciarApp = () => {
    // Se crea el Juego y los Jugadores con un nombre por defecto en caso de que estén vacíos. 
    const nombre1:string = this.state.nombreJugador1;
    const nombre2:string = this.state.nombreJugador2;
    
    this.setState({ partida: new TennisGame(nombre1, nombre2) });
    this.resetResultados();

		this.setState({ enJuego: true});
  }
  
  reiniciarApp = () => {
		this.setState({ enJuego: false });
	}

	
  
  render() {
  const { enJuego, nombreJugador1, nombreJugador2, cadena } = this.state;
  
  return (
    <div className="vh-100 display-flex-row justify-content-center color-fondo--azul-claro">
      <div className="display-flex-column justify-content-center align-items-center margin-top-10-percent">
      
        <div className="display-flex-row justify-content-center">
          <h1>TENNIS GAME</h1>
        </div>

        <div id="divJugadores" className="display-flex-row justify-content-space-around margin-vertical-small">
          
          <div className="margin-horizontal-small display-flex-column align-items-center">
            <h4 id="lblPlayer1">"Player1"</h4>
            <input type="text" placeholder="Nombre jugador 1" />
          </div>

          <div className="margin-horizontal-small display-flex-column align-items-center">
            <h4 id="lblPlayer2">"Player2"</h4>
            <input type="text" placeholder="Nombre jugador 2" onChange={event => (this.setNombreJugador2(nombreJugador2))} />
          </div>

        </div>

        <div className="display-flex-row justify-content-center">
          <button className="width-medium" onClick={this.iniciarApp}>Play!</button>
        </div>
      
      </div>



      <div className="display-flex-column justify-content-center align-items-center margin-top-10-percent">
        
        <div className="display-flex-row justify-content-center">
          <h1>TENNIS GAME</h1>
        </div>

        <div id="divJugadores" className="display-flex-row justify-content-space-around margin-vertical-small">
          
          <div>
            <h4>{this.state.nombreJugador1}</h4>
            <button>Won Point</button>
          </div>

          { this.state.enJuego && (<DivResultados resultados={this.state.cadena}></DivResultados>) }

          <div>
            <h4>{this.state.nombreJugador2}</h4>
            <button>Won Point</button>
          </div>

        </div>

        <div className="display-flex-row justify-content-center">
          <button className="width-medium" onClick={this.reiniciarApp}>New Game</button>
        </div>

      </div>
    </div>

    );
  }

	resetResultados = () => {
    this.setState({ cadena: '<p>love-love</p>' });
  }
  
	setResultados = (score:string) => {
		let str: string = this.state.cadena;
		this.setState({cadena: str + "<p>" + score + "</p>"});
	}


	setNombre1 = (nombre: string) => {
		this.setState({partida: new TennisGame(nombre, this.state.nombreJugador2)});
	}

	setNombre2 = (nombre: string) => {
		this.setState({partida: new TennisGame(this.state.nombreJugador1, nombre)});
  }
  
  setNombreJugador2 = (nombre: string) => {
    this.setState({ nombreJugador2: nombre });
    console.log(`nombre: ${nombre}`);
  }


  

}


interface Resultados {
  resultados: string;
}
const DivResultados:React.SFC<Resultados> = ({resultados}) => 
<div 
  id="divResultados" 
  className="display-flex-column align-items-center" 
  dangerouslySetInnerHTML={{ __html: resultados }} 
/>;


export default AppIndex;
