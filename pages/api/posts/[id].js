import { PrismaClient } from "@prisma/client";
import nextConnect from "next-connect";
import serialize from "../../../lib/serializers/errors";

const read = async (request, response) => {
  try {
    const prisma = new PrismaClient();
    const post = await prisma.post.findUnique({
      where: {
        id: parseInt(request.query.id, 10),
      },
      select: {
        title: true,
        content: true,
        slug: true,
        publishedAt: true,
      },
    });

    return response.status(200).json({ post });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ errors: serialize(error) });
  }
};

const update = async (request, response) => {
  try {
    const prisma = new PrismaClient();

    const post = await prisma.post.update({
      where: {
        id: parseInt(request.query.id, 10),
      },
      data: {
        title: request.body.title,
        content: request.body.content,
      },
      select: {
        title: true,
        content: true,
        slug: true,
        publishedAt: true,
      },
    });

    return response.status(200).json({ post });
  } catch (error) {
    console.log(error);
    return response.status(500).json({ errors: serialize(error) });
  }
};

export default nextConnect().get(read).patch(update).put(update);
