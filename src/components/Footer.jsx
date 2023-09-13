import img1 from "../assets/img/face.png";
import img2 from "../assets/img/mess.png";
import img3 from "../assets/img/whats.png";

const Footer = () => {
  return (
    <footer className="flex text-md  bg-gray-950 text-slate-300 ">
      <div className="w-1/2 flex items-center">
        <p className="text-start m-10">
          Contactos:
          <br />
          +591 68572411
          <br />
          +591 64115053
          <br />
          Direccion:
          <br />
          Zona Chijini
          <br /> Calle Juan Gutierrez Paniagua #2815
        </p>
      </div>

      <div className="flex-1 flex flex-col items-end  p-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 space-y-3 lg:space-y-0 lg:space-x-3">
          <button>
            <img src={img1} className="h-16 w-16" />
          </button>
          <button>
            <img src={img2} className="h-16 w-16" />
          </button>
          <button>
            <img src={img3} className="h-16 w-16" />
          </button>
        </div>
        <div className="mt-5">
          <p className="text-end">
            @Todo los derechos reservados <br />
            AnalyticSoft
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
