import { cloneElement } from 'react';
import classnames from 'classnames';

export function getStyle(className, highlight, icon) {
  return classnames(
    'inline-flex items-center  border rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500',
    className,
    {
      'border-gray-300 text-gray-700 bg-white hover:bg-gray-50 dark:border-transparent  dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700': !highlight,
      'border-transparent text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600': highlight,
      'px-4 py-2': icon == null,
      'px-3 py-2 leading-4': icon != null,
    }
  );
}

export default function Button({
  className,
  type = 'button',
  onClick,
  icon,
  highlight = false,
  children,
}) {
  const classes = getStyle(className, highlight, icon);

  return (
    <button type={type} className={classes} onClick={onClick}>
      {icon &&
        cloneElement(icon, {
          className: classnames('-ml-1 mr-3 h-5 w-5', icon.props.className),
        })}
      {children}
    </button>
  );
}
