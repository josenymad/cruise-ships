const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('Ships', () => {
    let port1;
    let port2;
    let port3;
    let itinerary;
    let ship;

    beforeEach(() => {
        port1 = new Port('Port 1');
        port2 = new Port('Port 2');
        port3 = new Port('Port 3');
        itinerary = new Itinerary([port1, port2, port3]);
        ship = new Ship(itinerary);
    });

    describe('cruise ship constructor', () => {
        it('is an object', () => {
            expect(ship).toBeInstanceOf(Object);
        });

        it('has a current port property', () => {
            expect(ship).toHaveProperty('currentPort');
        });

        it('has a previous port property', () => {
            expect(ship).toHaveProperty('previousPort');
        });

        it('has an itinerary', () => {
            expect(ship.itinerary).toBe(itinerary);
        });

        it('has a starting port', () => {
            expect(ship.currentPort).toBe(port1);
        });

        it('has an itinerary count property', () => {
            expect(ship).toHaveProperty('itineraryCount');
        });

        it('keeps track of itinerary progress', () => {
            ship.setSail();
            expect(ship.itineraryCount).toBe(1);

            ship.dock();
            ship.setSail();
            expect(ship.itineraryCount).toBe(2);
        });

        it('gets added to port on instantiation', () => {
            expect(port1.ships).toContain(ship);
        });
    });

    describe('set sail', () => {
        it('can set sail', () => {
            ship.setSail();
            expect(ship.currentPort).toBeFalsy();
        });

        it('sets previous port property to the current port', () => {
            ship.setSail();
            expect(ship.previousPort).toBe(port1);
        });

        it('cannot sail further than its itinerary', () => {
            ship.setSail();
            ship.dock();
            ship.setSail();
            ship.dock();
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });

        it('removes ship from previous port\'s ships array', () => {
            ship.setSail();
            expect(port1.ships).not.toContain(ship);
        });
    });

    describe('docking', () => {
        it('docks at next port in itinerary', () => {
            ship.setSail();
            ship.dock();
            ship.setSail();
            ship.dock();
            expect(ship.currentPort).toBe(port3);
        });

        it('adds ship to port\'s ships array', () => {
            ship.setSail();
            ship.dock();
            expect(port2.ships).toContain(ship);
        });
    });
});