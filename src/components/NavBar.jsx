import img1 from "../assets/img/img1.jpeg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = ({ currentPage }) => {
  const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
  const navigate = useNavigate();

  const toggleOffcanvas = () => {
    setIsOffcanvasOpen(!isOffcanvasOpen);
  };

  return (
    <nav className="fixed top-0 z-50 w-full flex items-center justify-between bg-gray-800 p-2 h-16">
      {/* boton del offcanvas */}
      <button className="text-white lg:hidden" onClick={toggleOffcanvas}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
      {/* Logo */}
      <div
        className="hidden lg:flex items-center h-full cursor-pointer"
        onClick={() => navigate("/")}
      >
        <img src={img1} alt="Logo" className="h-12 w-12 mr-2 rounded-full" />
        <span className="text-white text-lg font-semibold">AnalyticSoft</span>
      </div>

      {currentPage === "home" && (
        /* Elementos del centro */
        <div className="lg:flex w-1/4 justify-center hidden space-x-4 h-full">
          {/* primer boton underline */}
          <ScrollNav title="Home" opcion={"container"} />
          <ScrollNav title="Servicios" opcion={"cardgroup"} />
          <ScrollNav title="Clientes" opcion={"client"} />
        </div>
      )}

      {/* Botón */}
      {currentPage === "form" ? (
        <Link
          to="/suscription/login"
          className="text-white bg-blue-800 hover:bg-amber-700 py-2 px-4 rounded hidden lg:flex"
        >
          Iniciar Sesión
        </Link>
      ) : (
        <Link
          to="/suscription/"
          className="text-white bg-green-800 hover:bg-amber-700 py-2 px-4 rounded hidden lg:flex"
        >
          Registrarse
        </Link>
      )}

      {isOffcanvasOpen && (
        <Offcanvas
          isOpen={isOffcanvasOpen}
          onClose={toggleOffcanvas}
          currentPage={currentPage}
        />
      )}
    </nav>
  );
};

const ScrollNav = ({ title, opcion }) => {
  return (
    <div className="flex items-center relative group h-full w-full">
      <ScrollLink
        to={opcion}
        smooth={true}
        duration={500}
        className="text-white text-center text-xl w-full cursor-pointer hover:text-gray-300"
      >
        {title}
        <div className="absolute inset-x-0 bottom-0 h-0.5 bg-white transform origin-left scale-x-0 transition-transform group-hover:scale-x-100"></div>
      </ScrollLink>
    </div>
  );
};

const Offcanvas = ({ isOpen, onClose, currentPage }) => {
  return (
    <div
      className={`fixed flex-col p-4 top-0 left-0 w-64 h-full bg-gray-800   ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transform transition-transform duration-300 ease-in-out`}
    >
      {/* Contenido del offcanvas */}
      <div className="flex">
        <img src={img1} alt="Logo" className="h-8 w-8 mr-2 rounded-full" />
        <span className="text-white text-lg font-semibold">AnalyticSoft</span>
      </div>
      {/* opsiones */}
      {currentPage === "home" && (
        <ul className="py-6 space-y-2 text-white">
          <li className="mt-2">
            <ScrollNav title="Home" opcion={"container"} />
          </li>
          <li className="mt-2">
            <ScrollNav title="Servicios" opcion={"cardgroup"} />
          </li>
          <li className="mt-2">
            <ScrollNav title="Clientes" opcion={"client"} />
          </li>
        </ul>
      )}
      {/* boton para cerrar */}
      <button className="absolute top-4 right-4 text-white" onClick={onClose}>
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          ></path>
        </svg>
      </button>
      {/* boton de inicio sesion */}
      <div className="mt-5 flex justify-center">
        {currentPage === "form" ? (
          <Link
            to="/suscription/login"
            className="text-white bg-blue-800 hover:bg-amber-700 py-2 px-4 rounded lg:flex "
          >
            Iniciar Sesión
          </Link>
        ) : (
          <Link
            to="/suscription/"
            className="text-white bg-green-800 hover:bg-amber-700 py-2 px-4 rounded lg:flex "
          >
            Registrarse
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
