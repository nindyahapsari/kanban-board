import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";

import ListCard from "../Components/ListCard";

//UNUSED FOR NOW!

const DraggableList = ({ data }) => {
  return (
    <>
      {data.map((each, index) => (
          {(provided) => (
            <div ref={provided.innerRef} {...provided.droppableProps}>
              <Draggable key={each.id} draggableId={each.id} index={index}>
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
                      priority={each.priority}
                    />
                  </div>
                )}
              </Draggable>
              {provided.placeholder}
            </div>
          )}
      ))}
    </>
  );
};

export default DraggableList;
