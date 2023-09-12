import img1 from "../assets/img/face.png"
import img2 from "../assets/img/mess.png"
import img3 from "../assets/img/whats.png"

const Footer = () => {
  return (
    <footer className="flex text-md  bg-gray-950 text-slate-300 ">
      <div className="flex-1 flex items-center">
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
      <div className="flex-1 flex items-end justify-center pb-5">
        <p className="text-center">
          @Todo los derechos reservados <br />
          AnalyticSoft
        </p>
      </div>
      <div className="flex-1 flex-wrap cols-1 lg:cols-3 space-x-3 flex items-center justify-end p-10">
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
    </footer>
  );
};

export default Footer;
