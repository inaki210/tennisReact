import React from 'react';
import TennisGame from './TennisGameOldd';
import './estilos.scss';

interface Props {
    status: boolean;
    game: TennisGame;
    numeroJugador: number;
    onPrint: (cadena: string) => void;
    onChange: (nombre: string) => void;
}

class DivJugadores extends React.Component<Props> {
    
    resultadoCadena :string = '';
    state = {
        nombreJugador: this.props.game.getNombreJugador(this.props.numeroJugador)
    };



    onChange = (textoNuevo:string) => {
        this.props.onChange(textoNuevo);
    }

    anotarPunto = (num:number) => {
        this.props.game.wonPointOld(this.props.game.getJugador(num));
        this.imprimirResultado();
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
                    { status ? (this.props.game.getNombreJugador(numeroJugador)) : ("Player" + numeroJugador) }
                </h4>
                { status ? (
                    <button onClick={() => {this.anotarPunto(numeroJugador), this.imprimirResultado()}} disabled={!!this.props.game.ganador}>Won point</button>
                ) : (
                    <TxtJugador nombreJugador={this.props.game.getNombreJugador(numeroJugador)} numero={numeroJugador} onChange={this.onChange} />
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