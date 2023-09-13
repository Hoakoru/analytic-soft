import img1 from "../assets/img/icon7.png";
import img2 from "../assets/img/icon8.png";
import img3 from "../assets/img/icon9.png";
import { Section } from "./Container";
import { useLocation } from "react-router-dom";

const CardGroup = ({ children }) => {
  return (
    <div className="relative">
      <div
        id="cardgroup"
        className="lg:h-screen flex flex-col justify-center items-center relative z-40 pt-32 lg:pt-0"
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 space-y-24 lg:space-y-0 ">
          <Card
            image={img1}
            title={"Gestor de empleados"}
            style={"text-2xl"}
            description={
              "Optimiza la productividad de tu equipo con nuestro potente gestor de empleados en tiempo real. Obtén insights valiosos para una gestión de recursos humanos más efectiva."
            }
          />
          <Card
            image={img2}
            title={"Gestor de ventas"}
            style={"text-2xl"}
            description={
              "Optimiza la productividad de tu equipo con nuestro potente gestor de empleados en tiempo real. Obtén insights valiosos para una gestión de recursos humanos más efectiva."
            }
          />
          <Card
            image={img3}
            title={"Almacenamiento de datos"}
            style={"text-2xl"}
            description={
              "La base de datos de Big Data que necesitas para un almacenamiento seguro y escalable. Guarda, accede y procesa datos de manera eficiente en nuestra plataforma confiable de almacenamiento de datos."
            }
          />
        </div>

        <div className="flex justify-center lg:order-last my-5">{children}</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-bl from-stone-800 via-indigo-950 to-gray-800 z-0 "></div>
    </div>
  );
};

const Card = ({ image, title, style, description }) => {
  const location = useLocation();

  return (
    <div className="relative flex items-center bg-gradient-to-r from-gray-700 to-gray-600 p-5 rounded-3xl shadow-xl w-9/12 mx-auto">
      {location.pathname !== "/suscription/plans" && (
        <div class="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-t-sm shadow-md shadow-slate-900 overflow-hidden h-40 w-40 p-2">
          <img src={image} alt="Imagen" />
        </div>
      )}

      <div className="mt-16 text-center text-slate-300">
        <Section title={title} styleTitle={style}>
          {description}
        </Section>
      </div>
    </div>
  );
};

export default CardGroup;
