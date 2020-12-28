import { useRouter } from 'next/router';
import { Fragment } from 'react';
import useAuth from '../../hooks/useAuth';

export default function AdminDashboard() {
  const { session } = useAuth();

  return (
    <Fragment>
      <h1>Admin Dashboard</h1>
      <pre>{JSON.stringify(session)}</pre>
    </Fragment>
  );
}
