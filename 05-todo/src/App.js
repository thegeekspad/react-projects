import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import TaskList from './components/tasklist/TaskList';
import AddTask from './components/addTask/AddTask';

function App() {
  let mainTasks = [
    { id: '1', title: 'Learn React', completed: false },
    { id: '2', title: 'Learn JS', completed: false },
    { id: '3', title: 'Learn HTML', completed: true },
    { id: '4', title: 'Learn CSS', completed: false },
  ];

  const [tasks, setTasks] = useState(mainTasks);

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, { id: tasks.length + 1, title: newTask }];
    setTasks(updatedTasks);
  };

  const deleteTask = (task) => {
    setTasks(tasks.filter((t) => t.id !== task.id));
  };

  return (
    <>
      <Header title="React Task Manager" />

      <main className="flex-grow">
        <AddTask onAdd={addTask} />
        <TaskList tasks={tasks} onDeleteTask={deleteTask} />
      </main>

      <Footer />
    </>
  );
}

export default App;
