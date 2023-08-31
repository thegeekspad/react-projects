import React from 'react';
import { PencilIcon, TrashIcon } from '@heroicons/react/24/solid';

const TaskItem = (props) => {
  const item = props.task;
  const deleteHandler = props.onDelete;

  const editItem = (e) => {
    console.log('edit');
  };

  const deleteItem = (e) => {
    deleteHandler(item);
  };

  const markComplete = (e) => {
    console.log('mark complete');
  };

  return (
    <div className="flex items-center justify-between py-4 border-b border-gray-300">
      <div className="flex items-center">
        <input type="checkbox" className="mr-5" onChange={markComplete} />
        <span className="text-gray-700">{item.title}</span>
      </div>
      <div>
        <button className="mr-2" onClick={editItem}>
          <PencilIcon className="h-5 w-5 text-blue-500" /> {/* Edit icon */}
        </button>
        <button onClick={deleteItem}>
          <TrashIcon className="h-5 w-5 text-red-500" /> {/* Delete icon */}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
