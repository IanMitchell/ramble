import { removeTokenCookie } from "../../../lib/auth/cookie";

export default async function logout(request, response) {
  removeTokenCookie(response);
  response.writeHead(302, { Location: "/" });
  response.end();
}
