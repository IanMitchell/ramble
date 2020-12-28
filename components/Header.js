import classnames from 'classnames';
import Grid from './Grid';

export default function Header({
  gradient = 'from-blue-400 via-light-blue-500 to-cyan-500',
  className,
  children,
}) {
  const classes = classnames('bg-gradient-to-r p-8', gradient, className);

  return (
    <header className={classes}>
      <Grid>
        <div className="col-start-2 col-span-6">{children}</div>
      </Grid>
    </header>
  );
}
