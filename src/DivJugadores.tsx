import React from 'react';
import TennisGame from './TennisGame';
import './estilos.scss';

interface Props {
    status: boolean;
    game: TennisGame;

    nombreJugador: string;
    numeroJugador: number;
    onPrint: (cadena: string) => void;
    onChange: (nombre: string) => void;
}

class DivJugadores extends React.Component<Props> {
    /*
    resultadoCadena :string = '';
    state = {
        nombreJugador1: this.props.game.getNombreJugador1(),
        nombreJugador2: this.props.game.getNombreJugador2()
    };

    getNombre = (numeroJugador:number) => {
        if (numeroJugador === 1) {
            return this.state.nombreJugador1;
        }
        else if (numeroJugador === 2) {
            return this.state.nombreJugador2;
        }
        return 'Anon';
    }*/

    anotarPunto = (nombreJugador:string) => {
        this.props.game.wonPoint(nombreJugador);
    }

    onChange = (textoNuevo:string) => {
        this.props.onChange(textoNuevo);
    }

    imprimirResultado() {
        if (this.props.status) {
            this.props.onPrint(this.props.game.getScore());
        }
    }
   
    
    render() {
        const { status, numeroJugador } = this.props;

        return (
            <div className="margin-horizontal-small display-flex-column align-items-center">
                <h4 id="lblPlayer">
                    { status ? (this.props.nombreJugador) : ("Player" + numeroJugador) }
                </h4>
                { status ? (
                    <button onClick={() => {this.props.game.wonPoint(this.props.nombreJugador), this.imprimirResultado()}} disabled={!!this.props.game.ganador}>Won point</button>
                ) : (
                    <TxtJugador nombreJugador={this.props.nombreJugador} numero={numeroJugador} onChange={this.onChange} />
                )}
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