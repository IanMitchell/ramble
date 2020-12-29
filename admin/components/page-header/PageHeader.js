import { Children, cloneElement } from 'react';
import classnames from 'classnames';

export default function PageHeader({ actions, children }) {
  return (
    <div class="md:flex md:items-center md:justify-between">
      <div class="flex-1 min-w-0">
        <h2 class="text-2xl font-bold leading-7 text-gray-900 dark:text-white sm:text-3xl sm:truncate">
          {children}
        </h2>
      </div>
      <div class="mt-4 flex md:mt-0 md:ml-4">
        {Children.map(actions, (child, i) =>
          cloneElement(actions, {
            mobile: true,
            className: classnames(child.props.className, {
              'ml-3': i > 0,
            }),
          })
        )}
      </div>
    </div>
  );
}
