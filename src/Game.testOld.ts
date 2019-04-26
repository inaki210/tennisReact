
import TennisGame from './TennisGameOldd';


describe('getScore', () => {
    let game:TennisGame;

    beforeAll(() => {
        game = new TennisGame('Jugador1','Jugador2');
    })


    // Jugador1 = 0

    it('cuando ningún jugador ha marcado el resultado es: love All', () => {
        game = new TennisGame('Jugador1','Jugador2');
        let score = game.getScore();

        expect(score).toBe('love All')
    })

    // 0 - 15
    it('cuando el jugador 2 ha marcado el primer punto el resultado es: love - fiveteen', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('love - fiveteen');
    })

    // 0 - 30
    it('cuando el jugador 2 ha marcado dos puntos el resultado es: love - thirty', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('love - thirty');
    })

    // 0 - 40
    it('cuando el jugador 2 ha marcado tres puntos el resultado es: love - forty', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('love - forty');
    })

    // 0 - Ganador
    it('cuando el jugador 2 ha marcado cuatro puntos el resultado es: Win Jugador2!!!', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('Win Jugador2!!!');
    })

    // Jugador1 = 15

    // 15 - 0
    it('cuando el jugador 1 ha marcado el primer punto el resultado es: fiveteen - love', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('fiveteen - love');
    })

    // 15 - 15
    it('cuando los jugadores han marcado el primer punto el resultado es: fiveteen All', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('fiveteen All');
    })


    // 15 - 30
    it('cuando el jugador 1 ha marcado un punt y el jugador 2 dos puntos el resultado es: fiveteen - thirty', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('fiveteen - thirty');
    })

    // 15 - 40
    it('cuando el jugador 1 ha marcado un punto y el jugador 2 ha marcado tres puntos el resultado es: fiveteen - forty', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('fiveteen - forty');
    })

    // 15 - Ganador
    it('cuando el jugador 1 ha marcado un punt y el jugador 2 ha marcado cuatro puntos el resultado es: Win Jugador2!!!', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('Win Jugador2!!!');
    })

    // Jugador1 = 30

    // 30 - 0
    it('cuando el jugador 1 ha marcado dos puntos el resultado es: thirty - love', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('thirty - love');
    })
    // 30 - 15
    it('cuando el jugador 1 ha marcado dos puntos y el jugador 2 ha marcado el primer punto el resultado es: thirty - fiveteen', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('thirty - fiveteen');
    })

    // 30 - 30
    it('cuando los jugadores han marcado dos puntos el resultado es:  thirty All', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('thirty All');
    })

    // 30 - 40
    it('cuando el jugador 1 ha marcado dos puntos y el jugador 2 ha marcado tres puntos el resultado es: thirty - forty', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('thirty - forty');
    })

    // 30 - Ganador
    it('cuando el jugador 1 ha marcado dos puntos y el jugador 2 ha marcado cuatro puntos el resultado es: Win Jugador2!!!', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('Win Jugador2!!!');
    })


    // Jugador1 = 40

    // 40 - 0
    it('cuando el jugador 1 ha marcado tres puntos el resultado es: forty - love', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('forty - love');
    })
    // 40 - 15
    it('cuando el jugador 1 ha marcado tres puntos y el jugador 2 ha marcado un punto el resultado es: forty - fiveteen', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('forty - fiveteen');
    })

    // 40 - 30
    it('cuando el jugador 1 ha marcado tres puntos y el jugador 2 ha marcado dos puntos el resultado es: forty - thirty', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('forty - thirty');
    })

    // 40 - 40
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

    // 40 - Ventaja
    it('cuando el jugador 1 ha marcado tres puntos y el jugador 2 ha marcado cuatro puntos el resultado es: Ventaja Jugador2', () => {
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

    // 40 - Ganador
    it('cuando el jugador 1 ha marcado cuatro puntos y el jugador 2 ha marcado cinco el resultado es: Win Jugador2!!!', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();

        let score = game.getScore();
        
        expect(score).toBe('Win Jugador2!!!');
    })


    // Jugador1 = Ganador

    // Ganador - 0
    it('cuando el jugador 1 ha marcado cuatro puntos el resultado es: Win Jugador1!!!', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('Win Jugador1!!!');
    })

    // Ganador - 15
    it('cuando el jugador 1 ha marcado cuatro puntos y el jugador 2 ha marcado un punto el resultado es: Win Jugador1!!!', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('Win Jugador1!!!');
    })

    // Ganador - 30
    it('cuando el jugador 1 ha marcado cuatro puntos y el jugador 2 ha marcado dos puntos el resultado es: Win Jugador1!!!', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('Win Jugador1!!!');
    })

    // Ventaja - 40
    it('cuando el jugador 1 ha marcado cuatro puntos y el jugador 2 ha marcado tres puntos el resultado es: Ventaja Jugador1', () => {
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
    
    // Ganador - 40
    it('cuando el jugador 1 ha marcado cinco puntos y el jugador 2 ha marcado tres puntos el resultado es: Win Jugador1!!!', () => {
        game = new TennisGame('Jugador1','Jugador2');
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(2).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();
        game.getJugador(1).anota();

        let score = game.getScore();
        
        expect(score).toBe('Win Jugador1!!!');
    })
    


})



