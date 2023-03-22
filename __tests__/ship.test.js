const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe('cruise ship constructor', () => {
    it('is an object', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        expect(ship).toBeInstanceOf(Object);
    });

    it('has a current port property', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        expect(ship).toHaveProperty('currentPort');
    });

    it('has a previous port property', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        expect(ship).toHaveProperty('previousPort');
    });

    it('has an itinerary', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        expect(ship.itinerary).toBe(itinerary);
    });

    it('has a starting port', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        expect(ship.currentPort).toBe(port1);
    });

    it('has an itinerary count property', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        expect(ship).toHaveProperty('itineraryCount');
    });

    it('keeps track of itinerary progress', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const port3 = new Port('Port 3');
        const itinerary = new Itinerary([port1, port2, port3]);
        const ship = new Ship(itinerary);
        ship.setSail();
        expect(ship.itineraryCount).toBe(1);

        ship.dock();
        ship.setSail();
        expect(ship.itineraryCount).toBe(2);
    });

    it('gets added to port on instantiation', () => {
        const port1 = new Port('Port 1');
        const itinerary = new Itinerary([port1]);
        const ship = new Ship(itinerary);
        expect(port1.ships).toContain(ship);
    });
});

describe('set sail', () => {
    it('can set sail', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        ship.setSail();
        expect(ship.currentPort).toBeFalsy();
    });

    it('sets previous port property to the current port', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        ship.setSail();
        expect(ship.previousPort).toBe(port1);
    });

    it('cannot sail further than its itinerary', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(() => ship.setSail()).toThrowError('End of itinerary reached');
      });

      it('removes ship from previous port\'s ships array', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        ship.setSail();
        expect(port1.ships).not.toContain(ship);
      });
});

describe('docking', () => {
    it('docks at next port in itinerary', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const port3 = new Port('Port 3');
        const itinerary = new Itinerary([port1, port2, port3]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        ship.setSail();
        ship.dock();
        expect(ship.currentPort).toBe(port3);
    });

    it('adds ship to port\'s ships array', () => {
        const port1 = new Port('Port 1');
        const port2 = new Port('Port 2');
        const itinerary = new Itinerary([port1, port2]);
        const ship = new Ship(itinerary);
        ship.setSail();
        ship.dock();
        expect(port2.ships).toContain(ship);
    });
});