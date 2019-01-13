class Bus {
    _id: string;
    busNum: string;
    busName: string;
    destination: String;
    frequency: Number;
    date: Date;
    status: string;




    constructor() {
        this.busNum = ""
        this.busName = ""
        this.destination = ""
        this.frequency = 0
        this.date = new Date()
        this.status = ""


    }
}

export default Bus;