import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      username: string;
      email?: string | null;
      money: string;
      respect: number;
      level: number;
      health: number;
      energy: number;
    };
  }

  interface User {
    id: string;
    username: string;
    email?: string | null;
    money: string;
    respect: number;
    level: number;
    health: number;
    energy: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    username: string;
    money: string;
    respect: number;
    level: number;
    health: number;
    energy: number;
  }
}