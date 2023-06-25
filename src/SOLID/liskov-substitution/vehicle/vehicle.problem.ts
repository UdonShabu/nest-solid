// class Vehicle {
//   protected speed: number;

//   constructor(speed: number) {
//     this.speed = speed;
//   }

//   accelerate(): void {
//     // Acceleration logic
//   }

//   brake(): void {
//     // Braking logic
//   }
// }

// class Car extends Vehicle {
//   constructor(speed: number) {
//     super(speed);
//   }

//   openTrunk(): void {}

//   brake(): void {
//     throw new Error('Brakes malfunctioning!');
//   }
// }

// class Bicycle extends Vehicle {
//   constructor(speed: number) {
//     super(speed);
//   }

//   ringBell(): void {
//     console.log('Ding! Ding!');
//   }
// }

// function drive(vehicle: Vehicle): void {
//   vehicle.accelerate();
//   vehicle.brake();
// }

// const car = new Car(100);
// const bicycle = new Bicycle(20);

// drive(car); // Throws an error because the brakes malfunction
// drive(bicycle); // Executes without error
