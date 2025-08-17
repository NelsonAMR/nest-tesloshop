import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}

  async executeSeed() {
    await this.createInitialData();
    return 'Seed executed successfully';
  }

  private async createInitialData() {
    await this.productsService.deleteAllProducts();
  }
}
