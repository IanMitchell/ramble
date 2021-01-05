import { PrismaClient } from '@prisma/client';
import slug from '../../../lib/formatters/slug';
import { unsupportedMethod } from '../../../lib/rest/methods';
import serialize from '../../../lib/serializers/errors';

const read = async (request, response) => {
  try {
    const prisma = new PrismaClient();
    const posts = await prisma.post.findMany({
      select: {
        id: true,
        title: true,
        slug: true,
        publishedAt: true,
      },
      orderBy: {
        publishedAt: 'desc',
      },
    });

    return response.status(200).json({ posts });
  } catch (error) {
    return response.status(500).json({ errors: serialize(error) });
  }
};

const create = async (request, response) => {
  try {
    const prisma = new PrismaClient();

    const post = await prisma.post.create({
      data: {
        title: request.body.title,
        content: request.body.content,
        slug: slug(request.body.title),
        publishedAt: new Date(),
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

export default (request, response) => {
  switch (request.method) {
    case 'GET':
      return read(request, response);
    case 'POST':
      return create(request, response);
    default:
      return unsupportedMethod(request, response, ['GET', 'POST']);
  }
};
