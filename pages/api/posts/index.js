import { PrismaClient } from '@prisma/client';
import { unsupportedMethod } from '../../../lib/rest/methods';

const read = async (request, response) => {
  try {
    const prisma = new PrismaClient();
    const posts = await prisma.post.findMany({
      select: {
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

export default (request, response) => {
  switch (request.method) {
    case 'GET':
      return read(request, response);
    case 'POST':
      return null;
    default:
      return unsupportedMethod(request, response, ['GET', 'POST']);
  }
};
