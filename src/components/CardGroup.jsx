import img1 from "../assets/img/icon7.png";
import img2 from "../assets/img/icon8.png";
import img3 from "../assets/img/icon9.png";
import Card from "./Card";
import { useLocation, useNavigate, Link } from "react-router-dom";
import Section from "./Section";
import { useServices } from "../context/ServiceContext";
import { useInView } from "react-intersection-observer";

const CardGroup = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { plan, setPlan, user, setUser } = useServices();

  const optionView = {
    triggerOnce: false,
    threshold: 0.02,
  };
  const [ref1, inView1] = useInView(optionView);

  const extraStyles =
    location.pathname !== "/suscription/plans"
      ? "bg-slate-800 py-20 mx-10 lg:mx-0 flex-1"
      : `bg-transparent border px-8 h-96 `;

  const handleClick = () => {
    setUser({ ...user, plan });
    navigate("/");
  };

  return (
    <div className="relative">
      <div className="min-h-screen flex flex-col justify-center items-center relative z-30 pt-32 ">
        <div
          ref={ref1}
          className={`opacity-0 transition-opacity duration-1000 ease-in-out ${
            location.pathname !== "/suscription/plans"
              ? inView1
                ? "opacity-100"
                : ""
              : "opacity-100"
          } flex flex-col space-y-24 lg:flex-row lg:space-x-10 lg:space-y-0 lg:px-10 h-full`}
        >
          <div
            className={`relative rounded-3xl shadow-xl border-green-500 ${extraStyles} ${
              location.pathname === "/suscription/plans"
                ? plan === 1
                  ? "border-4"
                  : "border-2"
                : ""
            }`}
            onClick={() => {
              if (location.pathname === "/suscription/plans") {
                setPlan(1);
              }
            }}
          >
            <Card image={img1} location={location}>
              {location.pathname !== "/suscription/plans" ? (
                <Section
                  title={"Gestor de empleados"}
                  styleTitle="text-2xl font-semibold "
                >
                  Optimiza la productividad de tu equipo con nuestro potente
                  gestor de empleados en tiempo real.
                </Section>
              ) : (
                <InformationPlan
                  title={"Plan Gratis"}
                  price={"Prueba gratis"}
                  color={"text-green-500"}
                >
                  <li>Gestor de empleados</li>
                  <li>Almacenamiento de 100GB</li>
                </InformationPlan>
              )}
            </Card>
          </div>
          <div
            className={`relative rounded-3xl shadow-xl border-indigo-500 ${extraStyles} ${
              location.pathname === "/suscription/plans"
                ? plan === 2
                  ? "border-4"
                  : "border-2"
                : ""
            }`}
            onClick={() => {
              if (location.pathname === "/suscription/plans") {
                setPlan(2);
              }
            }}
          >
            <Card image={img2} location={location}>
              {location.pathname !== "/suscription/plans" ? (
                <Section
                  title={"Gestor de ventas"}
                  styleTitle="text-2xl font-semibold "
                >
                  Maximice sus ventas con nuestro Gestor de Ventas impulsado por
                  Big Data, que ofrece análisis en tiempo real para comprender
                  el comportamiento del cliente.
                </Section>
              ) : (
                <InformationPlan
                  title={"Plan Plus+"}
                  price={"70 BOB/mes"}
                  color={"text-sky-500"}
                >
                  <li>Gestor de empleados</li>
                  <li>Gestor de ventas</li>
                  <li>Consultor especialista</li>
                  <li>Almacenamiento 10TB</li>
                </InformationPlan>
              )}
            </Card>
          </div>
          <div
            className={`relative rounded-3xl shadow-xl border-yellow-500 ${extraStyles} ${
              location.pathname === "/suscription/plans"
                ? plan === 3
                  ? "border-4"
                  : "border-2"
                : ""
            }`}
            onClick={() => {
              if (location.pathname === "/suscription/plans") {
                setPlan(3);
              }
            }}
          >
            <Card image={img3} location={location}>
              {location.pathname !== "/suscription/plans" ? (
                <Section
                  title={"Almacenamiento de datos"}
                  styleTitle="text-2xl font-semibold "
                >
                  Garantice la disponibilidad y seguridad de sus datos con
                  nuestra solución de Almacenamiento de Datos.
                </Section>
              ) : (
                <InformationPlan
                  title={"Plan Premium"}
                  price={"150 BOB/mes"}
                  color={"text-yellow-300"}
                >
                  <li>Gestor de empleados</li>
                  <li>Gestor de ventas</li>
                  <li>Consultor especialista</li>
                  <li>Consultor de ventas</li>
                  <li>Almacenamiento 25TB</li>
                </InformationPlan>
              )}
            </Card>
          </div>
        </div>

        {location.pathname === "/suscription/plans" && (
          <div className="flex space-x-5 mt-8 pb-5 text-white text-center">
            <button
              onClick={handleClick}
              className="bg-green-800 hover:bg-green-700  rounded-xl shadow-md shadow-gray-900 py-2 px-8 "
            >
              Registrarse
            </button>
            <Link
              to="/suscription/"
              className="bg-blue-800 hover:bg-blue-700 rounded-xl shadow-md shadow-gray-900 py-2 px-8 "
            >
              Volver
            </Link>
          </div>
        )}
      </div>
      {location.pathname !== "/suscription/plans" && (
        <div className="absolute inset-0 bg-gradient-to-bl from-stone-800 via-indigo-950 to-gray-800 z-0 "></div>
      )}
    </div>
  );
};

const InformationPlan = ({ price, title, color, children }) => {
  return (
    <>
      <div className="flex-1 flex items-center">
        <h2 className="text-4xl font-extralight">
          {price}
          <br />
          <span className={`text-2xl ${color}`}>{title}</span>
        </h2>
      </div>
      <div className="flex-1 text-sky-200">
        <ul className="font-light list-disc text-start">{children}</ul>
      </div>
    </>
  );
};

export default CardGroup;
