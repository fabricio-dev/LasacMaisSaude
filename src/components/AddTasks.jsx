import { useState } from "react";
import { v4 } from "uuid";

function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-2 bg-slate-200 rounded-md shadow flex flex-col p-4">
      <input
        type="text"
        placeholder="Digite o Titulo"
        value={title}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        onChange={(Event) => setTitle(Event.target.value)}
      ></input>
      <input
        type="text"
        placeholder="Digite a Descricao da Tarefa"
        value={description}
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md"
        onChange={(Event) => setDescription(Event.target.value)}
      ></input>

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos");
          }
          onAddTaskSubmit(title, description);
          setDescription("");
          setTitle("");
        }}
        className="bg-slate-400 text-white p-2 rounded-md w-full"
      >
        Cadastrar
      </button>
    </div>
  );
}

export default AddTasks;
