import React, { useState } from "react";

const AddTask = ({ socket }) => {
  const [task, setTask] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const handleAddTask = () => {
    try {
      socket.emit("addTask", { task });
      setTask("");

      setToastVisible(true);

      setTimeout(() => {
        setToastVisible(false);
      }, 3000);
    } catch (error) {}
  };

  return (
    <div className="p-4">
      {toastVisible && (
        <div className="bg-green-500 text-white px-4 py-2 rounded">
          Task added successfully!
        </div>
      )}
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Add a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button
        disabled={task === ""}
        onClick={handleAddTask}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-2"
        type="button"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
