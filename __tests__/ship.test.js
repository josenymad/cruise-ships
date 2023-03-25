const Ship = require('../src/ship');
const Port = require('../src/port');

describe('Ship instantiation', () => {
    let port1;
    let itinerary;
    let ship;

    beforeEach(() => {
        port1 = new Port('Port 1');
        itinerary = {
            ports: [port1],
        };
        ship = new Ship(itinerary);
    });

    describe('ship constructor', () => {
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

        it('has an itinerary count property starting at 0', () => {
            expect(ship.itineraryCount).toEqual(0);
        });
    });
});

describe('Ships sailing and docking', () => {
    let itinerary;
    let ship;

    beforeEach(() => {
        port1 = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Port 1',
            ships: [],
        };
        port2 = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            name: 'Port 2',
            ships: [],
        };
        itinerary = {
            ports: [port1, port2],
        };
        ship = new Ship(itinerary);
    });

    describe('ship constructor', () => {
        it('keeps track of itinerary progress', () => {
            ship.setSail();
            expect(ship.itineraryCount).toBe(1);
        });

        it('gets added to port on instantiation', () => {
            expect(port1.addShip).toHaveBeenCalledWith(ship);
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
            expect(() => ship.setSail()).toThrowError('End of itinerary reached');
        });

        it('removes ship from previous port\'s ships array', () => {
            ship.setSail();
            expect(port1.removeShip).toHaveBeenCalledWith(ship);
        });
    });

    describe('docking', () => {
        it('docks at next port in itinerary', () => {
            ship.setSail();
            ship.dock();
            expect(ship.currentPort).toBe(port2);
        });

        it('adds ship to port\'s ships array', () => {
            ship.setSail();
            ship.dock();
            expect(port2.addShip).toHaveBeenCalledWith(ship);
        });
    });
});