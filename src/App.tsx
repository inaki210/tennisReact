import React from 'react';
import Juego from './Juego';
import DivJugadores from './DivJugadores';
import './estilos.scss';


interface State {
  onGame: boolean;
  nombre1: string;
  nombre2: string;
  cadena: string;
}

class App extends React.Component<{}, State> {

  state: State = { 
    onGame: false, 
    nombre1: '',
    nombre2: '',
    cadena: "<p>love-love</p>"
  };

  partida :Juego = new Juego(this.state.nombre1, this.state.nombre2);


  iniciarApp = () => {
    if (!this.state.onGame) {
      // Se crea el Juego y los Jugadores con un nombre por defecto en caso de que estén vacíos. 
      let nom1:string;
      let nom2:string;
      nom1 = '';  //texto del DivJugadores
      nom2 = '';

      this.partida = new Juego(nom1, nom2);
    }

    this.setState({ onGame: !this.state.onGame });
  }
 
  render() {


    return (
      <div className="position-relative display-flex-row justify-content-center color-fondo--azul-claro">
        <div className="position-absolute display-flex-column justify-content-center align-items-center margin-top-10-percent">
          <div className="display-flex-row justify-content-center">
            <h1>TENNIS GAME</h1>
          </div>
          <div id="divJugadores" className="display-flex-row justify-content-space-around margin-vertical-small">
            
            <DivJugadores 
              status={this.state.onGame}
              game={this.partida}
              numeroJugador={1}
              onPrint={this.setResultados}
              onChange={this.setNombre1} />
            
            { this.state.onGame ? (<DivResultados resultados={this.state.cadena}></DivResultados>) : ("") }
            
            <DivJugadores 
              status={this.state.onGame}
              game={this.partida}
              numeroJugador={2}
              onPrint={this.setResultados}
              onChange={this.setNombre2} />

          </div>
          <div className="display-flex-row justify-content-center">
            <button className="width-medium" onClick={this.iniciarApp}>{this.state.onGame ? ('New Game') : ('Play!')}</button>
          </div>
        </div>
      </div>
    );
  }

  setResultados = (score:string) => {
    let str: string = this.state.cadena;
    this.setState({cadena: str + "<p>" + score + "</p>"});
  }

  setNombre1 = (nombre: string) => {
    this.partida.setNombreJugador(1, nombre);
    console.log(this.partida);
  }

  setNombre2 = (nombre: string) => {
    this.partida.setNombreJugador(2, nombre);
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

export default App;
