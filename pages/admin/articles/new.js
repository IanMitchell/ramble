import { useState } from 'react';
import MarkdownEditor from 'rich-markdown-editor';
import Editor from '../../../admin/layouts/Editor';
import useAutoResize from '../../ ../../../hooks/useAutoResize';
import debounce from '../../../lib/debounce';
import ArticleStage from '../../../admin/constants/articles';

export default function AdminNewPost() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState('');
  const titleRef = useAutoResize(title);

  const onImageUpload = async (file) => {
    console.log('Image Upload');
    return Promise.resolve('https://ianmitchell.dev/ian.jpg');
  };

  const onChange = debounce((value) => {
    setContent(value());
    console.log(content);
  }, 250);

  const onSave = async () => {
    await fetch('/api/posts', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    // TODO: Replace with a notification
    router.push('/admin/articles');
  };

  return (
    <Editor stage={ArticleStage.DRAFT} onSave={onSave}>
      <section className="max-w-screen-sm m-auto mt-12">
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
            uploadImage={onImageUpload}
            onChange={onChange}
          />
        </main>
      </section>
    </Editor>
  );
}
