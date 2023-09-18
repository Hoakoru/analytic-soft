import React, { useState, useEffect } from "react";
import { useServices } from "../context/ServiceContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormEmployee = () => {
  /* logica de mostra emnsajes en el formulario */
  const [formSend, onChangeFormeSend] = useState(false);
  /* importacion de los metodos mediante el contexto */
  const { createTask, setIsModalOpen,employee } = useServices();
  const navigate = useNavigate(); /* impotrtacion de navegacion */

  const inputStyles = `
   appearance-none border border-blue-900 bg-cyan-950 rounded w-full py-2 px-3 leading-tight focus:outline-none  focus:border-red-500 text-white
`;
  const labelStyles = "font-extralight text-sky-200";
  const errorStyles = "text-red-400 font-extralight text-md mt-1";

  return (
    <>
      <Formik
        initialValues={employee}
        onSubmit={async (values, { resetForm }) => {
          /* createTask(values); */
          console.log(values);
          resetForm();
          /* navigate("/suscription/plans"); */ // Ajusta esto según tu navegación
        }}
      >
        {() => (
          <Form className="w-full p-5 space-y-3">
            <h2 className="text-blue-500 text-3xl font-semibold text-center">
              Registra tu empleado
            </h2>

            <div className="flex space-x-2">
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
            </div>
            <div className="flex space-x-2">
              {/* Apellido Paterno */}
              <div>
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
              <div>
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
              <button
                type="submit"
                className="bg-gradient-to-bl from-blue-800 to-blue-950 hover:from-indigo-600 hover:to-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full lg:w-1/4"
              >
                Registrar
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export default FormEmployee;
