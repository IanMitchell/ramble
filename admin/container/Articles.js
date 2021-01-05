import { Suspense } from 'react';
import Link from 'next/link';
import Calendar from '../../icons/Calendar';
import ChevronRight from '../../icons/ChevronRight';
import Avatar, { AvatarSizes } from '../components/avatars/Avatar';
import AvatarList from '../components/avatars/AvatarList';
import Spinner from '../components/Spinner';
import usePosts from '../../hooks/usePosts';
import formatDate from '../../lib/formatters/date';

function ArticleList() {
  const { posts } = usePosts();

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-y divide-gray-200">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/admin/articles/edit/${post.id}`}>
              <a className="block hover:bg-gray-50">
                <div className="px-4 py-4 flex items-center sm:px-6">
                  <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-sm font-medium text-indigo-600 truncate">
                        <p>{post.title}</p>
                        {/* <p className="ml-1 font-normal text-gray-500">
                        in Engineering, Tag, and List
                      </p> */}
                      </div>
                      <div className="mt-2 flex">
                        <div className="flex items-center text-sm text-gray-500">
                          <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                          <p>
                            Published{' '}
                            <time dateTime={post.publishedAt}>
                              {formatDate(post.publishedAt)}
                            </time>
                          </p>
                        </div>
                      </div>
                    </div>
                    {/* <div className="mt-4 flex-shrink-0 sm:mt-0">
                    <AvatarList size={AvatarSizes.SMALL}>
                      <Avatar src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                      <Avatar src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                      <Avatar src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80" />
                      <Avatar src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
                    </AvatarList>
                  </div> */}
                  </div>
                  <div className="ml-5 flex-shrink-0">
                    <ChevronRight className="h-5 w-5 text-gray-400" />
                  </div>
                </div>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ArticleListContainer(props) {
  return (
    <Suspense fallback={<Spinner center />}>
      <ArticleList {...props} />
    </Suspense>
  );
}
