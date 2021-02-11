import { useState } from "react";
import { useRouter } from "next/router";
import MarkdownEditor from "rich-markdown-editor";
import Editor from "../../../admin/layouts/Editor";
import useAutoResize from "../../../hooks/useAutoResize";
import debounce from "../../../lib/debounce";
import ArticleStage from "../../../admin/constants/articles";
import CheckCircleIcon from "../../../icons/CheckCircle";
import useNotification from "../../../hooks/useNotification";

export default function AdminNewPost() {
  const router = useRouter();
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState("");
  const titleRef = useAutoResize(title);
  const notify = useNotification();

  const onChange = debounce((value) => {
    setContent(value());
    console.log(content);
  }, 250);

  const onSave = async () => {
    await fetch("/api/posts", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    router.push("/admin/articles");
    notify({
      icon: <CheckCircleIcon className="text-green-400" />,
      title: "Post Published!",
      content: "Your post has been published.",
    });
  };

  return (
    <Editor stage={ArticleStage.DRAFT} onSave={onSave}>
      <section className="m-auto mt-12 max-w-screen-sm">
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
            onChange={onChange}
          />
        </main>
      </section>
    </Editor>
  );
}
