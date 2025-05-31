import { useState } from "react";
import Input from "./Input";
function AddTasks({ onAddTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div className="space-y-2 bg-slate-200 rounded-md shadow flex flex-col p-4">
      <Input
        type="text"
        placeholder="Digite o Titulo"
        value={title}
        onChange={(Event) => setTitle(Event.target.value)}
      />
      <Input
        type="text"
        placeholder="Digite a Descricao da Tarefa"
        value={description}
        onChange={(Event) => setDescription(Event.target.value)}
      />

      <button
        onClick={() => {
          if (!title.trim() || !description.trim()) {
            return alert("Preencha todos os campos");
          }
          onAddTaskSubmit(title, description);
          setDescription("");
          setTitle("");
        }}
        className="bg-slate-500 text-white p-2 rounded-md w-full"
      >
        Cadastrar
      </button>
    </div>
  );
}

export default AddTasks;
