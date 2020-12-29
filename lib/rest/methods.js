export function unsupportedMethod(request, response, allowList) {
  response.setHeader('Allow', allowList);
  return response
    .status(405)
    .json({ error: `Method ${request.method} Not Allowed` });
}
