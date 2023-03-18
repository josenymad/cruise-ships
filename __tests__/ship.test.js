const Ship = require('../src/ship');
const Port = require('../src/port');

describe('cruise ship constructor', () => {
    it('is an object', () => {
        const ship = new Ship();
        expect(ship).toBeInstanceOf(Object);
    });

    it('has a currrent port', () => {
        const ship = new Ship('Port 1');
        expect(ship.currentPort).toBe('Port 1');
    });

    it('takes a port object as current port', () => {
        const port = new Port('Port 1');
        const ship = new Ship(port);
        expect(ship.currentPort).toBe(port);
    });

    it('has a previous port property', () => {
        const ship = new Ship();
        expect(ship.previousPort).toBeNull();
    });
});

describe('docking', () => {
    it('docks at given port', () => {
        const port1 = new Port('Port 1');
        const ship = new Ship(port1);
        ship.setSail();
        const port2 = new Port('Port 2');
        ship.dock(port2);
        expect(ship.currentPort).toBe(port2);
    });
});

describe('set sail', () => {
    it('can set sail', () => {
        const ship = new Ship('Port 1');
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });

    it('sets previous port property to the current port', () => {
        const port1 = new Port('Port 1');
        const ship = new Ship(port1);
        ship.setSail();
        expect(ship.previousPort).toBe(port1);
    });
});
