import { signIn } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useForm } from 'react-hook-form';
import Alert, { AlertTypes } from '../../../admin/components/alerts/Alert';
import LoginLayout from '../../../admin/layouts/Login';
import useAuth from '../../../hooks/useAuth';

export default function AdminLogin() {
  const router = useRouter();
  const { session } = useAuth(false);
  const { register, handleSubmit } = useForm();

  const error = router.query.error
    ? 'Something went wrong, please try again.'
    : null;

  if (session) {
    router.push('/admin');
  }

  const onSubmit = ({ email }) => {
    signIn('email', { email });
  };

  return (
    <LoginLayout>
      <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign in</h2>

      {error && (
        <Alert type={AlertTypes.ERROR} message={error} className="mt-8" />
      )}

      <div className="mt-8">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email address
            </label>
            <div className="mt-1">
              <input
                ref={register({ required: true })}
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Sign in
          </button>
        </form>
      </div>
    </LoginLayout>
  );
}
