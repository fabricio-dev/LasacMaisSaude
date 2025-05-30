import { useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";

function App() {
  const [tasks, setTask] = useState([
    {
      id: 1,
      title: "estudar programacaso",
      description: "teste de programacao",
      isLoss: false,
    },
    {
      id: 2,
      title: "lasac App",
      description: "teste de programacao",
      isLoss: false,
    },
    {
      id: 3,
      title: "App",
      description: "teste de programacao",
      isLoss: false,
    },
  ]);
  function onTaskClick(taskId) {
    const newTask = tasks.map((task) => {
      if (task.id == taskId) {
        return { ...task, isLoss: !task.isLoss };
      }
      return task;
    });

    setTask(newTask);
  }

  function onDeleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id != taskId);

    setTask(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center">
      <div className="w-[500px]">
        <h1 className="text-3xl text-slate-100 fonte-bold text-center">
          Gerenciador de Clientes
        </h1>
        <AddTasks />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          onDeleteTaskClick={onDeleteTaskClick}
        />
      </div>
    </div>
  );
}

export default App;
