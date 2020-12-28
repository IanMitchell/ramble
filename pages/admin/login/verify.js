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
    <LoginLayout>
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Email Sent</h2>
      <div className="mt-8">
        <p className="block text-sm font-medium text-gray-700">
          A sign in link has been sent to your email address.
        </p>
      </div>
    </LoginLayout>
  );
}
