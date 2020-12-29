export default function SidebarAccount() {
  return (
    <div className="flex-shrink-0 flex p-4 border-t border-gray-200 dark:border-gray-700 dark:bg-gray-700">
      <a href="#" className="flex-shrink-0 w-full group block">
        <div className="flex items-center">
          <div>
            <img
              class="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700 group-hover:text-gray-900 dark:text-white dark:group-hover:text-white">
              Tom Cook
            </p>
            <p className="text-xs font-medium text-gray-500 group-hover:text-gray-700 dark:text-gray-300 dark:group-hover:text-gray-200">
              View profile
            </p>
          </div>
        </div>
      </a>
    </div>
  );
}
