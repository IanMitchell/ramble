import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/router";
import MarkdownEditor from "rich-markdown-editor";
import Editor from "../../../../admin/layouts/Editor";
import Spinner from "../../../../admin/components/Spinner";
import useAutoResize from "../../../../hooks/useAutoResize";
import useNotification from "../../../../hooks/useNotification";
import debounce from "../../../../lib/debounce";
import usePost from "../../../../hooks/usePost";
import ArticleStage from "../../../../admin/constants/articles";
import CheckCircleIcon from "../../../../icons/CheckCircle";

export default function AdminNewPost() {
  const router = useRouter();
  const { post, isLoading, mutate } = usePost(router.query.id);
  const [title, setTitle] = useState();
  const [content, setContent] = useState();
  const titleRef = useAutoResize(title);
  const notify = useNotification();

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
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    mutate({ ...post, title, content });
    router.push("/admin/articles");
    notify({
      icon: <CheckCircleIcon className="text-green-400" />,
      title: "Post Updated!",
      content: `Your post "${title}" has been updated.`,
    });
  };

  return (
    <Editor stage={ArticleStage.PUBLISHED} onSave={onSave}>
      <section className="m-auto mt-12 max-w-screen-sm">
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
                className="block mb-12 w-full h-28 text-6xl font-bold leading-tight border-none outline-none shadow-none overflow-hidden resize-none"
              />
            </header>
            <main className="prose 2xl:prose-2xl sm:prose-sm lg:prose-lg xl:prose-xl">
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
