class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
    }
    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort = null;
    }
    dock() {
        this.currentPort = this.itinerary.ports[1];
    }
}

module.exports = Ship;