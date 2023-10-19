import { useServices } from "../context/ServiceContext";
import { useNavigate } from "react-router-dom";
import Cookies from 'js-cookie';

const Buttons = ({ type, children }) => {
  const navigate = useNavigate();
  const userEmail = Cookies.get('userEmail');
  const { setIsModalOpen } = useServices();

  const handleOpen = (type) => {
    setIsModalOpen(true);
    navigate(`/application/${userEmail}/${type}`);
  };

  return (
    <div className="m-1">
      <button
        onClick={() => handleOpen(type)}
        className={`${
          type === "sales" ? "bg-orange-800 hover:bg-orange-600" : "bg-blue-800 hover:bg-blue-600"
        } text-slate-300  shadow-md shadow-black px-3 py-2 rounded-lg max-h-14 w-full`}
      >
        {children}
      </button>
    </div>
  );
};

export default Buttons;
