import DataTable from "react-data-table-component";
import { useState } from "react";

const GestorUser = () => {
  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
      sortable: true,
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
      sortable: true,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
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
    <div className="flex-1 bg-slate-600 ">
      <div className="p-5 ">
        <div className="text-end mb-4">
          <input type="text" onChange={handleFilter} className="h-9 w-1/4" />
        </div>
        <DataTable
          title=""
          columns={columns}
          data={records}
          selectableRows
          fixedHeader
          pagination
          highlightOnHover
          pointerOnHover
          persistTableHead
        />
      </div>
    </div>
  );
};

export default GestorUser;
