import img1 from "../assets/img/update.png"
import img2 from "../assets/img/delete.png"
import DataTable from "react-data-table-component";
import { useState } from "react";
import { useServices } from "../context/ServiceContext";

const GestorUser = () => {
  const { setIsModalOpen } = useServices();
  const handleUpdate = (row) => {
   setIsModalOpen(true)
  };

  const handleDelete = (row) => {
   
  };

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
    {
      name: "Acciones",
      cell: (row) => (
        <>
          <button onClick={() => handleUpdate(row)}>
            <img
              src={img1}
              alt="button1.png"
              className="h-12 w-12  hover:opacity-70 focus:opacity-80"
            />
          </button>
          <button onClick={() => handleDelete(row)}>
            <img
              src={img2}
              alt="button2.png"
              className="h-10 w-10  hover:opacity-70 focus:opacity-80"
            />
          </button>
        </>
      ),
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
    },
    {
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
    <div className="h-full lg:h-1/2 lg:mx-5 pb-3">
      <div className="h-full overflow-y-scroll rounded-lg shadow-md shadow-black">
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
    </div>
  );
};

export default GestorUser;
