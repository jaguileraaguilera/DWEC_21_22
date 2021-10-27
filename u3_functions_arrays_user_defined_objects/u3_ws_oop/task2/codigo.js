class Car {
    constructor(model, millesPerGallon){
        this.model = model;
        this.millesPerGallon = millesPerGallon;
        this.tank = 0;
        this.odometer = 0;
    }

    fill(gallons){
        this.tank += gallons;
    }

    drive(distance){
        let d_driven = 0;
        while ((this.tank > 0) && (d_driven < distance)){
            this.tank -= 1/this.millesPerGallon;
            d_driven += 1;
            this.odometer += 1;
        }
        if (Math.round(this.tank) === 0)
            this.tank = 0;
            return ("I ran out of fuel at " 
                    + this.odometer + " milles");
    }
}

f = new Car('ford', 5);
f.fill(5);
f.drive(10000);