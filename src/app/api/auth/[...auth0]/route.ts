import { handleAuth, handleLogin, handleLogout, handleCallback } from '@auth0/nextjs-auth0';
import type { NextApiRequest, NextApiResponse } from 'next';

export const GET = handleAuth({
  async login(req: NextApiRequest, res: NextApiResponse) {
    // vai pro dashboard
    return handleLogin(req, res, {
      returnTo: '/Dashboard',
    });
  },

  async logout(req: NextApiRequest, res: NextApiResponse) {
    // volta pra home
    return handleLogout(req, res, {
      returnTo: '/',
    });
  },

  callback: handleCallback,
});
