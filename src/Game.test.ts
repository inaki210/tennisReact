
import TennisGame from './TennisGame';

describe('DADO un partido nuevo', function() {
    let game:TennisGame;

    beforeEach(function() {
        game = new TennisGame('Jugador1','Jugador2');
    })


    /* NOMBRES */
    it('CUANDO se crea el objeto TennisGame por defecto ENTONCES el nombre1 es: Jugador1', function() {
        const nombre1 = game.getNombreJugador1();

        expect(nombre1).toBe('Jugador1');
    });
    it('CUANDO se crea el objeto TennisGame por defecto ENTONCES el nombre2 es: Jugador2', function() {
        const nombre2 = game.getNombreJugador2();

        expect(nombre2).toBe('Jugador2');
    });

    /* PUNTUACIONES */

    // Jugador1 = 0
    it('CUANDO ningún jugador ha marcado ENTONCES resultado es: love All', function() {
        const score = game.getScore();

        expect(score).toBe('love All')
    })

    // 0 - 15
    it('cuando el jugador 2 ha marcado el primer punto el resultado es: love - fiveteen', function() {
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('love - fiveteen');
    })

    // 0 - 30
    it('cuando el jugador 2 ha marcado dos puntos el resultado es: love - thirty', function() {
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('love - thirty');
    })

    // 0 - 40
    it('cuando el jugador 2 ha marcado tres puntos el resultado es: love - forty', () => {
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');


        const score = game.getScore();
        
        expect(score).toBe('love - forty');
    })

    // 0 - Ganador
    it('cuando el jugador 2 ha marcado cuatro puntos el resultado es: Win Jugador2!!!', () => {
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');


        const score = game.getScore();
        
        expect(score).toBe('Win Jugador2!!!');
    })

    // Jugador1 = 15

    // 15 - 0
    it('cuando el jugador 1 ha marcado el primer punto el resultado es: fiveteen - love', () => {
        game.wonPoint('Jugador1');

        const score = game.getScore();
        
        expect(score).toBe('fiveteen - love');
    })

    // 15 - 15
    it('cuando los jugadores han marcado el primer punto el resultado es: fiveteen All', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('fiveteen All');
    })


    // 15 - 30
    it('cuando el jugador 1 ha marcado un punt y el jugador 2 dos puntos el resultado es: fiveteen - thirty', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');


        const score = game.getScore();
        
        expect(score).toBe('fiveteen - thirty');
    })

    // 15 - 40
    it('cuando el jugador 1 ha marcado un punto y el jugador 2 ha marcado tres puntos el resultado es: fiveteen - forty', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('fiveteen - forty');
    })

    // 15 - Ganador
    it('cuando el jugador 1 ha marcado un punt y el jugador 2 ha marcado cuatro puntos el resultado es: Win Jugador2!!!', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('Win Jugador2!!!');
    })

    // Jugador1 = 30

    // 30 - 0
    it('cuando el jugador 1 ha marcado dos puntos el resultado es: thirty - love', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');

        const score = game.getScore();
        
        expect(score).toBe('thirty - love');
    })
    // 30 - 15
    it('cuando el jugador 1 ha marcado dos puntos y el jugador 2 ha marcado el primer punto el resultado es: thirty - fiveteen', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('thirty - fiveteen');
    })

    // 30 - 30
    it('cuando los jugadores han marcado dos puntos el resultado es:  thirty All', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('thirty All');
    })

    // 30 - 40
    it('cuando el jugador 1 ha marcado dos puntos y el jugador 2 ha marcado tres puntos el resultado es: thirty - forty', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('thirty - forty');
    })

    // 30 - Ganador
    it('cuando el jugador 1 ha marcado dos puntos y el jugador 2 ha marcado cuatro puntos el resultado es: Win Jugador2!!!', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('Win Jugador2!!!');
    })


    // Jugador1 = 40

    // 40 - 0
    it('cuando el jugador 1 ha marcado tres puntos el resultado es: forty - love', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');

        const score = game.getScore();
        
        expect(score).toBe('forty - love');
    })
    // 40 - 15
    it('cuando el jugador 1 ha marcado tres puntos y el jugador 2 ha marcado un punto el resultado es: forty - fiveteen', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('forty - fiveteen');
    })

    // 40 - 30
    it('cuando el jugador 1 ha marcado tres puntos y el jugador 2 ha marcado dos puntos el resultado es: forty - thirty', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('forty - thirty');
    })

    // 40 - 40
    it('cuando los jugadores han marcado tres puntos el resultado es: Deuce', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('Deuce');
    })

    // 40 - Ventaja
    it('cuando el jugador 1 ha marcado tres puntos y el jugador 2 ha marcado cuatro puntos el resultado es: Ventaja Jugador2', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('Ventaja Jugador2');
    })

    // 40 - Ganador
    it('cuando el jugador 1 ha marcado cuatro puntos y el jugador 2 ha marcado cinco el resultado es: Win Jugador2!!!', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');

        const score = game.getScore();
        
        expect(score).toBe('Win Jugador2!!!');
    })


    // Jugador1 = Ganador

    // Ganador - 0
    it('cuando el jugador 1 ha marcado cuatro puntos el resultado es: Win Jugador1!!!', () => {
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');

        const score = game.getScore();
        
        expect(score).toBe('Win Jugador1!!!');
    })

    // Ganador - 15
    it('cuando el jugador 1 ha marcado cuatro puntos y el jugador 2 ha marcado un punto el resultado es: Win Jugador1!!!', () => {
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');

        const score = game.getScore();
        
        expect(score).toBe('Win Jugador1!!!');
    })

    // Ganador - 30
    it('cuando el jugador 1 ha marcado cuatro puntos y el jugador 2 ha marcado dos puntos el resultado es: Win Jugador1!!!', () => {
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');

        const score = game.getScore();
        
        expect(score).toBe('Win Jugador1!!!');
    })

    // Ventaja - 40
    it('cuando el jugador 1 ha marcado cuatro puntos y el jugador 2 ha marcado tres puntos el resultado es: Ventaja Jugador1', () => {
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');

        const score = game.getScore();
        
        expect(score).toBe('Ventaja Jugador1');
    })
    
    // Ganador - 40
    it('cuando el jugador 1 ha marcado cinco puntos y el jugador 2 ha marcado tres puntos el resultado es: Win Jugador1!!!', () => {
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador2');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');
        game.wonPoint('Jugador1');

        const score = game.getScore();
        
        expect(score).toBe('Win Jugador1!!!');
    })
    
    
    describe("DADO el partido tiene un ganador", () => {
        // que el partido ganador
        const marcador = 'Win Jugador1!!!';
        beforeEach(() => {
            game.wonPoint('Jugador2');  // 0-15
            game.wonPoint('Jugador2');  // 0-30
            game.wonPoint('Jugador2');  // 0-40
            game.wonPoint('Jugador1');  // 15-40
            game.wonPoint('Jugador1');  // 30-40
            game.wonPoint('Jugador1');  // deuce
            game.wonPoint('Jugador1');  // ventaja-40
            game.wonPoint('Jugador1');  // win Jugador1
        })

        it('CUANDO intento apuntar un punto a un jugador ENTONCES no se altera el marcado', () => {
            // Act: intentar marcar un punto
            game.wonPoint('Jugador2');
            game.wonPoint('Jugador2');
            game.wonPoint('Jugador2');

            // Assert: verficar que el marcador no ha sido alterado
            expect(game.getScore()).toBe(marcador);
        })
    })

})



