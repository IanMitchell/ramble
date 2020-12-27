import classnames from 'classnames';

export default function Grid({ className, children }) {
  const classes = classnames(
    'grid gap-4 grid-cols-8 max-w-screen-lg m-auto',
    className
  );

  return <div className={classes}>{children}</div>;
}
