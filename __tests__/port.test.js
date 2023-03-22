const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('port constructor', () => {
    it('port is an object', () => {
        const port = new Port();
        expect(port).toBeInstanceOf(Object);
    });

    it('port has a name', () => {
        const port1 = new Port('Port 1');
        expect(port1.name).toBe('Port 1');
    });

    it('has a ships property', () => {
        const port1 = new Port('Port 1');
        expect(port1).toHaveProperty('ships');
    });
});

describe('method to add ships which have docked', () => {
    it('checks the ship to add has docked at port', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(port1.addShip(ship)).toEqual('This ship is not currently docked at this port');
    });

    it('adds docked ship to ships property array', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        port2.addShip(ship);
        expect(port2.ships).toContain(ship);
    });
});

describe('method to remove ships which have set sail', () => {
    it('checks ship has set sail before removing from ships array', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const port3 = new Port('Port 3');
        const itinerary = new Itinerary([port1, port2, port3]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        port2.addShip(ship);
        expect(port2.removeShip(ship)).toEqual('This ship is still docked at this port');
    });

    it('removes a ship which set sail from ships property array', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const port3 = new Port('Port 3');
        const itinerary = new Itinerary([port1, port2, port3]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        port2.addShip(ship);
        ship.setSail();
        port2.removeShip(ship);
        expect(port2.ships).not.toContain(ship);
    });
});