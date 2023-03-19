class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.itineraryCount = 0;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
    }
    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort = null;
        this.itineraryCount =+ 0.5;
    }
    dock() {
        const nextPort = this.itineraryCount + 0.5;
        this.currentPort = this.itinerary.ports[nextPort];
    }
}

module.exports = Ship;