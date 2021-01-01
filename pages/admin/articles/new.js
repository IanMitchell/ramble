import { useState } from 'react';
import MarkdownEditor from 'rich-markdown-editor';
import Editor from '../../../admin/layouts/Editor';
import useAutoResize from '../../ ../../../hooks/useAutoResize';
import debounce from '../../../lib/debounce';

export default function AdminNewPost() {
  const [title, setTitle] = useState(null);
  const [content, setContent] = useState('');
  const titleRef = useAutoResize(title);

  const onSaveTrigger = () => {
    console.log(content);
    onSave(content);
  };

  const onImageUpload = async (file) => {
    console.log('Image Upload');
    return Promise.resolve('https://ianmitchell.dev/ian.jpg');
  };

  const onChange = debounce((value) => {
    setContent(value());
    console.log(content);
  }, 250);

  return (
    <Editor>
      <section className="max-w-screen-sm m-auto mt-12">
        <header>
          <textarea
            ref={titleRef}
            placeholder="Post Title"
            onChange={setTitle}
            className="block w-full text-6xl leading-tight resize-none border-none outline-none font-bold overflow-hidden h-28 mb-12"
          >
            {title}
          </textarea>
        </header>
        <main class="prose sm:prose-sm lg:prose-lg xl:prose-xl 2xl:prose-2xl">
          <MarkdownEditor
            placeholder="Begin writing your article..."
            uploadImage={onImageUpload}
            onSave={onSaveTrigger}
            onChange={onChange}
          />
        </main>
      </section>
    </Editor>
  );
}
