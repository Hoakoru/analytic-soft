import Modal from "react-modal";
import { useServices } from "../context/ServiceContext";

Modal.setAppElement("#root"); // Indica dónde se debe renderizar la ventana modal

const CardModal = ({ children }) => {
  const { isModalOpen, setIsModalOpen } = useServices();

  return (
    <Modal
      isOpen={isModalOpen}
      overlayClassName="fixed inset-0 bg-black opacity-50 transition-opacity duration-300"
      className="bg-white p-4 rounded-lg shadow-lg outline-none"
    >
      {children}
      <button
        onClick={() => setIsModalOpen(false)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none"
      >
        Cerrar
      </button>
    </Modal>
  );
};

export default CardModal;
