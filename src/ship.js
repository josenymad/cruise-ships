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
        this.itineraryCount += 1;
    }
    dock() {
        this.currentPort = this.itinerary.ports[this.itineraryCount];
    }
}

module.exports = Ship;