import { Injectable, NotFoundException } from '@nestjs/common';
import {
  Product,
  ProductType,
  Shirt,
  Shoes,
} from './interfaces/product.interface';

@Injectable()
export class ShippingService {
  calculateShippingCost(productType: string, distance: number) {
    const product = this.createProductInstance(productType);
    return product.calculateShippingCost(distance);
  }

  createProductInstance(productType: string): Product {
    switch (productType?.toLowerCase()) {
      case ProductType.shirt:
        return new Shirt();
      case ProductType.shoes:
        return new Shoes();
      default:
        throw new NotFoundException(`Sorry bro.`);
    }
  }
}
