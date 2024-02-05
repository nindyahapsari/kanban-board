import React from "react";

const ListItem = () => {
  return (
    <div className="absolute top-40 right-96 text-3xl">
      <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 8V7z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <div>
          <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            ListItem
          </p>
          <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
            Content of the card
          </p>
        </div>
      </div>
    </div>
  );
};

export default ListItem;
