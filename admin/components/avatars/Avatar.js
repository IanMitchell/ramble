import classnames from 'classnames';

export const AvatarSizes = {
  SMALL: 'h-6 w-6',
  MEDIUM: 'h-8 w-8',
  LARGE: 'h-12 w-12',
};

export default function Avatar({
  name,
  src,
  placeholder,
  alt,
  size = AvatarSizes.MEDIUM,
  className,
}) {
  const classes = classnames('rounded-full', size, className);

  if (!src && !placeholder) {
    return (
      <span class="inline-block h-8 w-8 rounded-full overflow-hidden bg-gray-100">
        <svg
          className="h-full w-full text-gray-300"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      </span>
    );
  }

  if (!src) {
    return (
      <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-gray-500">
        <span className="text-xs font-medium leading-none text-white">
          {placeholder}
        </span>
      </span>
    );
  }

  return <img className={classes} src={src} alt={alt ?? `${name}'s Avatar`} />;
}
