import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

export enum MessageType {
  GLOBAL = 'global',
  GANG = 'gang',
  PRIVATE = 'private',
  SYSTEM = 'system'
}

@Entity()
export class Message {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  senderId: string;

  @Column()
  senderName: string;

  @Column({ type: 'enum', enum: MessageType, default: MessageType.GLOBAL })
  type: MessageType;

  @Column()
  content: string;

  @Column({ nullable: true })
  gameRoomId: string;

  @Column({ nullable: true })
  recipientId: string; // For private messages

  @CreateDateColumn()
  timestamp: Date;
}