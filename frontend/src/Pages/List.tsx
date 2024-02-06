import { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import DraggableList from "../Components/DraggableList";
import ListCard from "../Components/ListCard";
import AddTask from "../Components/AddTask";

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
  const [tasks, setTasks] = useState<Data>({});

  useEffect(() => {
    const fetchTask = async () => {
      try {
        const fetchedMock = await fetch("http://localhost:4000/api");
        const data = await fetchedMock.json();
        setTasks(data);
        console.log(tasks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchTask();
  }, []);

  useEffect(() => {
    socket.on("tasks", (newTasks) => setTasks(newTasks));
  }, [socket]);

  // console.log(tasks);

  // dont forget the type / interface
  const handleDragEnd = (result) => {
    const { destination, source } = result;

    console.log(result);

    if (!destination) return;
    if (
      destination.index === source.index &&
      destination.droppableId === source.droppableId
    )
      return;

    socket.emit("taskDragged", {
      destination,
      source,
    });
  };

  return (
    <>
      <div className="flex justify-center">
        <AddTask socket={socket} />
      </div>
      <div className="flex flex-row p-10 h-full overflow-x-scroll bg-gray-200">
        <DragDropContext onDragEnd={handleDragEnd}>
          {Object.entries(tasks).map((task) => (
            <div
              key={task[1].items.id}
              className="w-full bg-gray-100 h-full mx-2 px-5"
            >
              <div className="m-2 text-left">
                <h3 className="text-xl">
                  {task[1].title}
                  <span className="text-lg mx-2">{task[1].items.length}</span>
                </h3>
              </div>

              <Droppable droppableId={task[1].title}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    style={{ minHeight: "100px" }}
                  >
                    {task[1].items.map((each, i) => (
                      <Draggable key={each.id} draggableId={each.id} index={i}>
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <ListCard
                              key={each.id}
                              title={each.title}
                              description={each.description}
                              assignee={each.assignee}
                              priority={each.itemspriority}
                            />
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </div>
          ))}
        </DragDropContext>
      </div>
    </>
  );
};

export default List;
