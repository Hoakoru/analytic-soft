import img1 from "../assets/img/img1.jpeg";
import Buttons from "./Buttons";

const Perfil = () => {
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
        <span className="text-end" >Bienvenido!!!</span>
        <h2 className="text-lg font-semibold">Juan Diego Gutierrez Quintana</h2>
        <p className="text-lg text-gray-500">Analytic Soft</p>
        <div>
          <p className="text-gray-500">Correo: jorgejoaquinmv@gmail.com</p>
          <p className="text-gray-500">Años de Experiencia: 10 años</p>
          {/* Agrega más detalles de la empresa aquí */}
        </div>
      </div>
      <div className="flex flex-col">

      <Buttons >
        Registrar empleados
      </Buttons >
      <Buttons >
        Registrar ventas
      </Buttons >
      </div>
    </div>
  );
};

export default Perfil;
