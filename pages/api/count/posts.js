import { PrismaClient } from "@prisma/client";
import nextConnect from "next-connect";
import serialize from "../../../lib/serializers/errors";

const read = async (request, response) => {
  try {
    const prisma = new PrismaClient();
    const [published] = await Promise.all([prisma.post.count()]);

    return response.status(200).json({ postCount: { published } });
  } catch (error) {
    return response.status(500).json({ errors: serialize(error) });
  }
};

export default nextConnect().get(read);
