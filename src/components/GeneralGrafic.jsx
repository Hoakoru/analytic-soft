import { Line } from "react-chartjs-2";
import "chart.js/auto";
import { useEffect, useState } from "react";
import { useServices } from "../context/ServiceContext";

export const optionsLine = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Gestion de ventas",
    },
  },
};

const GeneralGrafic = () => {
  const { saleG } = useServices();
  const [loading, setLoading] = useState(true);
  const [dataLine, setDataLine] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const loadDataLine = async () => {
      setLoading(true);
      setTimeout(() => {
        setDataLine(saleG);
        setLoading(false);
      }, 2000);
    };
    loadDataLine();
  }, [saleG]);

  return (
    <div className="h-screen lg:h-96 bg-slate-200 rounded-lg shadow-md shadow-black p-5">
      {loading ? (
        <div className="h-full flex items-center justify-center">
          <p className="text-3xl font-bold">Cargando...</p>
        </div>
      ) : (
        <Line options={optionsLine} data={dataLine} />
      )}
    </div>
  );
};

export default GeneralGrafic;
