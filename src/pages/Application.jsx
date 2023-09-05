import GestorSells from "../components/GestorSells";
import GestorUser from "../components/GestorUser";
import Perfil from "../components/Perfil";
import NavBar from "../components/NavBar"

const Application = () => {
  return (
    <>
    <NavBar />
    <div className="flex flex-col lg:flex-row bg-slate-900  mt-16">
      <Perfil />
      <div className="flex-1 flex-col min-h-screen">
        <GestorUser />
        <GestorSells />
      </div>
    </div>
    </>
  );
};

export default Application;
