import { useServices } from "../context/ServiceContext";

const Buttons = () => {
  const { setIsModalOpen } = useServices();
  return (
    <div className="flex-1 flex p-2 space-x-2 lg:flex-col lg:items-start lg:space-x-0 lg:space-y-2">
      <button
        onClick={() => setIsModalOpen(true)}
        className="border border-blue-500 text-slate-300 hover:bg-blue-800 hover:border-transparent px-4 py-2 rounded-lg h-14 w-full"
      >
        Registrar
      </button>
    </div>
  );
};

export default Buttons;
