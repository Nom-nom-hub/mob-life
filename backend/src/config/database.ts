import { DataSource } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from '../models/User';
import { Player } from '../models/Player';
import { Gang } from '../models/Gang';
import { GameRoom } from '../models/GameRoom';
import { GameSession } from '../models/GameSession';
import { Action } from '../models/Action';
import { Territory } from '../models/Territory';
import { Inventory } from '../models/Inventory';
import { Item } from '../models/Item';
import { Message } from '../models/Message';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: parseInt(process.env.DB_PORT || '5432'),
  username: process.env.DB_USERNAME || 'postgres',
  password: process.env.DB_PASSWORD || 'password',
  database: process.env.DB_NAME || 'mob_life',
  synchronize: process.env.NODE_ENV !== 'production',
  logging: false,
  entities: [
    User,
    Player,
    Gang,
    GameRoom,
    GameSession,
    Action,
    Territory,
    Inventory,
    Item,
    Message
  ],
  migrations: ['src/migrations/*.ts'],
  subscribers: [],
});