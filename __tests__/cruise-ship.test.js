const CruiseShip = require('../src/cruise-ship');

describe('cruise ship constructor', () => {
    it('cruise ship is an object', () => {
        const ship = new CruiseShip();
        expect(ship).toBeInstanceOf(Object);
    });

    it('cruise ship has a starting port', () => {
        const ship = new CruiseShip('Port Able');
        expect(ship.startingPort).toBe('Port Able');
    });

    it('can set sail', () => {
        const ship = new CruiseShip('Port Able');
        ship.setSail();
        expect(ship.startingPort).toBeFalsy();
    });
});
