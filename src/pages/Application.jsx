import GestorSells from "../components/GestorSells";
import GestorUser from "../components/GestorUser";
import Perfil from "../components/Perfil";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardModal from "../components/Modal";
import { Routes, Route } from "react-router-dom";
import FormEmployee from "../components/FormEmployee";

const Application = () => {
  return (
    <>
      {/* navegador del ususario */}
      <NavBar />
      <div className="relative flex flex-col lg:flex-row bg-slate-800 min-h-screen lg:h-screen mt-16 p-2">
        {/* perfil del ususario */}
        <div className="h-full lg:w-1/4 mb-2 relative z-30">
          <Perfil />
        </div>

        {/* ventana modal */}

        <CardModal>
          <FormEmployee />
        </CardModal>

        {/* ventana de los usuarios y ventas */}
        <div className="h-full flex flex-col flex-1 relative z-30">
          {/* <GestorUser />
          <GestorSells /> */}
        </div>
        <div className="absolute inset-0 bg-gradient-to-tl from-rose-700 via-purple-950 to-slate-950 z-0"></div>
      </div>
      <Footer />
    </>
  );
};

export default Application;
