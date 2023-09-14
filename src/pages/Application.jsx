import GestorSells from "../components/GestorSells";
import GestorUser from "../components/GestorUser";
import Perfil from "../components/Perfil";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardModal from "../components/Modal";
import FormUser from "../components/FormUser";
import { Routes, Route } from "react-router-dom";

const Application = () => {
  return (
    <>
      {/* navegador del ususario */}
      <NavBar />
      <div className="flex flex-col lg:flex-row bg-slate-800 h-full mt-16">
        {/* perfil del ususario */}
        <div className="lg:w-1/4 h-screen">
          <Perfil />
        </div>

        {/* ventana modal */}
        <div className="h-full">
          <CardModal>
            <FormUser />
          </CardModal>
        </div>

        {/* ventana de los usuarios y ventas */}
        <div className="h-full lg:h-screen flex-col lg:w-3/4">
          <GestorUser />
          {/* <GestorSells /> */}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Application;
