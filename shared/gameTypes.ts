export interface PlayerAction {
    playerId: string;
    targetId: string;
    actionType: 'kill' | 'protect' | 'investigate';
    turnNumber: number;
}