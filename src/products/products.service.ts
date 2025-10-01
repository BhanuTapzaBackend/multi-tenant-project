import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { Product } from './product.schema';
import { CreateProductDto } from './dto/create-product.dto';

@Injectable()
export class ProductsService {
  constructor(@Inject('PRODUCT_MODEL') private ProductModel: Model<Product>) {}

  async getProducts() {
    return this.ProductModel.find();
  }
  // Add this new method
  async createProduct(createProductDto: CreateProductDto): Promise<Product> {
    const newProduct = new this.ProductModel(createProductDto);
    return newProduct.save();
  }
}
