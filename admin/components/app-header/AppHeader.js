import { Fragment } from "react";
import { FeedbackFish } from "@feedback-fish/react";
import { Transition, Menu } from "@headlessui/react";
import MenuIcon from "../../../icons/Menu";
import HeartIcon from "../../../icons/Heart";
import LightbulbIcon from "../../../icons/Lightbulb";
import useToggle from "../../../hooks/useToggle";
import Modal from "../modals/Modal";
import { ButtonExternalLink } from "../buttons/ButtonLink";
import Avatar, { AvatarSizes } from "../avatars/Avatar";
import Badge from "../../../icons/Badge";

export default function AppHeader({ onMenuClick }) {
  // const [session] = useSession();

  const { value: isSponsorModalShown, set: setIsSponsorModalShown } = useToggle(
    false
  );

  return (
    <div className="relative z-10 flex flex-shrink-0 max-w-7xl h-16 sm:px-2 lg:px-4">
      <div className="flex items-center md:hidden">
        <button
          onClick={onMenuClick}
          className="inline-flex items-center justify-center -ml-0.5 -mt-0.5 w-12 h-12 text-gray-500 hover:text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-2 focus:ring-inset"
        >
          <span className="sr-only">Open sidebar</span>
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
      <div className="flex flex-1 justify-between px-4">
        <div className="flex flex-1"></div>
        <div className="flex items-center ml-4 md:ml-6">
          <button
            type="button"
            onClick={() => setIsSponsorModalShown(true)}
            className="p-1 text-gray-400 hover:text-gray-500 rounded-full focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
          >
            <span className="sr-only">Sponsor</span>
            <HeartIcon className="w-5 h-5" />
          </button>
          <Modal
            isOpen={isSponsorModalShown}
            onClose={() => setIsSponsorModalShown(false)}
          >
            <div className="sm:flex sm:items-start">
              <div>
                <div className="flex items-center justify-center mx-auto w-12 h-12 bg-red-100 rounded-full">
                  <HeartIcon
                    className="w-6 h-6 text-red-600"
                    aria-hidden="true"
                  />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <h3
                    className="text-gray-900 text-lg font-medium leading-6"
                    id="modal-headline"
                  >
                    Sponsor Ramble
                  </h3>
                  <div className="mt-2">
                    <p className="text-gray-500 text-sm">
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
                className="justify-center w-full"
                target="_blank"
                highlight
              >
                Sponsor on GitHub
              </ButtonExternalLink>
            </div>
          </Modal>

          {/* <FeedbackFish
            projectId="e98be972cfc300"
            userId={session?.user?.email}
          >
            <button
              type="button"
              className="ml-3 p-1 text-gray-400 hover:text-gray-500 rounded-full focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
            >
              <span className="sr-only">Sponsor</span>
              <LightbulbIcon className="w-5 h-5" />
            </button>
          </FeedbackFish> */}

          <Menu>
            {({ open }) => (
              <div className="relative ml-3">
                <div>
                  <Menu.Button
                    className="flex items-center max-w-xs text-sm bg-white rounded-full focus:outline-none focus:ring-indigo-500 focus:ring-offset-2 focus:ring-2"
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
                  {/* <Menu.Items static>
                    <div className="absolute right-0 mt-2 w-56 bg-white rounded-md shadow-lg divide-gray-100 divide-y origin-top-right ring-black ring-opacity-5 ring-1">
                      <div className="px-4 py-3">
                        <p className="text-sm">Signed in as</p>
                        <p className="text-gray-900 text-sm font-medium truncate">
                          {session?.user?.email}
                        </p>
                      </div>

                      <div className="py-1">
                        <Menu.Item as={Fragment}>
                          <a
                            href="#"
                            className="group flex items-center px-4 py-2 text-gray-700 hover:text-gray-900 text-sm hover:bg-gray-100"
                            role="menuitem"
                          >
                            <Badge className="mr-3 w-5 h-5 text-gray-400 group-hover:text-gray-500" />
                            My Account
                          </a>
                        </Menu.Item>
                      </div>
                      <div className="py-1">
                        <Menu.Item as={Fragment}>
                          <button
                            onClick={signOut}
                            className="block px-4 py-2 w-full text-left text-gray-700 hover:text-gray-900 focus:text-gray-900 text-sm hover:bg-gray-100 focus:bg-gray-100 focus:outline-none"
                            role="menuitem"
                          >
                            Sign out
                          </button>
                        </Menu.Item>
                      </div>
                    </div>
                  </Menu.Items> */}
                </Transition>
              </div>
            )}
          </Menu>
        </div>
      </div>
    </div>
  );
}
