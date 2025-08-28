import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany, OneToOne, JoinColumn } from 'typeorm';
import { Player } from './Player';
import { Territory } from './Territory';

export enum GangPower {
  OUTCAST = 'outcast',
  MINOR = 'minor',
  GROWING = 'growing',
  ESTABLISHED = 'established',
  DOMINANT = 'dominant'
}

@Entity()
export class Gang {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ nullable: true })
  description: string;

  @Column({ default: '#666666' })
  color: string;

  @Column({ default: 0 })
  wealth: number;

  @Column({ default: 0 })
  reputation: number;

  @Column({ type: 'enum', enum: GangPower, default: GangPower.OUTCAST })
  powerLevel: GangPower;

  @Column({ default: 0 })
  membersCount: number;

  @Column({ nullable: true })
  bossId: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations
  @OneToMany(() => Player, (player) => player.gang)
  players: Player[];

  @OneToMany(() => Territory, (territory) => territory.gang)
  territories: Territory[];
}