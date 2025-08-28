import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToOne, OneToMany, JoinColumn } from 'typeorm';
import { User } from './User';
import { Gang } from './Gang';
import { Inventory } from './Inventory';

export enum PlayerRole {
  DON = 'don',
  UNDERBOSS = 'underboss',
  SOLDIER = 'soldier',
  CIVILIAN = 'civilian'
}

export enum PlayerStatus {
  ACTIVE = 'active',
  DEAD = 'dead',
  JAILED = 'jailed',
  HOSPITALIZED = 'hospitalized'
}

@Entity()
export class Player {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  username: string;

  @Column({ default: 1 })
  level: number;

  @Column({ default: 0 })
  experience: number;

  // Stats (Phase 2 features)
  @Column({ default: 10 })
  strength: number;

  @Column({ default: 10 })
  intelligence: number;

  @Column({ default: 10 })
  stealth: number;

  @Column({ default: 10 })
  reputation: number;

  // Resources
  @Column({ default: 1000 })
  money: number;

  @Column({ default: 100 })
  energy: number;

  @Column({ default: 100 })
  maxEnergy: number;

  // Status
  @Column({ type: 'enum', enum: PlayerStatus, default: PlayerStatus.ACTIVE })
  status: PlayerStatus;

  @Column({ type: 'enum', enum: PlayerRole, nullable: true })
  roleInGang: PlayerRole;

  @Column({ nullable: true })
  joinedGangAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations
  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'userId' })
  user: User;

  @ManyToOne(() => Gang, (gang) => gang.players, { nullable: true })
  gang: Gang;

  @OneToOne(() => Inventory)
  @JoinColumn()
  inventory: Inventory;
}