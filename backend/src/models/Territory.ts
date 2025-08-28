import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne } from 'typeorm';
import { Gang } from './Gang';

export enum TerritoryType {
  NEIGHBORHOOD = 'neighborhood',
  BLOCK = 'block',
  BUSINESS = 'business',
  WAREHOUSE = 'warehouse',
  CAR_MILL = 'car_mill',
  LAUNDROMAT = 'laundromat',
  NIGHTCLUB = 'nightclub',
  CASINO = 'casino'
}

@Entity()
export class Territory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ type: 'enum', enum: TerritoryType })
  type: TerritoryType;

  @Column({ default: 0 })
  influence: number; // 0-100, gang control level

  @Column({ default: 0 })
  income: number; // Daily income generated

  @Column({ default: 1 })
  risk: number; // Success risk modifier (0.1-3.0)

  @CreateDateColumn()
  createdAt: Date;

  // Relations
  @ManyToOne(() => Gang, { nullable: true })
  gang: Gang;
}