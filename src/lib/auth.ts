import { betterAuth } from 'better-auth';
import { prismaAdapter } from 'better-auth/adapters/prisma';
import { prisma } from './prisma';
import config from '../config';

export const auth = betterAuth({
  database: prismaAdapter(prisma, {
    provider: 'postgresql',
  }),
  trustedOrigins: [config.appUrl!],
  user: {
    additionalFields: {
      role: { type: 'string', defaultValue: 'STUDENT', required: false },
      phone: { type: 'string', required: false },
      status: { type: 'string', defaultValue: 'ACTIVE', required: false },
      isBanned: { type: 'boolean', defaultValue: false, required: false },
      banReason: { type: 'string', required: false },
    },
  },
  emailAndPassword: {
    enabled: true,
    autoSignIn: false,
    requireEmailVerification: false,
  },
});
