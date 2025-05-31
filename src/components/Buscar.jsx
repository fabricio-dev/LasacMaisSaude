import { SearchIcon } from "lucide-react";

function Buscar() {
  return (
    <div className=" space-y-2 bg-slate-200 rounded-md shadow flex  p-2">
      <input
        type="text"
        placeholder="Buscar Convenio"
        className="border border-slate-400 outline-slate-400 p-2 px-2 py-2 rounded-md w-full"
      ></input>

      <button className="border bg-slate-400 text-white  rounded-md">
        <SearchIcon />
      </button>
    </div>
  );
}

export default Buscar;
