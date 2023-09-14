import Modal from "react-modal";
import { useServices } from "../context/ServiceContext";
import { useRef, useEffect } from 'react';

Modal.setAppElement("#root"); // Indica dónde se debe renderizar la ventana modal

const CardModal = ({ children }) => {
  const { isModalOpen,setIsModalOpen } = useServices();

  const containerRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsModalOpen(false)
       
        console.log("fuera del contenedor")
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={containerRef} className="h-full">
      <Modal
        isOpen={isModalOpen}
        overlayClassName={`fixed inset-0 flex items-center justify-center`}
        className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-3xl shadow-lg shadow-black outline-none w-11/12 lg:w-1/4 bg-gradient-to-br from-slate-900 to-slate-700 flex flex-col justify-center items-center"
      >
        
        {children}
      </Modal>
    </div>
  );
};

export default CardModal;
