import Dashboard from '../../admin/layouts/Dashboard';
import ButtonLink from '../../admin/components/buttons/ButtonLink';
import useAuth from '../../hooks/useAuth';
import PAGES from '../../admin/constants/pages';
import PenIcon from '../../icons/Pen';

export default function AdminDashboard() {
  const { session } = useAuth();

  return (
    <Dashboard
      title="Articles"
      active={PAGES.ARTICLES}
      actions={
        <ButtonLink href="/articles/new" icon={<PenIcon />} highlight>
          New Article
        </ButtonLink>
      }
    >
      <div class="border-4 border-dashed border-gray-200 rounded-lg h-96">
        <pre>Todo!</pre>
      </div>
    </Dashboard>
  );
}
