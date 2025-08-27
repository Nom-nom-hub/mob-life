import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        usernameOrEmail: { label: "Username or Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.usernameOrEmail || !credentials?.password) {
          return null;
        }

        try {
          const user = await prisma.user.findFirst({
            where: {
              OR: [
                { username: credentials.usernameOrEmail },
                { email: credentials.usernameOrEmail }
              ]
            }
          });

          if (!user) {
            return null;
          }

          const isPasswordValid = await bcrypt.compare(credentials.password, user.passwordHash);

          if (!isPasswordValid) {
            return null;
          }

          return {
            id: user.id.toString(),
            username: user.username,
            email: user.email,
            money: user.money.toString(),
            respect: user.respect,
            level: user.level,
            health: user.health,
            energy: user.energy,
          };
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      }
    })
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.money = user.money;
        token.respect = user.respect;
        token.level = user.level;
        token.health = user.health;
        token.energy = user.energy;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.sub!;
        session.user.username = token.username as string;
        session.user.money = token.money as string;
        session.user.respect = token.respect as number;
        session.user.level = token.level as number;
        session.user.health = token.health as number;
        session.user.energy = token.energy as number;
      }
      return session;
    }
  },
  pages: {
    signIn: "/auth/login",
  },
};