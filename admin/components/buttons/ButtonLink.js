import { cloneElement } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { getStyle } from './Button';

export default function ButtonLink({
  className,
  href,
  icon,
  highlight = false,
  children,
}) {
  const classes = getStyle(className, highlight, icon);

  return (
    <Link href={href}>
      <a className={classes}>
        {icon &&
          cloneElement(icon, {
            className: classnames('-ml-1 mr-3 h-5 w-5', icon.props.className),
          })}
        {children}
      </a>
    </Link>
  );
}
