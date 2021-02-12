import passport from "passport";
import nextConnect from "next-connect";
import magicLogin from "../../../lib/auth/magic";

passport.use(magicLogin);

export default nextConnect().use(passport.initialize()).post(magicLogin.send);
