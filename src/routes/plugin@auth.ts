import { serverAuth$ } from '@builder.io/qwik-auth';
import Discord from '@auth/core/providers/discord';
import type { Provider } from '@auth/core/providers';
import { PrismaClient } from '@prisma/client';
import { PrismaAdapter } from '@auth/prisma-adapter';

export const { onRequest, useAuthSession, useAuthSignin, useAuthSignout } =
  serverAuth$(({ env }) => ({
    secret: env.get('AUTH_SECRET'),
    trustHost: true,
    adapter: PrismaAdapter(new PrismaClient({ datasources: { db: { url: env.get('DATABASE_URL') } } })),
    providers: [
      Discord({
        clientId: env.get('DISCORD_ID')!,
        clientSecret: env.get('DISCORD_SECRET')!,
      }),
    ] as Provider[],
  }));
