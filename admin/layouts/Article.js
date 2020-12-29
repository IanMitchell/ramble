import React, { Fragment, useContext } from 'react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import Sidebar from '../admin/sidebar/Sidebar';
import FormSectionHeader from '../admin/forms/FormSectionHeader';
import MetaForm from '../admin/forms/MetaForm';
import useBoolean from '../../hooks/useBoolean';
import { GearIcon, MentionIcon } from '../icons';
import LeftArrowIcon from '../icons/LeftArrowIcon';
import Button from '../admin/buttons/Button';
import NotificationContext from '../../contexts/NotificationContext';
import { SuccessIcon } from '../admin/notifications/Notification';
import { StageBadge, StageActionButton } from '../admin/stages';

export function BackLink({ href, children }) {
  return (
    <Link href={href}>
      <a className="flex text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out">
        <LeftArrowIcon className="w-6 h-6 pr-2" /> {children}
      </a>
    </Link>
  );
}

export default function EditorLayout({ back, stage, children }) {
  const { addNotification } = useContext(NotificationContext);
  const { value: isSettingsOpen, toggle: toggleSettings } = useBoolean(false);
  const { value: isWebMentionsOpen, toggle: toggleWebMentions } = useBoolean(
    false
  );

  const {
    register,
    control,
    handleSubmit,
    setValue,
    errors,
    setError,
    clearErrors,
  } = useForm();

  const onSave = () => {};

  const onAction = () => {};

  const notify = () => {
    addNotification({
      title: 'Saved Draft',
      icon: <SuccessIcon />,
      content: 'Your draft has been saved',
      timeout: 5000,
    });
  };

  return (
    <Fragment>
      <header className="relative">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 justify-start space-x-10">
            <div className="w-0 flex-1">
              <div className="flex items-center">
                {back}
                <div className="ml-6 pl-6 border-solid border-l-2 border-gray-100 py-2">
                  <StageBadge stage={stage} />
                </div>
              </div>
            </div>
            <div className="-mr-2 -my-2 flex items-center">
              <span className="text-xs text-gray-400 pr-4">
                Last Saved 10 minutes ago
              </span>
              <Button onClick={notify}>Save</Button>
              <StageActionButton onClick={onAction} stage={stage} />
            </div>
            <div className="-mr-2 -my-2">
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                onClick={toggleSettings}
              >
                <GearIcon className="w-6 h-6" />
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                onClick={toggleWebMentions}
              >
                <MentionIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {children}
    </Fragment>
  );
}
