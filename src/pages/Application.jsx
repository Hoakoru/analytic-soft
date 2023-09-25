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
import { useNavigate, useParams, useLocation } from "react-router-dom";
import img1 from "../assets/img/update.png";
import img2 from "../assets/img/delete.png";
import { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";

const Application = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();
  const {
    setIsModalOpen,
    getEmployeesService,
    getSalesService,
    getSalesServiceF,
    getSalesServiceG,
    option,
    setOption,
    month,
  } = useServices();
  const [mes, setMeses] = useState(month);

  const styleError = "text-red-500 text-md mt-1 italic tracking-tight";

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

  const loadMonth = () => {
    return (
      <>
        <option>Selecciona el mes de venta</option>
        {mes.length <= 0 ? (
          <option value={""} className="text-slate-500">
            No existen datos
          </option>
        ) : (
          mes.map((e, index) => {
            return (
              <option key={e} value={index + 1}>
                {e}
              </option>
            );
          })
        )}
      </>
    );
  };

  const handleChange = (e) => {
    setOption(parseInt(e.target.value));
  };

  const handleUpdate = (row) => {
    setIsModalOpen(true);
    navigate(`/application/employee/update/${row.ci}`);
  };

  const handleDelete = (row) => {};

  const handleUpdateV = (row) => {
    setIsModalOpen(true);
    navigate(`/application/sales/update/${row.id}`);
  };

  const handleDeleteV = (row) => {};

  useEffect(() => {
    getEmployeesService();
    getSalesServiceG();
    setOption(1);
  }, []);

  useEffect(()=>{
    if (option === 1) {
      getSalesService();
    } else if (option === 2) {
      getSalesServiceF();
    }
  },[option])

  return (
    <>
      {/* navegador del ususario */}
      <NavBar />

      <div className="relative flex flex-col lg:flex-row bg-slate-800 min-h-screen mt-16 p-2">
        {location.pathname.startsWith("/application") && (
          <Formik>
            {() => (
              <div className="fixed text-end bg-slate-100 w-1/2 lg:w-1/4 bottom-0 right-0 z-50">
                <Field
                  as="select"
                  name="month"
                  id="month"
                  className="appearance-none border-b border-sky-300 bg-sky-500 rounded w-full py-2 px-3 leading-tight text-slate-900 ventas"
                  onChange={handleChange}
                >
                  {loadMonth()}
                </Field>
                <ErrorMessage
                  name="month"
                  component="div"
                  className={styleError}
                />
              </div>
            )}
          </Formik>
        )}
        {/* perfil del ususario */}
        <div className="h-screen lg:w-1/4 mb-2 relative z-30">
          <Perfil />
        </div>

        {/* ventana modal */}

        <CardModal>
          <Routes>
            <Route path="/employee" element={<FormEmployee />} />
            <Route path="/employee/update/:ci" element={<FormEmployee />} />
            <Route path="/sales" element={<FormSales />} />
            <Route path="/sales/update/:id" element={<FormSales />} />
          </Routes>
        </CardModal>

        {/* ventana de los usuarios y ventas */}
        <div className="min-h-screen flex flex-col flex-1 relative z-30">
          <div className="h-full lg:h-screen pb-3 space-y-3">
            <Datatable enunciado={"empleados"} columns={columnsE} />
            <Datatable enunciado={"ventas"} columns={columnsV} />
          </div>
          <div className="h-full lg:h-full lg:mx-3 my-3 space-y-3">
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
