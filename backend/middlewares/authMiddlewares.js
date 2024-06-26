import { auth } from '@auth/express';

export const isAuthenticated = async (req, res, next) => {
  const session = await auth(req);
  if (session) {
    req.user = session.user;
    next();
  } else {
    res.status(401).json({ message: "You must be signed in to view this page" });
  }
};