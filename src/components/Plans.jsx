import { Link as AsLink } from "react-router-dom";
import CardGroup from "./CardGroup";

function Plans() {
  return (
    <CardGroup>
      <AsLink
        to="/suscription/"
        className="text-white bg-blue-800 hover:bg-amber-700 py-2 px-4 rounded "
      >
        Volver
      </AsLink>
    </CardGroup>
  );
}

export default Plans;
