export interface Product {
  calculateShippingCost(distance: number): number;
}

export class Shirt implements Product {
  calculateShippingCost(distance: number): number {
    return distance * 0.5;
  }
}
export class Shoes implements Product {
  calculateShippingCost(distance: number): number {
    return distance * 1.2;
  }
}

export enum ProductType {
  shirt = 'shirt',
  shoes = 'shoes',
}
