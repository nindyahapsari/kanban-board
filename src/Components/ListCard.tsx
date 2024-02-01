const ListCard = () => {
  return (
    <div className="w-80 border border-solid border-black mb-2">
      <div className="flex flex-col items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div>
          <h2 className="mb-2 text-2xl font-medium text-gray-600 dark:text-gray-400">
            Task
          </h2>
        </div>

        <div className="border-solid w-full border-black flex flex-row items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">
              Tag
            </p>
          </div>
          <div className="flex-row w-20 border border-solid border-black">
            <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
