import { Fragment, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import MarkdownEditor from 'rich-markdown-editor';
import Editor from '../../../../admin/layouts/Editor';
import Spinner from '../../../../admin/components/Spinner';
import useAutoResize from '../../ ../../../../hooks/useAutoResize';
import debounce from '../../../../lib/debounce';
import usePost from '../../../../hooks/usePost';
import ArticleStage from '../../../../admin/constants/articles';

export default function AdminNewPost() {
  const router = useRouter();
  const { post, isLoading, mutate } = usePost(router.query.id);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const titleRef = useAutoResize(title);

  useEffect(() => {
    if (post) {
      setTitle(post.title);
    }
  }, [post]);

  const onChange = debounce((value) => {
    setContent(value());
    console.log(content);
  }, 250);

  const onSave = async () => {
    await fetch(`/api/posts/${router.query.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    mutate({ ...post, title, content });
    // TODO: Replace with a notification
    router.push('/admin/articles');
  };

  return (
    <Editor stage={ArticleStage.PUBLISHED} onSave={onSave}>
      <section className="max-w-screen-sm m-auto mt-12">
        {isLoading || !post ? (
          <Spinner center />
        ) : (
          <Fragment>
            <header>
              <textarea
                ref={titleRef}
                placeholder="Post Title"
                onChange={(event) => setTitle(event.target.value)}
                value={title}
                className="block w-full text-6xl leading-tight resize-none border-none outline-none shadow-none font-bold overflow-hidden h-28 mb-12"
              />
            </header>
            <main className="prose sm:prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl">
              <MarkdownEditor
                placeholder="Begin writing your article..."
                defaultValue={post.content}
                onChange={onChange}
              />
            </main>
          </Fragment>
        )}
      </section>
    </Editor>
  );
}
