import DataTable from "react-data-table-component";
import Buttons from "./Buttons"
import { useState } from "react";

const GestorUser = () => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
    },
    {
      name: "Email",
      selector: (row) => row.email,
    },
  ];

  const data = [
    { id: 1, nombre: "John Doe", email: "john@example.com" },
    { id: 2, nombre: "Jane Smith", email: "jane@example.com" },
    { id: 3, nombre: "John Doe", email: "john@example.com" },
    { id: 4, nombre: "Jane Smith", email: "jane@example.com" },
    { id: 5, nombre: "John Doe", email: "john@example.com" },
    { id: 6, nombre: "Jane Smith", email: "jane@example.com" },
    { id: 7, nombre: "John Doe", email: "john@example.com" },
    { id: 8, nombre: "Jane Smith", email: "jane@example.com" },
    { id: 9, nombre: "John Doe", email: "john@example.com" },
    { id: 10, nombre: "Jane Smith", email: "jane@example.com" },
    { id: 11, nombre: "John Doe", email: "john@example.com" },
    { id: 12, nombre: "Jane Smith", email: "jane@example.com" },
    { id: 13, nombre: "Jane Smith", email: "jane@example.com" },
    { id: 14, nombre: "John Doe", email: "john@example.com" },
    { id: 15, nombre: "Jane Smith", email: "jane@example.com" },
    // Agrega más filas de datos según tu necesidad
  ];

  const [records, setRecords] = useState(data);

  const handleFilter = (e) => {
    const newData = data.filter((row) =>
      row.nombre.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(newData);
  };

  return (
    <div className="h-screen lg:h-1/2 lg:flex-1 bg-slate-600 p-5 flex flex-col lg:flex-row">
      <div className="h-full w-full lg:w-10/12 overflow-y-scroll">
        <DataTable
          columns={columns}
          data={records}
          selectableRows
          pagination
          highlightOnHover
          pointerOnHover
          persistTableHead
        />
      </div>
      <Buttons />
    </div>
  );
};

export default GestorUser;
