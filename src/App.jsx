import "./App.css";
import Home from "./pages/Home";
import Suscription from "./pages/Suscription";
import Application from "./pages/Application"
import { ServiceContextProvider } from "./context/ServiceContext";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900 ">
      <ServiceContextProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/suscription/*" element={<Suscription />} />
          <Route path="/application/*" element={<Application />} />
        </Routes>
      </ServiceContextProvider>
    </div>
  );
};

export default App;
