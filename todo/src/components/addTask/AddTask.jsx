import { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      onAdd(newTask);
      setNewTask('');
    }
  };

  return (
    <div className="p-4 bg-gray-200 flex justify-center ">
      <input
        type="text"
        placeholder="Enter a new task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        className="px-2 py-1 border border-gray-300 rounded mr-2"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add
      </button>
    </div>
  );
};

export default AddTask;
