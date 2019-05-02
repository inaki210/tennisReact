import React from "react";
import "./estilos.scss";
import styled from 'styled-components'

interface Props {
  historicoMarcador: string[];
  nombreJugador1: string;
  nombreJugador2: string;
  onNewGame: () => void;
  onJugador1WonPoint: () => void;
  onJugador2WonPoint: () => void;
}

class VistaEnJuego extends React.Component<Props> {
  render() {
    const {
      nombreJugador1,
      nombreJugador2,
      onNewGame,
      onJugador1WonPoint,
      onJugador2WonPoint
    } = this.props;

    return (
      <div className="vh-100 display-flex-row justify-content-center color-fondo--azul-claro">
        <div className="display-flex-column justify-content-center align-items-center margin-top-10-percent">
          <div className="display-flex-row justify-content-center">
            <h1>TENNIS GAME</h1>
          </div>

          <div
            className="display-flex-row justify-content-space-around margin-vertical-small"
          >
            <div>
              <h4>{nombreJugador1}</h4>
              <button onClick={onJugador1WonPoint}>Won Point</button>
            </div>

            <Marcador historicoMarcador={this.props.historicoMarcador} />

            <div>
              <h4>{nombreJugador2}</h4>
              <button onClick={onJugador2WonPoint}>Won Point</button>
            </div>
          </div>

          <ButtonWrapper>
            <button className="width-medium" onClick={onNewGame}>
              New Game
            </button>
						</ButtonWrapper>
        </div>
      </div>
    );
  }
}

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
`

interface MarcadorProps {
  historicoMarcador: string[];
}
const Marcador: React.SFC<MarcadorProps> = ({ historicoMarcador }) => (
  <div className="display-flex-column align-items-center" style={{minWidth: '300px'}}>
    {historicoMarcador.length > 0 && (
      <ul>
        {historicoMarcador.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

export default VistaEnJuego;
