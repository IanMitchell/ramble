import { useRouter } from 'next/router';
import { useSession } from 'next-auth/client';
import { useEffect } from 'react';

export default function AdminDashboard() {
  const router = useRouter();
  const [session] = useSession();

  useEffect(() => {
    if (!session) {
      router.push('/admin');
    }
  }, [router, session]);

  return <h1>Admin Dashboard</h1>;
}
