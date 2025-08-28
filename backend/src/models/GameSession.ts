import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { GameRoom } from './GameRoom';

export enum SessionStatus {
  ACTIVE = 'active',
  DISCONNECTED = 'disconnected'
}

@Entity()
export class GameSession {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  userId: string;

  @Column()
  username: string;

  @Column({ type: 'enum', enum: SessionStatus, default: SessionStatus.ACTIVE })
  status: SessionStatus;

  @Column({ nullable: true })
  socketId: string;

  @Column({ nullable: true })
  joinedAt: Date;

  @Column({ nullable: true })
  disconnectedAt: Date;

  @CreateDateColumn()
  createdAt: Date;

  // Relations
  @ManyToOne(() => GameRoom, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'gameRoomId' })
  gameRoom: GameRoom;
}