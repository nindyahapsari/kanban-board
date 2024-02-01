import { useEffect, useState } from "react";
import ListCard from "../Components/ListCard";

import initMockdata from "../assets/mockData.json";

interface Data {
  id: string;
  title: string;
  description: string;
  assignee: string;
  status: string;
  priority: string;
  createdDate: string;
  dueDate: string;
}

const List = () => {
  const [data, setData] = useState<Data[]>([]);

  useEffect(() => {
    console.log(data);

    try {
      // const initData = await fetch('../assets/mockData.json')

      setData(initMockdata);
    } catch (e) {
      console.error(e);
    }
  }, []);

  return (
    <div className="flex flex-row justify-evenly p-10 h-full overflow-x-scroll bg-gray-200">
      <div className="border border-solid bg-gray-100 border-blue-600 h-full mx-2">
        <div className="m-2 text-left">
          <h3 className="text-xl">
            To do
            <span className="text-lg mx-2">3</span>
          </h3>
        </div>
        <ListCard />
        <ListCard />
        <ListCard />
      </div>

      <div className="border border-solid bg-gray-100 border-blue-600 h-full mx-2">
        <div className="m-2 text-left">
          <h3 className="text-xl">
            In Progress
            <span className="text-lg mx-2">3</span>
          </h3>
        </div>
        <ListCard />
        <ListCard />
        <ListCard />
      </div>
    </div>
  );
};

export default List;
