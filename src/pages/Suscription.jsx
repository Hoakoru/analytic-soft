import Navbar from "../components/NavBar";
import FormRegister from "../components/FormRegister";
import Plans from "../components/Plans"
import FormLogin from "../components/FormLogin";
import { Routes, Route } from "react-router-dom";

const Suscription = () => {
  return (
    <>
      <Navbar currentPage="form" />
      <Routes>
        <Route path="/" element={<FormRegister />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/login" element={<FormLogin />} />
      </Routes>
    </>
  );
};

export default Suscription;
