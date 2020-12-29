import useToggle from '../../hooks/useToggle';
import Home from '../../icons/Home';
import Info from '../../icons/Info';
import Menu from '../../icons/Menu';
import Sidebar from '../components/sidebar/Sidebar';
import SidebarGroup from '../components/sidebar/SidebarGroup';
import SidebarLink from '../components/sidebar/SidebarLink';

export default function Dashboard({ title, actions, active, children }) {
  const { value: isMobileMenuShown, set: setIsMobileMenuShown } = useToggle(
    false
  );

  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar
        isOpen={isMobileMenuShown}
        onClose={() => setIsMobileMenuShown(false)}
      >
        <SidebarGroup>
          <SidebarLink href="/admin" icon={<Home />} active={true} count={3}>
            Dashboard
          </SidebarLink>
          <SidebarLink href="/admin" icon={<Info />} active={false} count={13}>
            Test Link
          </SidebarLink>
        </SidebarGroup>

        <SidebarGroup title="Articles">
          <SidebarLink href="/admin" icon={<Home />} active={true} count={3}>
            Dashboard
          </SidebarLink>
          <SidebarLink href="/admin" icon={<Info />} active={false} count={13}>
            Test Link
          </SidebarLink>
        </SidebarGroup>
      </Sidebar>
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <div className="md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3">
          <button
            onClick={() => setIsMobileMenuShown(true)}
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
          >
            <span className="sr-only">Open sidebar</span>
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <main
          className="flex-1 relative z-0 overflow-y-auto focus:outline-none"
          tabindex="0"
        >
          <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-2xl font-semibold text-gray-900">{title}</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">{children}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
