import { useParams,useNavigate } from "react-router-dom";
import img1 from "../assets/img/img1.jpeg";
import { useServices } from "../context/ServiceContext";
import Buttons from "./Buttons";
import Cookies from 'js-cookie';

const Perfil = () => {
  const params = useParams();
  const navigate = useNavigate();
  const { users, setIsModalOpen } = useServices();
  const userEmail = Cookies.get('userEmail');
  const user = users.find((e) => e.email === userEmail);

  const handleOpen = () => {
    setIsModalOpen(true);
    navigate(`/application/${userEmail}/perfil`);
  };

  return (
    <div className="flex flex-col items-center justify-center bg-transparent rounded-2xl shadow-sm shadow-black text-slate-200 space-y-7 p-3 h-full">
      <div className="h-32 w-32">
        <img
          src={img1}
          alt="Imagen de usuario"
          className="object-contain rounded-full"
        />
      </div>
      <div className="text-center space-y-3">
        <span className="text-end">Bienvenido!!!</span>
        <div className="flex justify-center space-x-4">
          <h2 className="text-lg font-semibold uppercase">{user.names}</h2>
         {/*  <button onClick={handleOpen}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path d="M4 17l-1 4 4-1 13-13-3-3-13 13z"></path>
            </svg>
          </button> */}
        </div>
        <p className="text-lg text-gray-500 capitalize">{user.company}</p>
        <div>
          <p className="text-gray-500">Correo: {user.email}</p>
          <p className="text-gray-500">
            Años de Experiencia: {user.year_exp} años
          </p>
          <p className="text-gray-500">
            Plan:{" "}
            {user.plan === 1
              ? "gratis"
              : user.plan === 2
              ? "plus"
              : user.plan === 3
              ? "premium"
              : "no plan"}
          </p>
          {/* Agrega más detalles de la empresa aquí */}
        </div>
      </div>
      <div className="flex lg:flex-col ">
        <Buttons type={"employee"}>Registrar empleados</Buttons>
        <Buttons type={"sales"}>Registrar ventas</Buttons>
      </div>
    </div>
  );
};

export default Perfil;
