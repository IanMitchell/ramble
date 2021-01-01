import dynamic from 'next/dynamic';
import Dashboard from '../../../admin/layouts/Dashboard';
import ButtonLink from '../../../admin/components/buttons/ButtonLink';
import useAuth from '../../../hooks/useAuth';
import PAGES from '../../../admin/constants/pages';
import PenIcon from '../../../icons/Pen';
import ErrorBoundary from '../../../admin/components/ErrorBoundary';

const ArticleContainer = dynamic(
  () => import('../../../admin/container/Articles'),
  {
    ssr: false,
  }
);

export default function AdminArticleList() {
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
      <ErrorBoundary fallback={<h1>Error!</h1>}>
        <ArticleContainer />
      </ErrorBoundary>
    </Dashboard>
  );
}
