import img1 from "../assets/img/icon7.png";
import img2 from "../assets/img/icon8.png";
import img3 from "../assets/img/icon9.png";
import Card from "./Card";
import { useLocation, Link } from "react-router-dom";
import Section from "./Section";

const CardGroup = () => {
  const location = useLocation();

  return (
    <div className="relative">
      <div
        id="cardgroup"
        className="min-h-screen flex flex-col justify-center items-center relative z-40 pt-32"
      >
        <div className="flex flex-col items-center space-y-24 lg:flex-row lg:space-x-24 lg:space-y-0 lg:px-10 h-full">
          <Card image={img1} color={"red"} id={1}>
            {location.pathname !== "/suscription/plans" ? (
              <Section title={"Gestor de empleados"}>
                Optimiza la productividad de tu equipo con nuestro potente
                gestor de empleados en tiempo real. Obtén insights valiosos para
                una gestión de recursos humanos más efectiva.
              </Section>
            ) : (
              <InformationPlan title={"Plan Gratis"} price={"Prueba gratis"}>
                <li>Gestor de empleados</li>
                <li>Almacenamiento de 25TB</li>
              </InformationPlan>
            )}
          </Card>
          <Card image={img2} color={"indigo"} id={2}>
            {location.pathname !== "/suscription/plans" ? (
              <Section title={"Gestor de empleados"}>
                Optimiza la productividad de tu equipo con nuestro potente
                gestor de empleados en tiempo real. Obtén insights valiosos para
                una gestión de recursos humanos más efectiva.
              </Section>
            ) : (
              <InformationPlan title={"Plan Plus+"} price={"70 BOB/mes"}>
                <li>Gestor de empleados</li>
                <li>Gestor de ventas</li>
                <li>Almacenamiento 50TB</li>
              </InformationPlan>
            )}
          </Card>
          <Card image={img3} color={"orange"} id={3}>
            {location.pathname !== "/suscription/plans" ? (
              <Section title={"Gestor de empleados"}>
                Optimiza la productividad de tu equipo con nuestro potente
                gestor de empleados en tiempo real. Obtén insights valiosos para
                una gestión de recursos humanos más efectiva.
              </Section>
            ) : (
              <InformationPlan title={"Plan Premium"} price={"150 BOB/mes"}>
                <li>Gestor de empleados</li>
                <li>Gestor de ventas</li>
                <li>Almacenamiento 100TB</li>
              </InformationPlan>
            )}
          </Card>
        </div>

        {location.pathname === "/suscription/plans" && (
          <Link
            to="/suscription/"
            className="text-white text-center bg-blue-800 hover:bg-amber-700 mt-10 rounded py-3 px-16"
          >
            Volver
          </Link>
        )}
      </div>
      {location.pathname !== "/suscription/plans" && (
        <div className="absolute inset-0 bg-gradient-to-bl from-stone-800 via-indigo-950 to-gray-800 z-0 "></div>
      )}
    </div>
  );
};

const InformationPlan = ({ price, title, children }) => {
  return (
    <>
      <div className="flex-1 flex items-center">
        <h2 className="text-4xl font-extralight">
          {price}
          <br />
          <span className="text-2xl">{title}</span>
        </h2>
      </div>
      <div className="flex-1">
        <ul className="font-light list-disc text-start">{children}</ul>
      </div>
    </>
  );
};

export default CardGroup;
