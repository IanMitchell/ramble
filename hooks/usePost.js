import useSWR from 'swr';

export default function usePost(id) {
  const { data, error, mutate } = useSWR(`/api/posts/${id}`);

  return {
    post: data?.post,
    isLoading: !error && !data,
    mutate,
    error,
  };
}
