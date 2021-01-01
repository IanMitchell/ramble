import { Fragment } from 'react';
import Link from 'next/link';
import { PrismaClient } from '@prisma/client';
import Header from '../../components/Header';
import LeftArrowIcon from '../../icons/LeftArrow';
import Grid from '../../components/Grid';
import Footer from '../../components/Footer';

export default function Post({ title, content }) {
  return (
    <Fragment>
      <Header>
        <Link href="/">
          <a className="inline-flex items-center px-4 py-2 text-base font-medium rounded-md text-white bg-opacity-25 bg-white hover:bg-opacity-50 focus:outline-none focus:ring-2 focus:ring-offset-2">
            <LeftArrowIcon className="w-4 h-4 mr-2" />
            Home
          </a>
        </Link>

        <div className="mt-8 mb-8 text-white">
          <h1 className="text-4xl tracking-tight font-extrabold lg:text-5xl xl:text-6xl">
            {title}
          </h1>
        </div>
      </Header>
      <Grid className="mt-16">
        <main className="col-start-2 col-span-6 prose prose-xl">{content}</main>
      </Grid>
      <Footer />
    </Fragment>
  );
}

export async function getStaticProps({ params }) {
  const prisma = new PrismaClient();
  const post = await prisma.post.findUnique({
    where: {
      slug: params.post,
    },
  });

  return {
    props: {
      title: post.title,
      content: post.content,
    },
  };
}

export async function getStaticPaths() {
  const prisma = new PrismaClient();
  const posts = await prisma.post.findMany();

  return {
    paths: posts.map((post) => ({ params: { post: post.slug } })),
    fallback: false,
  };
}
