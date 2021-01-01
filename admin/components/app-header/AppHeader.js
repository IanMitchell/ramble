import { Fragment } from 'react';
import { signOut, useSession } from 'next-auth/client';
import { FeedbackFish } from '@feedback-fish/react';
import MenuIcon from '../../../icons/Menu';
import HeartIcon from '../../../icons/Heart';
import LightbulbIcon from '../../../icons/Lightbulb';
import useToggle from '../../../hooks/useToggle';
import Modal from '../modals/Modal';
import { ButtonExternalLink } from '../buttons/ButtonLink';
import Avatar, { AvatarSizes } from '../avatars/Avatar';
import { Transition, Menu } from '@headlessui/react';
import Badge from '../../../icons/Badge';

export default function AppHeader({ onMenuClick }) {
  const [session] = useSession();

  const { value: isSponsorModalShown, set: setIsSponsorModalShown } = useToggle(
    false
  );

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 max-w-7xl sm:px-2 lg:px-4">
      <div className="md:hidden flex items-center">
        <button
          onClick={onMenuClick}
          className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex"></div>
        <div className="ml-4 flex items-center md:ml-6">
          <button
            type="button"
            onClick={() => setIsSponsorModalShown(true)}
            className="p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">Sponsor</span>
            <HeartIcon className="h-5 w-5" />
          </button>
          <Modal
            isOpen={isSponsorModalShown}
            onClose={() => setIsSponsorModalShown(false)}
          >
            <div className="sm:flex sm:items-start">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
                  <HeartIcon
                    className="h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-lg leading-6 font-medium text-gray-900"
                    id="modal-headline"
                  >
                    Sponsor Ramble
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Please consider sponsoring my work! Sponsors get priority
                      support when fixing bugs or considering new features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-5 sm:mt-6">
              <ButtonExternalLink
                href="https://github.com/sponsors/IanMitchell"
                className="w-full justify-center"
                target="_blank"
                highlight
              >
                Sponsor on GitHub
              </ButtonExternalLink>
            </div>
          </Modal>

          <FeedbackFish
            projectId="e98be972cfc300"
            userId={session?.user?.email}
          >
            <button
              type="button"
              className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Sponsor</span>
              <LightbulbIcon className="h-5 w-5" />
            </button>
          </FeedbackFish>

          <Menu>
            {({ open }) => (
              <div className="ml-3 relative">
                <div>
                  <Menu.Button
                    className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    aria-haspopup="true"
                  >
                    <span className="sr-only">Open user menu</span>
                    <Avatar
                      src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      size={AvatarSizes.MEDIUM}
                    />
                  </Menu.Button>
                </div>

                <Transition
                  show={open}
                  enter="transition ease-out duration-100"
                  enterFrom="transform opacity-0 scale-95"
                  enterTo="transform opacity-100 scale-100"
                  leave="transition ease-in duration-75"
                  leaveFrom="transform opacity-100 scale-100"
                  leaveTo="transform opacity-0 scale-95"
                >
                  <Menu.Items static>
                    <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                      <div className="px-4 py-3">
                        <p className="text-sm">Signed in as</p>
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {session?.user?.email}
                        </p>
                      </div>

                      <div className="py-1">
                        <Menu.Item as={Fragment}>
                          <a
                            href="#"
                            className="group flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                          >
                            <Badge className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
                            My Account
                          </a>
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item as={Fragment}>
                          <button
                            onClick={signOut}
                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
                            role="menuitem"
                          >
                            Sign out
                          </button>
                        </Menu.Item>
                      </div>
                    </div>
                  </Menu.Items>
                </Transition>
              </div>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}
