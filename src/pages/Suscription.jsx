import Navbar from "../components/NavBar";
import FormRegister from "../components/FormRegister";
import Plans from "../components/Plans";
import FormLogin from "../components/FormLogin";
import { Routes, Route } from "react-router-dom";

const Suscription = () => {
  return (
    <>
      <Navbar currentPage="form" />
      <div className="mt-16 relative">
        <Routes>
          <Route path="/" element={<FormRegister />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/login" element={<FormLogin />} />
        </Routes>
        <div className="absolute inset-0 bg-gradient-to-bl from-stone-800 via-indigo-950 to-gray-800 z-10"></div>
      </div>
      
    </>
  );
};

export default Suscription;
