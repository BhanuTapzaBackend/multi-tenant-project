// src/products/products.controller.ts

import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ProductsService } from './products.service';
import { TenantAuthenticationGuard } from 'src/guards/tenant-auth.guard';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiBearerAuth, // Import this
  ApiHeader,     // Import this
} from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';

@ApiTags('Products')
@ApiBearerAuth() // <-- ADD THIS: Tells Swagger to use the Bearer Token for this controller
@ApiHeader({     // <-- ADD THIS: Tells Swagger to require the x-tenant-id header
  name: 'x-tenant-id',
  required: true,
  description: 'The ID of the tenant you are accessing',
})
@UseGuards(TenantAuthenticationGuard)
@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  @ApiOperation({ summary: 'Get all products for the tenant' })
  @ApiResponse({ status: 200, description: 'Returns a list of products.' })
  getProducts() {
    return this.productsService.getProducts();
  }

  @Post()
  @ApiOperation({ summary: 'Create a new product for the tenant' })
  @ApiResponse({
    status: 201,
    description: 'The product has been successfully created.',
  })
  @ApiResponse({ status: 401, description: 'Unauthorized.' })
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }
}