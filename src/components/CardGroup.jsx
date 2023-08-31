import img1 from "../assets/img/icon1.png";

const CardGroup = ({ children }) => {
  return (
    <div
      id="cardgroup"
      className="bg-purple-950 pt-6 mx-auto text-slate-300 lg:h-screen shadow-custom-md flex lg:flex-col"
    >
      <div className="flex-1 flex flex-col lg:flex-row ">
        <Card />
        <Card />
        <Card />
      </div>

      <div className=" flex justify-center lg:order-last my-5">{children}</div>
    </div>
  );
};

const Section = ({ title, children }) => {
  return (
    <div className="text-center ">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p>{children}</p>
    </div>
  );
};

const Card = () => {
  return (
    <div className="flex-1 flex items-center p-8">
      <div className="relative  mx-auto bg-cyan-900 p-8 rounded-xl shadow-xl h-3/4">
        <img
          src={img1}
          alt="Imagen"
          className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 object-cover z-10 rounded-full"
        />
        <div className="mt-10">
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
