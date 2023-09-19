import { Line, Bar, Pie } from "react-chartjs-2";
import "chart.js/auto";

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

const GestorSells = ({ month, dataVE, dataVF }) => {
  const colores = [
    "rgba(255, 0, 0, 0.7)",
    "rgba(0, 0, 255, 0.7)",
    "rgba(255, 255, 0, 0.7)",
    "rgba(0, 0, 128, 0.7)",
    "rgba(135, 206, 235, 0.7)",
    "rgba(75, 0, 130, 0.7)",
    "rgba(0, 128, 0, 0.7)",
  ];
  const bordes = [
    "rgba(255, 128, 128, 1)",
    "rgba(128, 128, 255, 1)",
    "rgba(255, 255, 128, 1)",
    "rgba(128, 128, 192, 1)",
    "rgba(173, 216, 230, 1)",
    "rgba(106, 90, 205, 1)",
    "rgba(144, 238, 144, 1)",
  ];

  const mergedData = dataVE.map((itemVE) => {
    const matchingItem = dataVF.find(
      (itemVF) => itemVF.productos === itemVE.productos
    );
    if (matchingItem) {
      // Si hay un objeto con el mismo nombre en ambos arrays, combina las ventas en un array
      return {
        id: itemVE.id,
        productos: itemVE.productos,
        venta: [itemVE.venta, matchingItem.venta], // Combina las ventas en un array
      };
    } else {
      // Si no hay un objeto con el mismo nombre en el array VF, simplemente agrega el objeto del array VE
      return {
        id: itemVE.id,
        productos: itemVE.productos,
        venta: [itemVE.venta], // Puedes establecer un valor predeterminado para la segunda venta si es necesario
      };
    }
  });

  const datasetsLine = mergedData.map((item, index) => ({
    label: `${item.productos}`,
    data: item.venta,
    borderColor: bordes[index],
    backgroundColor: colores[index],
  }));

  const dataLine = {
    labels: month,
    datasets: datasetsLine,
  };

  const dataBar = {
    labels: dataVE.map((item) => item.productos), // Usar los nombres de productos como etiquetas
    datasets: [
      {
        data: dataVE.map((item) => item.venta),
        borderColor: bordes,
        backgroundColor: colores,
      },
    ],
  };

  const dataPie = {
    labels: dataVE.map((item) => item.productos), // Usar los nombres de productos como etiquetas
    datasets: [
      {
        data: dataVE.map((item) => item.venta),
        borderColor: bordes,
        backgroundColor: colores,
      },
    ],
  };

  return (
    <>
      <div className="h-screen lg:h-96 bg-slate-200 rounded-lg shadow-md shadow-black p-5">
        <Line options={optionsLine} data={dataLine} />
      </div>
      <div className="h-screen lg:h-96 flex flex-col lg:flex-row items-center justify-center bg-slate-200 rounded-lg shadow-md shadow-black">
        <div className="h-full lg:w-1/2 p-5">
          <Bar options={optionsBar} data={dataBar} />
        </div>
        <div className="h-full lg:w-1/2 p-5">
          <Pie options={optionPie} data={dataPie} />
        </div>
      </div>
    </>
  );
};

export default GestorSells;
