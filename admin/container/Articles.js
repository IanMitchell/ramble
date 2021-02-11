import { Suspense } from "react";
import Link from "next/link";
import Calendar from "../../icons/Calendar";
import ChevronRight from "../../icons/ChevronRight";
import Avatar, { AvatarSizes } from "../components/avatars/Avatar";
import AvatarList from "../components/avatars/AvatarList";
import Spinner from "../components/Spinner";
import usePosts from "../../hooks/usePosts";
import formatDate from "../../lib/formatters/date";

function ArticleList() {
  const { posts } = usePosts();

  return (
    <div className="bg-white shadow overflow-hidden sm:rounded-md">
      <ul className="divide-gray-200 divide-y">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link href={`/admin/articles/edit/${post.id}`}>
              <a className="block hover:bg-gray-50">
                <div className="flex items-center px-4 py-4 sm:px-6">
                  <div className="flex-1 min-w-0 sm:flex sm:items-center sm:justify-between">
                    <div>
                      <div className="flex text-indigo-600 text-sm font-medium truncate">
                        <p>{post.title}</p>
                        {/* <p className="ml-1 font-normal text-gray-500">
                        in Engineering, Tag, and List
                      </p> */}
                      </div>
                      <div className="flex mt-2">
                        <div className="flex items-center text-gray-500 text-sm">
                          <Calendar className="flex-shrink-0 mr-1.5 w-4 h-4 text-gray-400" />
                          <p>
                            Published{" "}
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
                  <div className="flex-shrink-0 ml-5">
                    <ChevronRight className="w-5 h-5 text-gray-400" />
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
