import useSWR from 'swr';

export default function usePostCount(filters) {
  const { data, error } = useSWR('/api/count/posts');

  return {
    postCount: data?.postCount,
    isLoading: !error && !data,
    error,
  };
}
