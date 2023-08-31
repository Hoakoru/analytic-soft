import img1 from "../assets/img/icon3.png";

const Container = () => {
  return (
    <div id="container" className=" bg-indigo-950 text-slate-300 flex flex-col lg:flex-row shadow-custom-md">
      {/* primera parte del contenedor */}
      <div className="h-screen flex-1 flex items-center justify-center p-8">
        <div className="p-10">
          <Section title="Misión">
            Organizar la informacion y diseñar la solucion permitienedo que nuestros clientes se den cuenta del valor y potencial que tienen
          </Section>
          <Section title="Visión">Crear la empresa que proponga soluciones a los problemas de administracion a todas las empresas comerciales de Bolivia usando la herramienta BigData</Section>
        </div>
      </div>

      <div className="h-screen flex-1 flex justify-center items-center ">
        <div className="p-20">
          <img
            src={img1}
            alt="Imagen representativa"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <div className="mt-6">
      <h2 className="text-xl  font-semibold mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default Container;
