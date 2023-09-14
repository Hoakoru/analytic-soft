import DataTable from "react-data-table-component";
import Buttons from "./Buttons";
import { useState } from "react";

const GestorUser = () => {
  const columns = [
    {
      name: "Ci",
      selector: (row) => row.ci,
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
    },
    {
      name: "Apellido Paterno",
      selector: (row) => row.apellido_p,
    },
    {
      name: "Apellido Materno",
      selector: (row) => row.apellido_m,
    },
    {
      name: "Direccion",
      selector: (row) => row.direccion,
    },
  ];

  const data = [
    {
      ci: 1,
      nombre: "John",
      apellido_p: "Doe",
      apellido_m: "Smith",
      direccion: "123 Main St",
    },
    {
      ci: 2,
      nombre: "Jane",
      apellido_p: "Smith",
      apellido_m: "Doe",
      direccion: "456 Elm St",
    },
    {
      ci: 3,
      nombre: "Michael",
      apellido_p: "Johnson",
      apellido_m: "Brown",
      direccion: "789 Oak St",
    },
    {
      ci: 4,
      nombre: "Emily",
      apellido_p: "Davis",
      apellido_m: "Wilson",
      direccion: "101 Pine St",
    },
    {
      ci: 5,
      nombre: "Robert",
      apellido_p: "Martinez",
      apellido_m: "Lee",
      direccion: "202 Maple St",
    },
    {
      ci: 6,
      nombre: "Jennifer",
      apellido_p: "Garcia",
      apellido_m: "White",
      direccion: "303 Cedar St",
    },
    {
      ci: 7,
      nombre: "David",
      apellido_p: "Hernandez",
      apellido_m: "Smith",
      direccion: "404 Birch St",
    },
    {
      ci: 8,
      nombre: "Mary",
      apellido_p: "Lopez",
      apellido_m: "Johnson",
      direccion: "505 Redwood St",
    },
    {
      ci: 9,
      nombre: "Daniel",
      apellido_p: "Gonzalez",
      apellido_m: "Davis",
      direccion: "606 Willow St",
    },
    {
      ci: 10,
      nombre: "Patricia",
      apellido_p: "Brown",
      apellido_m: "Miller",
      direccion: "707 Cedar St",
    },{
      ci: 11,
      nombre: "Jane",
      apellido_p: "Johnson",
      apellido_m: "Williams",
      direccion: "456 Elm St",
    },
    {
      ci: 12,
      nombre: "Michael",
      apellido_p: "Davis",
      apellido_m: "Brown",
      direccion: "789 Oak St",
    },
    {
      ci: 13,
      nombre: "Emily",
      apellido_p: "Martinez",
      apellido_m: "Lee",
      direccion: "101 Pine St",
    },
    {
      ci: 14,
      nombre: "Robert",
      apellido_p: "Garcia",
      apellido_m: "White",
      direccion: "202 Maple St",
    },
    {
      ci: 15,
      nombre: "Jennifer",
      apellido_p: "Hernandez",
      apellido_m: "Smith",
      direccion: "303 Cedar St",
    },
    {
      ci: 16,
      nombre: "David",
      apellido_p: "Lopez",
      apellido_m: "Johnson",
      direccion: "404 Birch St",
    },
    {
      ci: 17,
      nombre: "Mary",
      apellido_p: "Gonzalez",
      apellido_m: "Davis",
      direccion: "505 Redwood St",
    },
    {
      ci: 18,
      nombre: "Daniel",
      apellido_p: "Brown",
      apellido_m: "Miller",
      direccion: "606 Willow St",
    },
    {
      ci: 19,
      nombre: "Patricia",
      apellido_p: "Clark",
      apellido_m: "Moore",
      direccion: "707 Cedar St",
    },
    {
      ci: 20,
      nombre: "Richard",
      apellido_p: "Wright",
      apellido_m: "Anderson",
      direccion: "808 Oak St",
    },
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
