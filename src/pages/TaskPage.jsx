import { useSearchParams } from "react-router-dom";

function TaskPage() {
  const [searcParams] = useSearchParams();
  const title = searcParams.get("title");
  const description = searcParams.get("description");

  return (
    <div className="h-screen w-screen bg-slate-500 flex justify-center items-center">
      <h1>{title}</h1>
      <h1>{description}</h1>
    </div>
  );
}

export default TaskPage;
// Compare this snippet from src/App.jsx:
