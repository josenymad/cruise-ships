class Ship {
    constructor(itinerary) {
        this.itinerary = itinerary;
        this.itineraryCount = 0;
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this);
    }
    setSail() {
        if (this.itineraryCount >= (this.itinerary.ports.length - 1)) {
            throw new Error('End of itinerary reached');
        } else {
            this.previousPort = this.currentPort;
            this.currentPort = null;
            this.itineraryCount += 1;
            this.previousPort.removeShip(this);
        }
    }
    dock() {
        this.currentPort = this.itinerary.ports[this.itineraryCount];
        this.currentPort.addShip(this);
    }
}

module.exports = Ship;