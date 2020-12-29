import { cloneElement } from 'react';
import Link from 'next/link';
import classnames from 'classnames';
import { getStyle } from './Button';

export function ButtonExternalLink({
  className,
  icon,
  highlight = false,
  children,
  ...props
}) {
  const classes = getStyle(className, highlight, icon);

  return (
    <a className={classes} {...props}>
      {icon &&
        cloneElement(icon, {
          className: classnames('-ml-1 mr-3 h-5 w-5', icon.props.className),
        })}
      {children}
    </a>
  );
}

export default function ButtonLink({
  className,
  href,
  icon,
  highlight = false,
  children,
}) {
  return (
    <Link href={href} passHref>
      <ButtonExternalLink
        className={className}
        icon={icon}
        highlight={highlight}
      >
        {children}
      </ButtonExternalLink>
    </Link>
  );
}
