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
  const [dataLine, setDataLine] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const loadDataLine = async () => {
      setDataLine(saleG);
    };
    loadDataLine();
  }, [saleG]);

  return (
    <div className="h-screen lg:h-96 bg-slate-200 rounded-lg shadow-md shadow-black p-5">
      <Line options={optionsLine} data={dataLine} />
    </div>
  );
};

export default GeneralGrafic;
