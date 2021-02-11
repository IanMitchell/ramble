import { cloneElement } from "react";
import classnames from "classnames";
import { Transition } from "@headlessui/react";
import Cross from "../../../icons/Cross";
import useToggle from "../../../hooks/useToggle";

export default function Notification({
  icon,
  title,
  content,
  timeout,
  onClose,
}) {
  const { value: isOpen, set: setIsOpen } = useToggle(true);

  const close = () => {
    setIsOpen(false);
    setTimeout(onClose, 3000);
  };

  if (timeout) {
    setTimeout(close, timeout);
  }

  return (
    <Transition
      appear
      show={isOpen}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100 max-h-24"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
    >
      {(ref) => (
        <div
          ref={ref}
          className="w-full max-w-sm bg-white rounded-lg shadow-lg pointer-events-auto overflow-hidden ring-black ring-opacity-5 ring-1"
        >
          <div className="p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0">
                {cloneElement(icon, {
                  className: classnames("h-6, w-6", icon.props.className),
                })}
              </div>
              <div className="flex-1 ml-3 pt-0.5 w-0">
                <p className="text-gray-900 text-sm font-medium">{title}</p>
                <p className="mt-1 text-gray-500 text-sm">{content}</p>
              </div>
              <div className="flex flex-shrink-0 ml-4">
                <button
                  type="button"
                  className="inline-flex text-gray-400 hover:text-gray-500 bg-white rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
                  onClick={close}
                >
                  <span className="sr-only">Close</span>
                  <Cross className="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Transition>
  );
}
