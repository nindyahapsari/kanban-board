interface dataCard {
  title: string;
  description: string;
  assignee: string;
  priority: string;
}

const ListCard = ({ title, description, assignee, priority }: dataCard) => {
  return (
    <div className="w-80 border border-solid rounded-lg mb-2">
      <div className="flex flex-col p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
        <div className="mb-5">
          <h2 className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
            {title}
          </h2>
        </div>

        <div className="border-solid w-full border-black flex flex-row items-center justify-between">
          <div>
            <p className="text-xs font-semibold text-gray-700 dark:text-gray-200">
              {priority}
            </p>
          </div>
          <div className="text-xs flex-row w-30">{assignee}</div>
        </div>
      </div>
    </div>
  );
};

export default ListCard;
