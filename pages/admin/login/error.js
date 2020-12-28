import { useRouter } from 'next/router';
import Alert, { AlertTypes } from '../../../admin/components/alerts/Alert';
import LoginLayout from '../../../admin/layouts/Login';
import useAuth from '../../../hooks/useAuth';

export default function AdminLoginError() {
  const router = useRouter();
  const { session } = useAuth(false);

  const error = router.query.error
    ? 'Something went wrong while signing in. Please try again.'
    : null;

  if (session) {
    debugger;
    router.push('/admin');
  }

  return (
    <LoginLayout>
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Error</h2>

      {error && (
        <Alert type={AlertTypes.ERROR} message={error} className="mt-8" />
      )}
    </LoginLayout>
  );
}
