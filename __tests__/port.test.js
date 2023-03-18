const Port = require('../src/port');

describe('port constructor', () => {
    it('port is an object', () => {
        const port = new Port();
        expect(port).toBeInstanceOf(Object);
    });

    it('port has a name', () => {
        const port1 = new Port('Port 1');
        expect(port1.name).toBe('Port 1');
    });
});