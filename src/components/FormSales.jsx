import React, { useState, useEffect } from "react";
import { useServices } from "../context/ServiceContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormSales = () => {
  /* logica de mostra emnsajes en el formulario */
  const [formSend, onChangeFormeSend] = useState(false);
  /* importacion de los metodos mediante el contexto */
  const { createTask, setIsModalOpen,sale } = useServices();
  const navigate = useNavigate(); /* impotrtacion de navegacion */

  const inputStyles = `
   appearance-none border border-blue-900 bg-cyan-950 rounded w-full py-2 px-3 leading-tight focus:outline-none  focus:border-red-500 text-white
`;
  const labelStyles = "font-extralight text-sky-200";
  const errorStyles = "text-red-400 font-extralight text-md mt-1";

  return (
    <>
      <Formik
        initialValues={sale}
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
              Registra la venta
            </h2>

            {/* producto */}
            <div>
              <label htmlFor="producto" className={labelStyles}>
                Nombre de Producto:
              </label>
              <Field
                type="text"
                id="producto"
                name="producto"
                className={inputStyles}
              />
              <ErrorMessage
                name="producto"
                component="div"
                className={errorStyles}
              />
            </div>

            {/* monto de venta */}
            <div>
              <label htmlFor="venta" className={labelStyles}>
                Monto de venta:
              </label>
              <Field
                type="text"
                id="venta"
                name="venta"
                className={inputStyles}
              />
              <ErrorMessage
                name="venta"
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

export default FormSales;
