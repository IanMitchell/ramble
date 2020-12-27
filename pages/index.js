import { Fragment } from 'react';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Grid from '../components/Grid';
import serializePosts from '../lib/serializers/post';

function formatDate(json) {
  const date = new Date(json);

  return `${date.getMonth() + 1}/${date.getDate().toString().padEnd('0', 2)}`;
}

export default function Home({ posts }) {
  return (
    <Fragment>
      <Header>
        <div className="mt-8 mb-8 text-white">
          <h1 className="text-4xl tracking-tight font-extrabold lg:text-5xl xl:text-6xl">
            <Link href="/">
              <a>Ramble</a>
            </Link>
          </h1>
          <p className="mt-3 text-base sm:text-xl lg:text-lg xl:text-xl">
            Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
            lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
            fugiat aliqua ad ad non deserunt sunt.
          </p>
        </div>
      </Header>
      <main className="mt-8">
        <ul>
          {posts.map(({ title, slug, publishedAt }) => (
            <li key={slug} className="mt-8 text-2xl">
              <Grid className="flex items-center">
                <span className="block text-right text-sm">
                  {formatDate(publishedAt)}
                </span>
                <span className="col-span-6">
                  <Link href={`/blog/${slug}`}>
                    <a className="border-b-2 text-cyan-600 border-cyan-200 hover:text-light-blue-500 hover:border-light-blue-500">
                      {title}
                    </a>
                  </Link>
                </span>
              </Grid>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany({
    orderBy: {
      publishedAt: 'desc',
    },
  });

  return {
    props: {
      posts: serializePosts(...posts),
    },
  };
}
