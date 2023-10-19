import GestorSells from "../components/GestorSells";
import Datatable from "../components/Datatable";
import Perfil from "../components/Perfil";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import CardModal from "../components/Modal";
import { Routes, Route } from "react-router-dom";
import FormEmployee from "../components/FormEmployee";
import FormSales from "../components/FormSales";
import FormUserUpdate from "../components/FormUserUpdate";
import { useServices } from "../context/ServiceContext";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import img1 from "../assets/img/update.png";
import img2 from "../assets/img/delete.png";
import { useEffect, useState } from "react";
import { Formik, Field, ErrorMessage } from "formik";
import Cookies from 'js-cookie';

const Application = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userEmail = Cookies.get('userEmail');
  const params = useParams();
  const {
    setIsModalOpen,
    getEmployeesService,
    getSalesService,
    getSalesServiceG,
    option,
    setOption,
    month,
    deleteEmployeeService,
    deleteSaleService,
    optionToData,
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
    navigate(`/application/${userEmail}/employee/update/${row.ci}`);
  };

  const handleDelete = (row) => {
    deleteEmployeeService(row.ci);
  };

  const handleUpdateV = (row) => {
    setIsModalOpen(true);
    navigate(`/application/${userEmail}/sales/update/${row.id}`);
  };

  const handleDeleteV = (row) => {
    deleteSaleService(row.id);
  };

  useEffect(() => {
    getEmployeesService();
    getSalesServiceG();
    setOption(1);
  }, []);

  useEffect(() => {
    getSalesServiceG();
  }, [optionToData]);

  useEffect(() => {
    getSalesService();
  }, [option]);

  return (
    <>
      {/* navegador del ususario */}
      <NavBar />

      <div className="relative bg-slate-800 min-h-screen mt-16 p-2">
        <div className="flex flex-col lg:flex-row">
          {/* perfil del ususario */}
          <div className="h-screen lg:w-1/4 flex flex-col mb-2 relative z-30">
            <Perfil />
          </div>

          {/* ventana modal */}

          <CardModal>
            <Routes>
              <Route path="/employee" element={<FormEmployee />} />
              <Route path="/employee/update/:ci" element={<FormEmployee />} />
              <Route path="/sales" element={<FormSales />} />
              <Route path="/sales/update/:id" element={<FormSales />} />
              <Route path="/perfil" element={<FormUserUpdate />} />
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
        </div>
        {location.pathname.startsWith("/application") && (
          <Formik>
            {() => (
              <div className="fixed bottom-0 lg:sticky lg:-mb-10 lg:-bottom-10 left-0 z-50 text-end bg-slate-100 w-1/2 lg:w-1/4 transform lg:-translate-y-10 rounded-lg">
                <Field
                  as="select"
                  name="month"
                  id="month"
                  className="appearance-none border-b border-sky-300 rounded w-full py-2 px-3 leading-tight text-slate-800 ventas"
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
        <div className="absolute inset-0 bg-gradient-to-tl from-rose-700 via-purple-950 to-slate-950 z-0"></div>
      </div>
      <Footer />
    </>
  );
};

export default Application;
