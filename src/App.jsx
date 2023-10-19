import "./App.css";
import Home from "./pages/Home";
import Suscription from "./pages/Suscription";
import Application from "./pages/Application";
import { ServiceContextProvider } from "./context/ServiceContext";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";

const App = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 ">
      <ServiceContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suscription/*" element={<Suscription />} />
          <Route path="/application/:email/*" element={<Application />} />
        </Routes>
      </ServiceContextProvider>
    </div>
  );
};

export default App;
