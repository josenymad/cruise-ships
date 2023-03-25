const Itinerary = require('../src/itinerary');

describe('itinerary constructor', () => {
    it('is an object', () => {
        const itinerary = new Itinerary();
        expect(itinerary).toBeInstanceOf(Object);
    });

    it('has a ports property', () => {
        const itinerary = new Itinerary();
        expect(itinerary).toHaveProperty('ports');
    });

    it('ports property defaults to an empty array whne nothing is passed', () => {
        const itinerary = new Itinerary();
        expect(itinerary.ports).toStrictEqual([]);
    })

    it('takes an array of ports and adds them to ports property', () => {
        const port1 = jest.fn();
        const port2 = jest.fn();
        const itinerary = new Itinerary([port1, port2]);
        expect(itinerary.ports).toStrictEqual([port1, port2]);
    });
});