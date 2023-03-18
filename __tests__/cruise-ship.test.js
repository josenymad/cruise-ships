const CruiseShip = require('../src/cruise-ship');

describe('cruise ship constructor', () => {
    it('creating cruise ship as an object', () => {
        const cruiseShip = new CruiseShip();
        expect(cruiseShip).toBeInstanceOf(Object);
    });

    it('gives cruise ship a starting port', () => {
        const cruiseShip = new CruiseShip('Port Able');
        expect(cruiseShip.startingPort).toBe('Port Able');
    });
});