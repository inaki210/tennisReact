import React from 'react';
import Juego from './Juego';
import './estilos.scss';

interface Props {
    status: boolean;
    game: Juego;
    numeroJugador: number;
    onPrint: (cadena: string) => void;
    onChange: (nombre: string) => void;
}

class DivJugadores extends React.Component<Props> {
    
    resultadoCadena :string = '';
    state = {
        nombreJugador: this.props.game.getJugador(this.props.numeroJugador).getNombre()
    };



    onChange = (textoNuevo:string) => {
        this.props.onChange(textoNuevo)
    }

    anotarPunto = (num:number) => {
        if (this.props.game != null && this.props.game.ganador === null) {
            this.props.game.wonPoint(this.props.game.getJugador(num));
            this.imprimirResultado();
        }
    }

    imprimirResultado() {
        if (this.props.status) {
            this.props.onPrint(this.props.game.getScore());
        }
    }

    mostrarNombre = ():string => {
        /* alert("nombreJugador: " + this.state.nombreJugador); */
        const { status, game, numeroJugador } = this.props;
        if (status && game != null) {
            if (game.getJugador(numeroJugador).getNombre() === '')
            { 
                game.getJugador(numeroJugador).setNombre(this.state.nombreJugador);
            }
        }
        return game.getJugador(numeroJugador).getNombre()
    }

    
    
    render() {
        const { status, numeroJugador } = this.props;
        const textoJugador: string = "Player" + numeroJugador;

        return (
            <div className="margin-horizontal-small display-flex-column align-items-center">
                <h4 id="lblPlayer">
                    { status ? (this.mostrarNombre()) : (textoJugador) }
                </h4>
                { status ? (
                    <button onClick={() => this.anotarPunto(numeroJugador)}>Won point</button>
                ) : (
                    <TxtJugador nombreJugador={this.state.nombreJugador} numero={numeroJugador} onChange={this.onChange} />) 
                }
            </div>
        );
    }
}

interface Nombre {
    nombreJugador: string;
    numero: number;
    onChange: (str: string) => void;
}
const TxtJugador:React.SFC<Nombre> = ({nombreJugador, numero, onChange}) => 
        <input 
            type="text" 
            name="txtJugadr" 
            value={nombreJugador} 
            placeholder={"Jugador" + numero} 
            onChange={(event) => onChange(event.target.value)}
        />
;

export default DivJugadores;