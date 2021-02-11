import { Children, cloneElement } from 'react';
import classnames from 'classnames';

export default function PageHeader({ actions, children }) {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
          {children}
        </h2>
      </div>
      <div className="mt-4 flex md:mt-0 md:ml-4">
        {Children.map(actions, (child, index) =>
          cloneElement(child, {
            mobile: true,
            className: classnames(child.props.className, {
              'ml-3': index > 0,
            }),
          })
        )}
      </div>
    </div>
  );
}
