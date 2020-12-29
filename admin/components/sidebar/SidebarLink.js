import { cloneElement } from 'react';
import Link from 'next/link';
import classnames from 'classnames';

export default function SidebarLink({
  href,
  icon,
  count,
  active,
  mobile = false,
  children,
}) {
  const linkClasses = classnames(
    'group flex items-center px-3 py-2 font-medium rounded-md',
    {
      'bg-gray-200 text-gray-900 dark:bg-gray-900 dark:text-white': active,
      'text-gray-600 hover:bg-gray-50 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white': !active,
      'text-sm': !mobile,
      'text-base': mobile,
    }
  );

  const iconClasses = classnames('flex-shrink-0 -ml-1 mr-3', {
    'text-gray-500 dark:text-gray-300': active,
    'text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-300': !active,
    'h-4 w-4': !mobile,
    'h-6 w-6': mobile,
  });

  const badgeClasses = classnames(
    'ml-auto inline-block py-0.5 px-3 text-xs rounded-full',
    {
      'bg-white dark:bg-black': active,
      'bg-gray-100 group-hover:bg-gray-200 dark:bg-gray-900 dark:group-hover:bg-gray-800': !active,
    }
  );

  return (
    <Link href={href}>
      <a className={linkClasses}>
        {cloneElement(icon, { className: iconClasses })}
        <span className="truncate">{children}</span>
        {count && <span className={badgeClasses}>{count}</span>}
      </a>
    </Link>
  );
}
