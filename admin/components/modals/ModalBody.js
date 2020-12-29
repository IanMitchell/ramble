import { forwardRef } from 'react';
import useOnClickOutside from '../../../hooks/useOnClickOutside';
import CrossIcon from '../../../icons/Cross';

export default forwardRef(({ isOpen, onClose, children }, ref) => {
  useOnClickOutside(
    () => {
      if (isOpen) {
        onClose();
      }
    },
    true,
    ref
  );

  return (
    <div
      ref={ref}
      className="inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
    >
      <div class="hidden sm:block absolute top-0 right-0 pt-4 pr-4">
        <button
          type="button"
          onClick={onClose}
          class="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span class="sr-only">Close</span>
          <CrossIcon className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      {children}
    </div>
  );
});
