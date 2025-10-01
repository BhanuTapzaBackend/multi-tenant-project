import { ApiProperty } from '@nestjs/swagger';

export class CreateProductDto {
  @ApiProperty({ example: 'Aspirin', description: 'The name of the product' })
  name: string;

  @ApiProperty({ example: 'A common pain reliever', description: 'A short description of the product' })
  description: string;

  @ApiProperty({ example: 9.99, description: 'The price of the product' })
  price: number;
}