import { useRouter } from 'next/router';
import Dashboard from '../../admin/layouts/Dashboard';
import useAuth from '../../hooks/useAuth';
import PAGES from '../../admin/constants/pages';

export default function AdminDashboard() {
  const { session } = useAuth();

  return (
    <Dashboard title="Dashboard" active={PAGES.DASHBOARD}>
      <div className="border-4 border-dashed border-gray-200 rounded-lg h-96">
        <pre>{JSON.stringify(session)}</pre>
      </div>
    </Dashboard>
  );
}
