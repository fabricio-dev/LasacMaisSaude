import { ChevronLeftIcon } from "lucide-react";
import { useNavigate, useSearchParams } from "react-router-dom";

function TaskPage() {
  const navigate = useNavigate();
  const [searcParams] = useSearchParams();
  const title = searcParams.get("title");
  const description = searcParams.get("description");

  return (
    <div className="h-screen w-screen  bg-slate-500 P-6 flex justify-center">
      <div className="w-[500px] p-4">
        <div className=" flex justify-center relative mb-6">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 top-0 bottom-0 text-slate-100"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-slate-100 font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="space-y-2 bg-slate-200 rounded-md shadow flex flex-col p-4">
          <h2 className="text-xl text-slate-600 font-bold">Titulo: {title}</h2>
          <p className="text-slate-600">Descricao: {description}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
// Compare this snippet from src/App.jsx:
