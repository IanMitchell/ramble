import { Children, cloneElement } from 'react';

export default function SidebarGroup({ title, children, mobile }) {
  return (
    <div className="mt-8">
      {title && (
        <h3 className="px-3 text-xs font-semibold text-gray-500 uppercase tracking-wider">
          {title}
        </h3>
      )}
      <div className="mt-1 space-y-1">
        {Children.map(children, (child) => cloneElement(child, { mobile }))}
      </div>
    </div>
  );
}
