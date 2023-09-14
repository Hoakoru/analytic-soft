import { useState } from "react";
import { useLocation } from "react-router-dom";

const Card = ({ image, color, id, children }) => {
  const location = useLocation();
  const [variable, setVariable] = useState(null);
  const extraStyles =
    location.pathname !== "/suscription/plans"
      ? "bg-gradient-to-r from-gray-700 to-gray-600 p-5 pt-32 w-9/12"
      : `bg-transparent border border-${color}-500 px-8 h-96 `;

  return (
    <div
      className={`relative flex items-center rounded-3xl shadow-xl ${extraStyles}`}
      onClick={() => {
        setVariable(id);
        console.log(id);
      }}
    >
      {location.pathname !== "/suscription/plans" && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md shadow-slate-900 overflow-hidden h-40 w-40 p-4">
          <img src={image} alt="Imagen" />
        </div>
      )}

      <div className="flex flex-col justify-center items-center h-1/2 lg:h-full text-center text-slate-200">
        {children}
      </div>
    </div>
  );
};

export default Card;
