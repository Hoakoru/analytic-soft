import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Datos de las ventas",
    },
  },
};

const labels = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const data = {
  labels,
  datasets: [
    {
      label: "Leche",
      data: [-300, 500, 300, 200, 500, 600, 100,500,-200], // Tus propios datos aquí
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Pan",
      data: [1000, 600, 400, 400, 300, 200, 100], // Tus propios datos aquí
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
    {
      label: "Yogurt",
      data: [-100, 400, 100, 800, 400, 300, 800,500,-200], // Tus propios datos aquí
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};



const GestorSells = () => {
  return (
    <div className="h-screen lg:1/2 lg:mx-5">
      <div className="h-full bg-slate-200 rounded-lg shadow-md shadow-black">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};

export default GestorSells;
