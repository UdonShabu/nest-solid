interface Shape {
  calculateArea(): number;
}

class Rectangle implements Shape {
  public width: number;
  public height: number;

  constructor(width: number, height: number) {
    this.width = width;
    this.height = height;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Circle {
  public radius: number;

  constructor(radius: number) {
    this.radius = radius;
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class AreaCalculator {
  //why have this?
  public calculateArea(shape: Shape): number {
    return shape.calculateArea();
  }
}

function clientCode() {
  const circle = new Circle(2);
  console.log(circle.calculateArea());
}
