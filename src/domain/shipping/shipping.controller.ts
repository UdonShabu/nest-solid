import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { ShippingService } from './shipping.service';
import { GetShippingCostDto } from './dtos/getShippingCost.dto';

@Controller('shipping')
export class ShippingController {
  constructor(private readonly shippingService: ShippingService) {}

  @Post()
  async getShippingCost(@Body() dto: GetShippingCostDto) {
    return this.shippingService.calculateShippingCost(
      dto.productType,
      dto.distance,
    );
  }
}
