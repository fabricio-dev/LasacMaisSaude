import { useEffect, useState } from "react";
import AddTasks from "./components/AddTasks";
import Tasks from "./components/Tasks";
import Buscar from "./components/Buscar";
import { v4 } from "uuid";
function App() {
  const [tasks, setTask] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    //chamnar a API para buscar as tarefas

    const fetchTasks = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos?_limit=10",
        {
          method: "GET",
        }
      );
      const data = await response.json();
      setTask(data);
    };

    // se quiser pegar da API
    //fetchTasks();
  }, []);

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

  function onAddTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      // Gera um ID único para a nova tarefa usando v4 do uuid
      // Isso garante que cada tarefa tenha um identificador exclusivo
      // que não colida com outras tarefas existentes
      // Isso é importante para manter a integridade dos dados e facilitar
      // a manipulação das tarefas, como edição e exclusão.
      title: title,
      description: description,
      isLoss: false,
    };
    // Adiciona a nova tarefa ao estado nova tarfera mais tarefas antigas
    setTask([...tasks, newTask]);
  }
  return (
    <div className="w-screen h-screen bg-slate-600 flex justify-center">
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-slate-100 fonte-bold text-center">
          Cadrastro de Convenios
        </h1>
        <Buscar />
        <AddTasks onAddTaskSubmit={onAddTaskSubmit} />

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
