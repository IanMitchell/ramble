import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import Adapters from 'next-auth/adapters';
import { PrismaClient } from '@prisma/client';
import sendVerificationRequest from '../../../lib/email/auth';

const prisma = new PrismaClient();

const options = {
  providers: [
    Providers.Email({
      from: process.env.EMAIL_FROM,
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      sendVerificationRequest: ({
        identifier: email,
        url,
        token,
        site,
        provider,
      }) => sendVerificationRequest(email, url, token, site, provider),
    }),
  ],
  pages: {
    signIn: '/admin/login',
    error: '/admin/login/error',
    verifyRequest: '/admin/login/verify',
  },
  adapter: Adapters.Prisma.Adapter({ prisma }),
  callbacks: {
    signIn: async (user, account, profile) => {
      console.log(user);
      console.log(account);
      console.log(profile);
      if (user.email === 'ian.mitchell@hey.com') {
        return Promise.resolve(true);
      }

      return Promise.resolve(false);
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
