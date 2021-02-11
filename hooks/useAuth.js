import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useSession } from 'next-auth/client';

export default function useAuth(
  redirect = true,
  redirectPath = '/admin/login'
) {
  const router = useRouter();
  const [session, loading] = useSession();

  useEffect(() => {
    debugger;
    if (redirect && !loading && !session) {
      router.push(redirectPath);
    }
  }, [redirect, loading, session, router, redirectPath]);

  return { session, loading };
}
