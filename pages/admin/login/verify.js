import { useRouter } from 'next/router';
import { useEffect } from 'react';
import LoginLayout from '../../../admin/layouts/Login';
import useAuth from '../../../hooks/useAuth';

export default function AdminLoginVerify() {
  const router = useRouter();
  const { session } = useAuth(false);

  useEffect(() => {
    if (session) {
      router.push('/admin');
    }
  });

  return (
    <LoginLayout title="Email sent">
      <div className="mt-8">
        <p className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          A sign in link has been sent to your email address.
        </p>
      </div>
    </LoginLayout>
  );
}
