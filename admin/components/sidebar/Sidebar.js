import { Fragment, Children, cloneElement } from 'react';
import { Transition } from '@headlessui/react';
import Cross from '../../../icons/Cross';
import useOnClickOutside from '../../../hooks/useOnClickOutside';

export default function Sidebar({ isOpen, onClose, children }) {
  const clickRef = useOnClickOutside(() => {
    if (isOpen) {
      onClose();
    }
  });

  return (
    <Fragment>
      <Transition show={isOpen}>
        <aside className="md:hidden">
          <div className="fixed inset-0 flex z-40">
            <Transition.Child
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              {(ref) => (
                <div ref={ref} className="fixed inset-0">
                  <div className="absolute inset-0 bg-gray-600 opacity-75"></div>
                </div>
              )}
            </Transition.Child>

            <Transition.Child
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              {(ref) => (
                <Fragment>
                  <div
                    className="relative flex-1 flex flex-col max-w-xs w-full bg-white dark:bg-gray-800"
                    ref={ref}
                  >
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                      <button
                        onClick={onClose}
                        className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      >
                        <span className="sr-only">Close sidebar</span>
                        <Cross className="h-6 w-6 text-white" />
                      </button>
                    </div>
                    <div
                      className="flex-1 h-0 pt-5 pb-4 overflow-y-auto"
                      ref={clickRef}
                    >
                      <div className="flex-shrink-0 flex items-center px-4">
                        <img
                          className="h-8 w-auto"
                          src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                          alt="Workflow"
                        />
                      </div>
                      <nav className="mt-5 px-2">
                        {Children.map(children, (child) =>
                          cloneElement(child, { mobile: true })
                        )}
                      </nav>
                    </div>
                  </div>
                  <div className="flex-shrink-0 w-14">
                    {/* <!-- Force sidebar to shrink to fit close icon --> */}
                  </div>
                </Fragment>
              )}
            </Transition.Child>
          </div>
        </aside>
      </Transition>

      <aside className="hidden md:flex md:flex-shrink-0">
        <div className="flex flex-col w-64">
          <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-800">
            <div className="flex-1 flex flex-col pt-5 pb-4 overflow-y-auto">
              <div className="flex items-center flex-shrink-0 px-4">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                  alt="Workflow"
                />
              </div>
              <nav className="flex-1 px-2">{children}</nav>
            </div>
          </div>
        </div>
      </aside>
    </Fragment>
  );
}
