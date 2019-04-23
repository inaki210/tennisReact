
import TennisGame from './TennisGame';


describe('getScore', () => {
    let game:TennisGame;

    beforeAll(() => {
        game = new TennisGame('Jugador1','Jugador2');
    })


    // Jugador 1

    it('cuando el jugador 1 ha marcado el primer punto el resultado es: fiveteen - love', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('fiveteen - love');
    })

    it('cuando el jugador 1 ha marcado dos puntos el resultado es: thirty - love', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('thirty - love');
    })

    it('cuando el jugador 1 ha marcado tres puntos el resultado es: forty - love', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('forty - love');
    })

    it('cuando el jugador 1 ha marcado cuatro puntos el resultado es: Win Jugador1!!!', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('Win Jugador1!!!');
    })
    

    // Jugador 2

    it('cuando el jugador 2 ha marcado el primer punto el resultado es: love - fiveteen', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('love - fiveteen');
    })

    it('cuando el jugador 2 ha marcado dos puntos el resultado es: love - thirty', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('love - thirty');
    })

    it('cuando el jugador 2 ha marcado tres puntos el resultado es: love - forty', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('love - forty');
    })

    it('cuando el jugador 2 ha marcado cuatro puntos el resultado es: Win Jugador2!!!', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('Win Jugador2!!!');
    })


    // Empates

    it('cuando ningún jugador ha marcado el resultado es: love All', () => {
        game = new TennisGame('Jugador1','Jugador2');
        let score = game.getScore();

        expect(score).toBe('love All')
    })

    it('cuando los jugadores han marcado el primer punto el resultado es: fiveteen All', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();
        game.getJugador(1).anota();


        let score = game.getScore();
        
        expect(score).toBe('fiveteen All');
    })

    it('cuando los jugadores han marcado dos puntos el resultado es:  thirty All', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('thirty All');
    })

    it('cuando los jugadores han marcado tres puntos el resultado es: Deuce', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('Deuce');
    })


    // Ventajas

    it('cuando el jugador 1 tiene ventaja el resultado es: Ventaja Jugador1', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('Ventaja Jugador1');
    })

    it('cuando el jugador 2 tiene ventaja el resultado es: Ventaja Jugador2', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('Ventaja Jugador2');
    })
    

})



