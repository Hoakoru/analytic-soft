import Modal from "react-modal";
import { useServices } from "../context/ServiceContext";

Modal.setAppElement("#root"); // Indica dónde se debe renderizar la ventana modal

const CardModal = ({ children }) => {
  const { isModalOpen } = useServices();

  return (
    <>
      <Modal
        isOpen={isModalOpen}
        overlayClassName={`fixed inset-0 flex items-center justify-center`}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white mt-8 rounded-lg shadow-lg outline-none w-10/12 lg:w-1/2 bg-gradient-to-br from-slate-900 to-slate-700 flex flex-col justify-center items-center"
      >
        {children}
      </Modal>
    </>
  );
};

export default CardModal;
