const Card = ({ image, location, children }) => {
  return (
    <>
      {location.pathname !== "/suscription/plans" && (
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full shadow-md shadow-slate-900 overflow-hidden h-40 w-40 p-4">
          <img src={image} alt="Imagen" />
        </div>
      )}

      <div className="flex flex-col justify-center items-center h-full text-center text-slate-200">
        {children}
      </div>
    </>
  );
};

export default Card;
