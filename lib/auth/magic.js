import MagicLoginStrategy from "passport-magic-login";
import { PrismaClient } from "@prisma/client";
import sendEmail from "../email/send";

const prisma = new PrismaClient();

export default new MagicLoginStrategy({
  secret: process.env.MAGIC_LINK_SECRET,
  callbackUrl: "/api/auth/user",
  sendMagicLink: async (destination, href) => {
    sendEmail({ to: destination, subject: "Login Link", body: href });
  },
  verify: async (payload, callback) => {
    const user = prisma.user.findUnique({
      where: {
        email: payload.destination,
      },
    });

    if (!user) {
      callback(new Error("Unknown User"));
    }

    callback(null, user);
  },
});
