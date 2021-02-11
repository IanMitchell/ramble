import useToggle from "../../hooks/useToggle";
import Sidebar from "../components/sidebar/Sidebar";
import SidebarGroup from "../components/sidebar/SidebarGroup";
import SidebarLink from "../components/sidebar/SidebarLink";
import PageHeader from "../components/page-header/PageHeader";
import HomeIcon from "../../icons/Home";
import ExternalLinkIcon from "../../icons/ExternalLink";
import RichTextIcon from "../../icons/RichText";
import PAGES from "../constants/pages";
import usePostCount from "../../hooks/usePostCount";
import AppHeader from "../components/app-header/AppHeader";

export default function Dashboard({ title, actions, active, children }) {
  const { value: isMobileMenuShown, set: setIsMobileMenuShown } = useToggle(
    false
  );
  const { postCount, isLoading: isPostCountLoading } = usePostCount();

  return (
    <div className="flex h-screen bg-gray-100 overflow-hidden">
      <Sidebar
        isOpen={isMobileMenuShown}
        onClose={() => setIsMobileMenuShown(false)}
      >
        <SidebarGroup className="mt-4">
          <SidebarLink
            href="/admin"
            icon={<HomeIcon />}
            active={active === PAGES.DASHBOARD}
          >
            Dashboard
          </SidebarLink>

          <SidebarLink href="/" icon={<ExternalLinkIcon />}>
            Site
          </SidebarLink>
        </SidebarGroup>

        <SidebarGroup title="Articles">
          <SidebarLink
            href="/admin/articles"
            icon={<RichTextIcon />}
            active={active === PAGES.ARTICLES}
            count={isPostCountLoading ? undefined : postCount.published}
          >
            All Articles
          </SidebarLink>
        </SidebarGroup>
      </Sidebar>

      <div className="flex flex-1 flex-col w-0 overflow-hidden">
        <AppHeader onMenuClick={() => setIsMobileMenuShown(true)} />

        <main
          className="relative z-0 flex-1 focus:outline-none overflow-y-auto"
          tabIndex="0"
        >
          <div className="py-6">
            <div className="mx-auto px-4 max-w-7xl sm:px-6 lg:px-8">
              <PageHeader actions={actions}>{title}</PageHeader>
            </div>
            <div className="mx-auto px-4 max-w-7xl sm:px-6 md:px-8">
              <div className="py-4">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
