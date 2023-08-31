import { Link as AsLink } from "react-router-dom";
import CardGroup from "./CardGroup";

function Plans() {
  return (
    <div className="mt-16 container mx-auto">
      <CardGroup>
        <AsLink
          to="/suscription/"
          className="text-white bg-green-800 hover:bg-amber-700 py-2 px-4 rounded "
        >
          Volver
        </AsLink>
      </CardGroup>
    </div>
  );
}

export default Plans;
