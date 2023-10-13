import TaskItem from '../task/TaskItem';

const TaskList = (props) => {
  const tasks = props.tasks;
  const deleteTask = props.onDeleteTask;

  const onDeleteHandler = (task) => {
    deleteTask(task);
  };

  return (
    <>
      <div className="bg-gray-100 flex justify-center">
        <div className="w-full max-w-md p-4">
          {tasks.map((task) => {
            return (
              <TaskItem key={task.id} task={task} onDelete={onDeleteHandler} />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default TaskList;
