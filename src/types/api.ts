// API Response types
export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
}

// Auth API types
export interface RegisterRequest {
  username: string;
  email?: string;
  password: string;
}

export interface LoginRequest {
  usernameOrEmail: string;
  password: string;
}

export interface AuthUser {
  id: number;
  username: string;
  email?: string | null;
  money: string;
  respect: number;
  level: number;
  health: number;
  energy: number;
}

export interface RegisterResponse {
  user: AuthUser;
}

export interface LoginResponse {
  token: string;
  user: AuthUser;
}

// Validation error types
export interface ValidationError {
  field: string;
  message: string;
}

// JWT payload type
export interface JWTPayload {
  userId: number;
  username: string;
  email?: string | null;
  iat?: number;
  exp?: number;
}