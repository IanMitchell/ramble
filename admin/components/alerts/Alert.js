import classnames from 'classnames';
import CheckCircleIcon from '../../../icons/CheckCircle';
import AlertTriangle from '../../../icons/AlertTriangle';
import CrossCircle from '../../../icons/CrossCircle';
import InfoIcon from '../../../icons/Info';

export const AlertTypes = {
  INFO: 'info',
  SUCCESS: 'success',
  WARNING: 'warning',
  ERROR: 'error',
};

function getIcon(type) {
  switch (type) {
    case AlertTypes.SUCCESS:
      return <CheckCircleIcon className="h-5 w-5 text-green-400" />;
    case AlertTypes.WARNING:
      return <AlertTriangle className="h-5 w-5 text-yellow-400" />;
    case AlertTypes.ERROR:
      return <CrossCircle className="h-5 w-5 text-red-400" />;
    case AlertTypes.INFO:
    default:
      return <InfoIcon className="h-5 w-5 text-blue-400" />;
  }
}

export default function Alert({
  type = AlertTypes.INFO,
  message,
  action,
  className,
}) {
  const containerClasses = classnames(
    'rounded-md p-4',
    {
      'bg-blue-50': type === AlertTypes.INFO,
      'bg-green-50': type === AlertTypes.SUCCESS,
      'bg-yellow-50': type === AlertTypes.WARNING,
      'bg-red-50': type === AlertTypes.ERROR,
    },
    className
  );

  const textClasses = classnames('text-sm font-medium', {
    'text-blue-700': type === AlertTypes.INFO,
    'text-green-800': type === AlertTypes.SUCCESS,
    'text-yellow-700': type === AlertTypes.WARNING,
    'text-red-700': type === AlertTypes.ERROR,
  });

  return (
    <div className={containerClasses}>
      <div className="flex">
        <div className="flex-shrink-0">{getIcon(type)}</div>
        <div className="ml-3">
          <p className={textClasses}>{message}</p>
        </div>
        {action && (
          <div className="ml-auto pl-3">
            <div className="-mx-1.5 -my-1.5">{action}</div>
          </div>
        )}
      </div>
    </div>
  );
}
