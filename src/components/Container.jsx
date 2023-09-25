import img1 from "../assets/img/icon3.png";
import Section from "./Section";
import { useInView } from "react-intersection-observer";

const Container = () => {
  const optionView = {
    triggerOnce: false,
    threshold: 0.60,
  };
  const [ref1, inView1] = useInView(optionView);
  const [ref2, inView2] = useInView(optionView);
  const [ref3, inView3] = useInView(optionView);

  return (
    <div className="relative">
      <div
        className="flex flex-col lg:flex-row text-slate-300 z-30 relative "
      >
        {/* primera parte del contenedor */}
        <div className="h-screen flex-1 flex items-center justify-center p-8">
          <div className="p-10 ">
            <div
              ref={ref1}
              className={`opacity-0 transition-opacity duration-1000 ease-in-out ${
                inView1 ? "opacity-100" : ""
              }`}
            >
              <Section
                title="Misión"
                styleTitle="text-4xl font-bold mb-5 tracking-widest"
              >
                Organizar la informacion y diseñar la solucion permitienedo que
                nuestros clientes se den cuenta del valor y potencial que tienen
              </Section>
            </div>
            <div
              ref={ref2}
              className={`opacity-0 transition-opacity duration-1000 ease-in-out ${
                inView2 ? "opacity-100" : ""
              }`}
            >
              <Section
                title="Visión"
                styleTitle="text-4xl font-bold mb-5 tracking-widest"
              >
                Crear la empresa que proponga soluciones a los problemas de
                administracion a todas las empresas comerciales de Bolivia
                usando la herramienta BigData
              </Section>
            </div>
          </div>
        </div>

        <div
          ref={ref3}
          className={`flex-1 flex justify-center items-center opacity-0 transition-opacity duration-1000 ease-in-out ${
            inView3 ? "opacity-100" : ""
          }`}
        >
          <img
            src={img1}
            alt="Imagen representativa"
            className="object-contain p-20 "
          />
        </div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-slate-700 via-indigo-950  to-stone-800 z-0"></div>
    </div>
  );
};

export default Container;
