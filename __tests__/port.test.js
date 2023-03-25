const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ports', () => {
    let port1;
    let itinerary;
    let ship;

    beforeEach(() => {
        port1 = new Port('Port 1');
        itinerary = new Itinerary([port1]);
        ship = new Ship(itinerary);
    });

    describe('port constructor', () => {
        it('port is an object', () => {
            expect(port1).toBeInstanceOf(Object);
        });

        it('port has a name', () => {
            expect(port1.name).toBe('Port 1');
        });

        it('has a ships property', () => {
            expect(port1).toHaveProperty('ships');
        });
    });
});

describe('Ports adding and removing ships', () => {
    let port1;
    let port2;
    let itinerary;
    let ship;

    beforeEach(() => {
        port1 = new Port('Port 1');
        port2 = new Port('Port 2');
        itinerary = new Itinerary([port1, port2]);
        ship = new Ship(itinerary);
    });

    describe('method to add ships which have docked', () => {
        it('checks the ship to add has docked at port', () => {
            ship.setSail();
            ship.dock();
            expect(port1.addShip(ship)).toEqual('This ship is not currently docked at this port');
        });

        it('adds docked ship to ships property array', () => {
            ship.setSail();
            ship.dock();
            expect(port2.ships).toContain(ship);
        });
    });

    describe('method to remove ship from ships array', () => {
        it('checks ship has set sail before removing from ships array', () => {
            ship.setSail();
            ship.dock();
            expect(port2.removeShip(ship)).toEqual('This ship is still docked at this port');
        });

        it('removes a ship which set sail from ships property array', () => {
            ship.setSail();
            ship.dock();
            expect(port1.ships).not.toContain(ship);
        });
    });
});