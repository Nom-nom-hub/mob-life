import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum ActionType {
  // Crime Actions
  HIT = 'hit',
  HEIST = 'heist',
  PROTECTION = 'protection',
  ESPIONAGE = 'espionage',
  SMUGGLING = 'smuggling',

  // Social Actions
  MESSAGE = 'message',
  GANG_INVITE = 'gang_invite',
  ALLEGIANCE = 'allegiance',
  BETRAYAL = 'betrayal',

  // Business Actions
  DRUG_DEAL = 'drug_deal',
  WEAPON_SALE = 'weapon_sale',
  PROPERTY_BUY = 'property_buy'
}

export enum ActionResult {
  SUCCESS = 'success',
  FAILURE = 'failure',
  PARTIAL = 'partial'
}

@Entity()
export class Action {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column({ type: 'enum', enum: ActionType })
  actionType: ActionType;

  @Column({ type: 'enum', enum: ActionResult, nullable: true })
  result: ActionResult;

  @Column({ type: 'json' })
  details: any; // Action-specific data

  @Column({ nullable: true })
  targetId: string;

  @Column({ default: 0 })
  reward: number;

  @Column({ nullable: true })
  penalty: number;

  @CreateDateColumn()
  timestamp: Date;
}