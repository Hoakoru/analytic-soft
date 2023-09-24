import { useServices } from "../context/ServiceContext";
import { useNavigate } from "react-router-dom";

const Buttons = ({ type, children }) => {
  const navigate = useNavigate();
  const { setIsModalOpen } = useServices();

  const handleOpen = (type) => {
    setIsModalOpen(true);
    navigate(`/application/${type}`);
  };

  return (
    <div className="m-1">
      <button
        onClick={() => handleOpen(type)}
        className={`${
          type === "sales" ? "bg-cyan-800" : "bg-blue-800"
        } text-slate-300 hover:bg-blue-800 shadow-md shadow-black px-3 py-2 rounded-lg max-h-14 w-full`}
      >
        {children}
      </button>
    </div>
  );
};

export default Buttons;
