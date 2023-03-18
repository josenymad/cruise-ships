const Itinerary = require('../src/itinerary');

describe('itinerary constructor', () => {
    it('itinerary is an object', () => {
        const itinerary = new Itinerary();
        expect(itinerary).toBeInstanceOf(Object);
    });

    it('itinerary has a ports property', () => {
        const itinerary = new Itinerary();
        expect(itinerary).toHaveProperty('ports');
    });
});