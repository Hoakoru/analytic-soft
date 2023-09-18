import React, { useState, useEffect } from "react";
import { useServices } from "../context/ServiceContext";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormEmployee = () => {
  /* logica de mostra emnsajes en el formulario */
  const [formSend, onChangeFormeSend] = useState(false);
  const [e, setE] = useState({
    ci: "",
    name: "",
    apellido_p: "",
    apellido_m: "",
    direccion: "",
  });
  /* importacion de los metodos mediante el contexto */
  const { createTask, setIsModalOpen, employee } = useServices();
  const navigate = useNavigate(); /* impotrtacion de navegacion */
  const params = useParams();

  const inputStyles = `
   appearance-none border border-blue-900 bg-cyan-950 rounded w-full py-2 px-3 leading-tight focus:outline-none  focus:border-red-500 text-white
`;
  const labelStyles = "font-extralight text-sky-200";
  const errorStyles = "text-red-400 font-extralight text-md mt-1";

  useEffect(() => {
    const loadEmployee = async () => {
      if (params.ci) {
        /* const service = await getEmployeeService(params.id); */
        /* setEmployee({
        id: service.id,
        productos: service.productos,
        venta: service.venta,
      }); */
        setE(employee.find((item) => item.ci === parseInt(params.ci, 10)));
      }
      console.log(e);
    };
    loadEmployee();
  });

  return (
    <>
      <Formik
        initialValues={e}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          /* createTask(values); */
          if (params.ci) {
            console.log(values);
            console.log("crear empleado");
          } else {
            console.log("actualizar empleado");
          }
          resetForm();
          /* navigate("/suscription/plans"); */ // Ajusta esto según tu navegación
        }}
      >
        {() => (
          <Form className="w-full p-5 space-y-3">
            <h2 className="text-blue-500 text-3xl font-semibold text-center">
              {`${params.ci ? "Actualiza" : "Registra"} tu empleado`}
            </h2>

            <div className="flex space-x-2">
              {/* CI (Cédula de Identidad) */}
              <div className="flex-1">
                <label htmlFor="ci" className={labelStyles}>
                  CI (Cédula de Identidad):
                </label>
                <Field type="text" id="ci" name="ci" className={inputStyles} />
                <ErrorMessage
                  name="ci"
                  component="div"
                  className={errorStyles}
                />
              </div>
              {/* Nombre completo */}
              <div className="flex-1">
                <label htmlFor="name" className={labelStyles}>
                  Nombre:
                </label>
                <Field
                  type="text"
                  id="name"
                  name="name"
                  className={inputStyles}
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className={errorStyles}
                />
              </div>
            </div>
            <div className="flex space-x-2">
              {/* Apellido Paterno */}
              <div className="flex-1">
                <label htmlFor="apellido_p" className={labelStyles}>
                  Apellido Paterno:
                </label>
                <Field
                  type="text"
                  id="apellido_p"
                  name="apellido_p"
                  className={inputStyles}
                />
                <ErrorMessage
                  name="apellido_p"
                  component="div"
                  className={errorStyles}
                />
              </div>

              {/* Apellido Materno */}
              <div className="flex-1">
                <label htmlFor="apellido_m" className={labelStyles}>
                  Apellido Materno:
                </label>
                <Field
                  type="text"
                  id="apellido_m"
                  name="apellido_m"
                  className={inputStyles}
                />
                <ErrorMessage
                  name="apellido_m"
                  component="div"
                  className={errorStyles}
                />
              </div>
            </div>

            {/* Dirección */}
            <div>
              <label htmlFor="direccion" className={labelStyles}>
                Dirección:
              </label>
              <Field
                type="text"
                id="direccion"
                name="direccion"
                className={inputStyles}
              />
              <ErrorMessage
                name="direccion"
                component="div"
                className={errorStyles}
              />
            </div>

            <div className="flex items-center justify-center">
              {params.ci ? (
                <button
                  type="submit"
                  className="bg-emerald-800 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded-3xl shadow-sm shadow-black w-full lg:w-1/4"
                >
                  Actualizar
                </button>
              ) : (
                <button
                  type="submit"
                  className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-3xl shadow-sm shadow-black w-full lg:w-1/4"
                >
                  Registrar
                </button>
              )}
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormEmployee;
