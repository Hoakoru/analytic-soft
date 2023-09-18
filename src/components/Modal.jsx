import Modal from "react-modal";
import { useServices } from "../context/ServiceContext";
import { useNavigate } from "react-router-dom";
Modal.setAppElement(document.getElementById('root'));

const CardModal = ({ children }) => {
  const navigate =useNavigate()
  const { isModalOpen, setIsModalOpen } = useServices();

  const closeModal = () => {
    setIsModalOpen(false);
    navigate(`/application/`);
  };

  return (
    <div className="h-full">
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        overlayClassName={`fixed inset-0 z-50`}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-lg shadow-black w-11/12 lg:w-1/2 bg-gradient-to-br from-slate-900 to-slate-700 mt-5"
      >
        {children}
      </Modal>
    </div>
  );
};

export default CardModal;
