import { PrismaClient } from "@prisma/client";
import { unsupportedMethod } from "../../../lib/rest/methods";
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

export default (request, response) => {
  switch (request.method) {
    case "GET":
      return read(request, response);
    default:
      return unsupportedMethod(request, response, ["GET"]);
  }
};
