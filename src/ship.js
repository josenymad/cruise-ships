class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.currentPort = null;
        this.previousPort = null;
    }
    setSail() {
        this.previousPort = this.currentPort;
        this.currentPort = null;
    }
    dock() {
        this.currentPort = this.itinerary.ports[0];
    }
}

module.exports = Ship;