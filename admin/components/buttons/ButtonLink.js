import { cloneElement, forwardRef } from "react";
import Link from "next/link";
import classnames from "classnames";
import { getStyle } from "./Button";

export const ButtonExternalLink = forwardRef(
  ({ className, icon, highlight = false, children, ...props }, ref) => {
    const classes = getStyle(className, highlight, icon);

    return (
      // eslint-disable-next-line react/jsx-props-no-spreading
      <a className={classes} {...props} ref={ref}>
        {icon &&
          cloneElement(icon, {
            className: classnames("-ml-1 mr-3 h-5 w-5", icon.props.className),
          })}
        {children}
      </a>
    );
  }
);

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
