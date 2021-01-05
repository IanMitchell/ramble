import classnames from 'classnames';

export const BadgeTypes = {
  SUCCESS: 'success',
  FAILURE: 'failure',
};

export default function Badge({ type = BadgeTypes.SUCCESS, children }) {
  const classes = classnames(
    'inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium',
    {
      'bg-red-100 text-red-800': type === BadgeTypes.FAILURE,
      'bg-green-100 text-green-800': type === BadgeTypes.SUCCESS,
    }
  );

  return <span className={classes}>{children}</span>;
}
