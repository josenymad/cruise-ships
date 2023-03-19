const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('cruise ship constructor', () => {
    it('is an object', () => {
        const ship = new Ship();
        expect(ship).toBeInstanceOf(Object);
    });

    it('has a current port', () => {
        const ship = new Ship();
        expect(ship).toHaveProperty('currentPort');
    });

    it('has a previous port property', () => {
        const ship = new Ship();
        expect(ship).toHaveProperty('previousPort');
    });

    it('has an itinerary', () => {
        const itinerary = new Itinerary();
        const ship = new Ship(itinerary);
        expect(ship.itinerary).toBe(itinerary);
    });
});

describe('docking', () => {
    it('docks at next port in itinerary', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        ship.dock();
        expect(ship.currentPort).toBe(port1);
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
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        ship.dock();
        ship.setSail();
        expect(ship.previousPort).toBe(port1);
    });
});