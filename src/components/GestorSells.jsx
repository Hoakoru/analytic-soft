import { Bar, Pie } from "react-chartjs-2";
import { useEffect, useState } from "react";
import { useServices } from "../context/ServiceContext";
import GeneralGrafic from "../components/GeneralGrafic";
import "chart.js/auto";

export const optionsBar = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export const optionPie = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Ventas mensuales",
    },
  },
};

const GestorSells = () => {
  const { sale } = useServices();
  const [loading, setLoading] = useState(true);
  const [dataBar, setDataBar] = useState({
    labels: [],
    datasets: [],
  });
  const [dataPie, setDataPie] = useState({
    labels: [],
    datasets: [],
  });
  /* configuracion de colore predeterminados */
  const colores = [
    "rgba(255, 0, 0, 0.7)",
    "rgba(0, 0, 255, 0.7)",
    "rgba(255, 255, 0, 0.7)",
    "rgba(0, 0, 128, 0.7)",
    "rgba(135, 206, 235, 0.7)",
    "rgba(75, 0, 130, 0.7)",
    "rgba(0, 128, 0, 0.7)",
  ];
  /* los bordes predeterminados */
  const bordes = [
    "rgba(255, 128, 128, 1)",
    "rgba(128, 128, 255, 1)",
    "rgba(255, 255, 128, 1)",
    "rgba(128, 128, 192, 1)",
    "rgba(173, 216, 230, 1)",
    "rgba(106, 90, 205, 1)",
    "rgba(144, 238, 144, 1)",
  ];

  useEffect(() => {
    const loadDataGrafics = async () => {
      // carga lso datos del grafico bar
      setLoading(true);
      setTimeout(() => {
        const dataGrafics = {
          labels: sale.map((item) => item.productos),
          datasets: [
            {
              data: sale.map((item) => item.venta),
              borderColor: bordes,
              backgroundColor: colores,
            },
          ],
        };
        setDataBar(dataGrafics);
        setDataPie(dataGrafics);
        setLoading(false);
      }, 2000);
    };
    loadDataGrafics();
  }, [sale]);

  return (
    <>
      <div className="h-screen lg:h-96 flex flex-col lg:flex-row items-center justify-center bg-slate-200 rounded-lg shadow-md shadow-black">
        <div className="h-full lg:w-1/2 p-5">
          {loading ? (
            <div className="h-full flex items-center justify-center">
              <p className="text-3xl font-bold">Cargando...</p>
            </div>
          ) : (
            <Bar options={optionsBar} data={dataBar} />
          )}
        </div>
        <div className="h-full lg:w-1/2 p-5">
          {loading ? (
            <div className="h-full flex items-center justify-center">
              <p className="text-3xl font-bold">Cargando...</p>
            </div>
          ) : (
            <Pie options={optionPie} data={dataPie} />
          )}
        </div>
      </div>
      <GeneralGrafic />
    </>
  );
};

export default GestorSells;
