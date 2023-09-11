import GestorSells from "../components/GestorSells";
import GestorUser from "../components/GestorUser";
import Perfil from "../components/Perfil";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer"
import CardModal from "../components/Modal";

const Application = () => {
  return (
    <>
      {/* navegador del ususario */}
      <NavBar />
      <div className="flex flex-col lg:flex-row bg-slate-800 h-full mt-16">
        {/* perfil del ususario */}
        <div className="lg:w-1/4 ">
          <Perfil />
        </div>

        {/* ventana modal */}
        <CardModal>
          <h2 className="text-2xl font-bold mb-4">Mi Ventana Modal</h2>
          <p>Contenido de la ventana modal...</p>
        </CardModal>

        {/* ventana de los usuarios y ventas */}
        <div className="h-full lg:h-screen flex-col lg:w-3/4">
          <GestorUser />
          <GestorSells />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Application;
