import img1 from "../assets/img/img1.jpeg"

const Perfil = () => {
  return (
    <div className="h-screen text-slate-200 text-3xl ">
      <div className="flex flex-col items-center justify-center p-5">
        <img
          src={img1}
          alt="Imagen de usuario"
          className="w-32 h-32 rounded-full mb-4"
        />
        <h1 className="text-2xl font-semibold">Nombre del Jefe de Empresa</h1>
        <p className="text-lg text-gray-500">Nombre de la Empresa</p>
        <div className="mt-4">
          <p className="text-gray-500">Correo: ejemplo@empresa.com</p>
          <p className="text-gray-500">Años de Experiencia: 10 años</p>
          {/* Agrega más detalles de la empresa aquí */}
        </div>
      </div>
    </div>
  );
};

export default Perfil;
