class Vehicle {
  protected speed: number;
  protected brakeWorking: boolean;

  constructor(speed: number, brakeWorking: boolean) {
    this.speed = speed;
    this.brakeWorking = brakeWorking;
  }

  accelerate(): void {
    console.log('Shoong!');
  }
  brake(): void {
    console.log('Slowing down..');
  }
}

class Bicycle extends Vehicle {
  constructor(speed: number, brakeWorking: boolean = true) {
    super(speed, brakeWorking);
  }

  //can have more behavior, but can't have more state.
  // if want more state -> add to the parent class
  ringBell(): void {
    console.log('Ding Ding');
  }
}

class Car extends Vehicle {
  constructor(speed: number, brakeWorking: boolean = true) {
    super(speed, brakeWorking);
    this.brakeWorking = brakeWorking;
  }

  brake(): void {
    if (this.brakeWorking) return super.brake();
    console.log(`Can't break, Heelp!`);
  }
}

function drive(vehicle: Vehicle) {
  vehicle.accelerate();
  vehicle.brake();
}

// Start
const car = new Car(100, false);
console.log(drive(car));
