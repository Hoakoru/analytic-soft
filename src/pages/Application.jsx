import GestorSells from "../components/GestorSells";
import Datatable from "../components/Datatable";
import Perfil from "../components/Perfil";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardModal from "../components/Modal";
import { Routes, Route } from "react-router-dom";
import FormEmployee from "../components/FormEmployee";
import FormSales from "../components/FormSales";
import { useServices } from "../context/ServiceContext";
import { useNavigate, useParams } from "react-router-dom";
import img1 from "../assets/img/update.png";
import img2 from "../assets/img/delete.png";
import { useEffect } from "react";

const Application = () => {
  const navigate = useNavigate();
  const params = useParams();
  const {
    setIsModalOpen,
    getEmployeesService,
    employee,
    setEmployee,
    getSalesService,
    sale,
    setSale,
    getEmployeeService,
  } = useServices();

  const dataE = [
    {
      ci: 1,
      name: "John",
      apellido_p: "Doe",
      apellido_m: "Smith",
      direccion: "123 Main St",
    },
    {
      ci: 2,
      name: "Jane",
      apellido_p: "Smith",
      apellido_m: "Doe",
      direccion: "456 Elm St",
    },
    {
      ci: 3,
      name: "Michael",
      apellido_p: "Johnson",
      apellido_m: "Brown",
      direccion: "789 Oak St",
    },
    {
      ci: 4,
      name: "Emily",
      apellido_p: "Davis",
      apellido_m: "Wilson",
      direccion: "101 Pine St",
    },
    {
      ci: 5,
      name: "Robert",
      apellido_p: "Martinez",
      apellido_m: "Lee",
      direccion: "202 Maple St",
    },
    {
      ci: 6,
      name: "Jennifer",
      apellido_p: "Garcia",
      apellido_m: "White",
      direccion: "303 Cedar St",
    },
    {
      ci: 7,
      name: "David",
      apellido_p: "Hernandez",
      apellido_m: "Smith",
      direccion: "404 Birch St",
    },
    {
      ci: 8,
      name: "Mary",
      apellido_p: "Lopez",
      apellido_m: "Johnson",
      direccion: "505 Redwood St",
    },
    {
      ci: 9,
      name: "Daniel",
      apellido_p: "Gonzalez",
      apellido_m: "Davis",
      direccion: "606 Willow St",
    },
    {
      ci: 10,
      name: "Patricia",
      apellido_p: "Brown",
      apellido_m: "Miller",
      direccion: "707 Cedar St",
    },
    {
      ci: 11,
      name: "Jane",
      apellido_p: "Johnson",
      apellido_m: "Williams",
      direccion: "456 Elm St",
    },
    {
      ci: 12,
      name: "Michael",
      apellido_p: "Davis",
      apellido_m: "Brown",
      direccion: "789 Oak St",
    },
    {
      ci: 13,
      name: "Emily",
      apellido_p: "Martinez",
      apellido_m: "Lee",
      direccion: "101 Pine St",
    },
    {
      ci: 14,
      name: "Robert",
      apellido_p: "Garcia",
      apellido_m: "White",
      direccion: "202 Maple St",
    },
    {
      ci: 15,
      name: "Jennifer",
      apellido_p: "Hernandez",
      apellido_m: "Smith",
      direccion: "303 Cedar St",
    },
    {
      ci: 16,
      name: "David",
      apellido_p: "Lopez",
      apellido_m: "Johnson",
      direccion: "404 Birch St",
    },
    {
      ci: 17,
      name: "Mary",
      apellido_p: "Gonzalez",
      apellido_m: "Davis",
      direccion: "505 Redwood St",
    },
    {
      ci: 18,
      name: "Daniel",
      apellido_p: "Brown",
      apellido_m: "Miller",
      direccion: "606 Willow St",
    },
    {
      ci: 19,
      name: "Patricia",
      apellido_p: "Clark",
      apellido_m: "Moore",
      direccion: "707 Cedar St",
    },
    {
      ci: 20,
      name: "Richard",
      apellido_p: "Wright",
      apellido_m: "Anderson",
      direccion: "808 Oak St",
    },
  ];

  const dataV = [
    {
      id: 1,
      productos: "Leche ",
      venta: 500,
    },
    {
      id: 2,
      productos: "Mantequilla",
      venta: 600,
    },
    {
      id: 3,
      productos: "Queso",
      venta: 800,
    },
  ];

  const handleUpdate = (row) => {
    setIsModalOpen(true);
    navigate(`/application/update/${row.ci}`);
    /* const loadEmployee = async () => {
      if (params.ci) {
        const service = await getEmployeeService(params.ci);
        setEmployee({
          ci: service.ci,
          name: service.name,
          apellido_p: service.apellido_p,
          apellido_m: service.apellido_m,
          direccion: service.direccion,
        });
      }
    };
    loadEmployee(); */
  };

  const handleDelete = (row) => {};

  const handleUpdateV = (row) => {
    setIsModalOpen(true);
    navigate(`/application/sales/update/${row.id}`);
  };

  const handleDeleteV = (row) => {};

  const columnsE = [
    {
      name: "Ci",
      selector: (row) => row.ci,
    },
    {
      name: "Nombre",
      selector: (row) => row.name,
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

  const columnsV = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Productos",
      selector: (row) => row.productos,
    },
    {
      name: "Venta",
      selector: (row) => row.venta,
    },
    {
      name: "Acciones",
      cell: (row) => (
        <>
          <button onClick={() => handleUpdateV(row)}>
            <img
              src={img1}
              alt="button1.png"
              className="h-12 w-12  hover:opacity-70 focus:opacity-80"
            />
          </button>
          <button onClick={() => handleDeleteV(row)}>
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

  useEffect(() => {
    getEmployeesService();
    getSalesService();
  }, []);

  return (
    <>
      {/* navegador del ususario */}
      <NavBar />
      <div className="relative flex flex-col lg:flex-row bg-slate-800 min-h-screen mt-16 p-2">
        {/* perfil del ususario */}
        <div className="h-screen lg:w-1/4 mb-2 relative z-30">
          <Perfil />
        </div>

        {/* ventana modal */}

        <CardModal>
          <Routes>
            <Route path="/" element={<FormEmployee />} />
            <Route path="/update/:ci" element={<FormEmployee />} />
            <Route path="/sales" element={<FormSales />} />
            <Route path="/sales/update/:id" element={<FormSales />} />
          </Routes>
        </CardModal>

        {/* ventana de los usuarios y ventas */}
        <div className="min-h-screen flex flex-col flex-1 relative z-30">
          <div className="h-full lg:h-screen pb-3 space-y-3">
            <Datatable
              enunciado={"empleados"}
              columns={columnsE}
              data={dataE}
            />
            <Datatable enunciado={"ventas"} columns={columnsV} data={dataV} />
          </div>
          <div className="h-screen lg:h-full lg:mx-3 my-3">
            <GestorSells />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-tl from-rose-700 via-purple-950 to-slate-950 z-0"></div>
      </div>
      <Footer />
    </>
  );
};

export default Application;
