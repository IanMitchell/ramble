import { Fragment } from 'react';
import Link from 'next/link';
import Button from '../../admin/components/buttons/Button';
import Badge, { BadgeTypes } from '../components/badges/Badge';
import ArticleStage from '../constants/articles';
import LeftArrowIcon from '../../icons/LeftArrow';
import GearIcon from '../../icons/Gear';

function getBadge(stage) {
  switch (stage) {
    case ArticleStage.PUBLISHED:
      return <Badge type={BadgeTypes.SUCCESS}>Published</Badge>;
    case ArticleStage.DRAFT:
    default:
      return <Badge type={BadgeTypes.FAILURE}>Draft</Badge>;
  }
}

function getLabel(stage) {
  switch (stage) {
    case ArticleStage.PUBLISHED:
      return 'Update';
    case ArticleStage.DRAFT:
    default:
      return 'Publish';
  }
}

export default function EditorLayout({ stage, onSave, children }) {
  return (
    <Fragment>
      <header className="relative">
        <div className="mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center py-6 space-x-10">
            <div className="w-0 flex-1">
              <div className="flex items-center">
                <Link href="/admin/articles">
                  <a className="flex text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition duration-150 ease-in-out">
                    <LeftArrowIcon className="w-6 h-6 pr-2" /> Dashboard
                  </a>
                </Link>
                <div className="ml-6 pl-6 border-solid border-l-2 border-gray-100 py-2">
                  {getBadge(stage)}
                </div>
              </div>
            </div>
            <div className="-mr-2 -my-2 flex items-center">
              {/* <span className="text-xs text-gray-400 pr-4">
                Last Saved 10 minutes ago
              </span> */}
              <Button onClick={onSave}>{getLabel(stage)}</Button>
            </div>
            <div className="-mr-2 -my-2">
              {/* <button
                type="button"
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
                onClick={() => {}}
              >
                <GearIcon className="w-6 h-6" />
              </button> */}
            </div>
          </div>
        </div>
      </header>

      {children}
    </Fragment>
  );
}
