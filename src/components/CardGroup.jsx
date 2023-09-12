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
        className=" lg:h-screen  flex flex-col items-center relative z-40"
      >
        <div className="container mx-auto text-slate-300 flex-1 grid grid-cols-1 lg:grid-cols-3">
          <Card image={img1} />
          <Card image={img2} />
          <Card image={img3} />
        </div>

        <div className="flex justify-center lg:order-last my-5">{children}</div>
      </div>
      <div className="absolute inset-0 bg-gradient-to-bl from-red-950 via-violet-800 to-yellow-600 z-0 "></div>
    </div>
  );
};

const Card = ({ image }) => {
  const location = useLocation();

  return (
    <div className="flex items-center p-16">
      <div className="relative mx-auto bg-cyan-900 p-8 rounded-xl shadow-xl h-3/4">
        {location.pathname !== "/suscription/plans" && (
          <img
            src={image}
            alt="Imagen"
            className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 object-cover z-10 rounded-b-full shadow-2xl shadow-slate-900"
          />
        )}

        <div className="mt-16">
          <Section title="Misión">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab repellat
          </Section>
          <Section title="Visión">Lorem ipsum dolor</Section>
        </div>
      </div>
    </div>
  );
};

export default CardGroup;
