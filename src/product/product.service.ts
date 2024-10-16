import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { Product } from '@prisma/client';

@Injectable()
export class ProductService {
  constructor(private readonly databaseService: DatabaseService) {}

  async create(createProductDto: CreateProductDto): Promise<Product | null> {
    return this.databaseService.createEntity('Product', createProductDto);
  }

  async findAll(): Promise<Product[]> {
    return this.databaseService.findAllEntities('Product');
  }

  async findOne(id: number): Promise<Product | null> {
    return this.databaseService.findEntityById('Product', id);
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product | null> {
    return this.databaseService.updateEntity('Product', id, updateProductDto);
  }

  async remove(id: number): Promise<Product | null> {
    return this.databaseService.deleteEntity('Product', id);
  }
}
