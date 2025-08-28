import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { GameSession } from './GameSession';

export enum GameRoomStatus {
  WAITING = 'waiting',
  IN_PROGRESS = 'in_progress',
  FINISHED = 'finished',
  CANCELLED = 'cancelled'
}

export enum GameMode {
  CLASSIC = 'classic',
  TIME_LIMIT = 'time_limit',
  SCORE_TARGET = 'score_target'
}

@Entity()
export class GameRoom {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  code: string; // 6-character join code

  @Column()
  hostId: string;

  @Column({ default: 'Anonymous Host' })
  hostName: string;

  @Column({ type: 'enum', enum: GameRoomStatus, default: GameRoomStatus.WAITING })
  status: GameRoomStatus;

  @Column({ type: 'enum', enum: GameMode, default: GameMode.CLASSIC })
  mode: GameMode;

  @Column({ default: 6 })
  maxPlayers: number;

  @Column({ default: 1 })
  currentPlayerCount: number;

  @Column({ nullable: true })
  dayNumber: number;

  @Column({ nullable: true })
  startedAt: Date;

  @Column({ nullable: true })
  finishedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  // Relations
  @OneToMany(() => GameSession, (session) => session.gameRoom)
  sessions: GameSession[];
}