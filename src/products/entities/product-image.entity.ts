import {
  Column,
  Entity,
  ForeignKey,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Product } from './product.entity';

@Entity()
export class ProductImage {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', unique: true, length: 255 })
  url: string;

  @ManyToOne(() => Product, (product) => product.images)
  product: Product;
}
