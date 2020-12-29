import { FeedbackFish } from '@feedback-fish/react';
import MenuIcon from '../../../icons/Menu';
import HeartIcon from '../../../icons/Heart';
import LightbulbIcon from '../../../icons/Lightbulb';
import useToggle from '../../../hooks/useToggle';
import Modal from '../modals/Modal';
import { ButtonExternalLink } from '../buttons/ButtonLink';

export default function AppHeader({ onMenuClick }) {
  const { value: isSponsorModalShown, set: setIsSponsorModalShown } = useToggle(
    false
  );

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16">
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
            <HeartIcon className="h-6 w-6" />
            <Modal
              isOpen={isSponsorModalShown}
              onClose={() => setIsSponsorModalShown(false)}
            >
              <div class="sm:flex sm:items-start">
                <div>
                  <div class="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-red-100">
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
                        Please consider sponsoring my work! Sponsors get
                        priority support when fixing bugs or considering new
                        features.
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
          </button>

          <FeedbackFish
            projectId="e98be972cfc300"
            userId="ian.mitchell@hey.com"
          >
            <button
              type="button"
              className="ml-3 p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="sr-only">Sponsor</span>
              <LightbulbIcon className="h-6 w-6" />
            </button>
          </FeedbackFish>

          <div className="ml-3 relative">
            <div>
              <button
                className="max-w-xs bg-white flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                id="user-menu"
                aria-haspopup="true"
              >
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                  alt=""
                />
              </button>
            </div>
            {/* <!--
          Profile dropdown panel, show/hide based on dropdown state.

          Entering: "transition ease-out duration-100"
            From: "transform opacity-0 scale-95"
            To: "transform opacity-100 scale-100"
          Leaving: "transition ease-in duration-75"
            From: "transform opacity-100 scale-100"
            To: "transform opacity-0 scale-95"
        --> */}
            <div
              className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5"
              role="menu"
              aria-orientation="vertical"
              aria-labelledby="user-menu"
            >
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Your Profile
              </a>

              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Settings
              </a>

              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                role="menuitem"
              >
                Sign out
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
