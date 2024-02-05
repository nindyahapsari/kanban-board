import React, { useState } from 'react'

const AddTodo = ({ socket }) => {
    const [task, setTask] = useState("");

    const handleAddTodo<T> = (e: T):T => {
        e.preventDefault()
        console.log({ task })
        setTask("")
    }

    return (
        <div>
            <label htmlFor="task" className="block mb-2">Task:</label>
            <input
                type="text"
                id="task"
                value={task}
                onChange={(e) => handleAddTodo(e.target.value)}
                className="border border-gray-300 px-4 py-2 mb-2"
            />
            <button
                onClick={handleAddTodo}
                className="bg-blue-500 text-white px-4 py-2"
            >
                Add Todo
            </button>
        </div>
    )
}
        
    </div>
  )
}

export default AddTodo