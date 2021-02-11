import { Children, cloneElement } from 'react';
import classnames from 'classnames';
import { AvatarSizes } from './Avatar';

export default function AvatarList({
  className,
  size = AvatarSizes.MEDIUM,
  children,
}) {
  const classes = classnames('flex overflow-hidden', className);

  return (
    <div className={classes}>
      {Children.map(children, (child, index) =>
        cloneElement(child, {
          size,
          className: classnames(
            'inline-block ring-2 ring-white',
            child.props.className,
            {
              '-ml-1': index > 0,
            }
          ),
        })
      )}
    </div>
  );
}
