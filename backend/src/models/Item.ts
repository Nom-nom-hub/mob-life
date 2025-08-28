import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum ItemType {
  WEAPON = 'weapon',
  DRUG = 'drug',
  VEHICLE = 'vehicle',
  PROPERTY = 'property',
  CONSUMABLE = 'consumable'
}

export enum ItemRarity {
  COMMON = 'common',
  UNCOMMON = 'uncommon',
  RARE = 'rare',
  EPIC = 'epic',
  LEGENDARY = 'legendary'
}

@Entity()
export class Item {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ type: 'enum', enum: ItemType })
  type: ItemType;

  @Column({ type: 'enum', enum: ItemRarity, default: ItemRarity.COMMON })
  rarity: ItemRarity;

  @Column({ default: 0 })
  baseValue: number;

  @Column({ nullable: true })
  stats: string; // JSON string for weapon damage, defense, etc.

  @CreateDateColumn()
  createdAt: Date;
}