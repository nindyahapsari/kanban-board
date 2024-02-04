import { useEffect, useState } from "react";
import { DragDropContext } from "react-beautiful-dnd";
import DraggableList from "../Components/DraggableList";

// import initMockdata from "../assets/mockData.json";

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

const List = ({ socket }) => {
  const [todo, setTodo] = useState<Data[]>([]);
  const [inProgress, setInProgress] = useState<Data[]>([]);
  const [done, setDone] = useState<Data[]>([]);
  const [tasks, setTasks] = useState<Data>({});

  useEffect(() => {
    console.log("socket", socket);
    const todo = "To Do";
    const progress = "In Progress";
    const done = "Done";

    const fetchTask = async () => {
      try {
        const fetchedMock = await fetch("http://localhost:4000/api");
        const data = await fetchedMock.json();
        setTasks(data);
        console.log(tasks);

        // setTodo(
        //   data.filter(({ status }: { status: string }) => status === todo)
        // );
        // setInProgress(
        //   data.filter(({ status }: { status: string }) => status === progress)
        // );
        // setDone(
        //   data.filter(({ status }: { status: string }) => status === done)
        // );
        // console.log("from mock", data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTask();
  }, []);

  const handleAddTodoData = (e) => {
    e.preventDefault();
    // console.log("handleAddTodo");
  };

  const handleDragEnd = ({ destination, source }) => {
    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    socket.emit("taskDragged", {
      source,
      destination,
    });

    // console.log("dragEnd", element);
  };

  return (
    <div className="flex flex-row p-10 h-full overflow-x-scroll bg-gray-200">
      <DragDropContext onDragEnd={handleDragEnd}>
        {Object.entries(tasks).map((task) => (
          <div className="border border-solid bg-gray-100 h-full mx-2 px-5">
            <div className="m-2 text-left">
              <h3 className="text-xl">
                {task[1].title}
                <span className="text-lg mx-2">{task[1].items.length}</span>
              </h3>
            </div>
            <DraggableList data={task[1].items} />
          </div>
        ))}
      </DragDropContext>
    </div>
  );
};

export default List;
