export default function serialize(...posts) {
  return posts.map((post) => ({
    ...post,
    publishedAt: post.publishedAt.toJSON(),
    createdAt: post.createdAt.toJSON(),
    updatedAt: post.updatedAt.toJSON(),
  }));
}
