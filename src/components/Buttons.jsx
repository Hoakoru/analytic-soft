import { useServices } from "../context/ServiceContext";

const Buttons = () => {
  const { setIsModalOpen } = useServices();
  return (
    <div className="flex-1 p-2">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-emerald-700 text-slate-300 hover:bg-blue-800 hover:border-transparent px-4 py-2 rounded-lg h-14 w-full"
      >
        Registrar
      </button>
    </div>
  );
};

export default Buttons;
