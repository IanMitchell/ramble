import useSWR from 'swr';

export default function usePosts(filters) {
  const { data, error } = useSWR('/api/posts', { suspense: true });

  return {
    posts: data?.posts,
    isLoading: !error && !data,
    error,
  };
}
