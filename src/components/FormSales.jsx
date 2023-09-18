import React, { useState, useEffect } from "react";
import { useServices } from "../context/ServiceContext";
import { useNavigate, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormSales = () => {
  /* logica de mostra emnsajes en el formulario */
  const [formSend, onChangeFormeSend] = useState(false);
  const [s, setS] = useState({
    producto: "",
    venta: "",
  });
  /* importacion de los metodos mediante el contexto */
  const { createTask, setIsModalOpen, sale, setSale } = useServices();
  const navigate = useNavigate(); /* impotrtacion de navegacion */
  const params = useParams();

  const inputStyles = `
   appearance-none border border-blue-900 bg-cyan-950 rounded w-full py-2 px-3 leading-tight focus:outline-none  focus:border-red-500 text-white
`;
  const labelStyles = "font-extralight text-sky-200";
  const errorStyles = "text-red-400 font-extralight text-md mt-1";

  useEffect(() => {
    const loadSale = async () => {
      if (params.id) {
        /* const service = await getSaleService(params.id); */
        /* setSale({
        id: service.id,
        productos: service.productos,
        venta: service.venta,
      }); */
        setS(sale.find((item) => item.id === parseInt(params.id, 10)));
      }
    };
    loadSale();
  });

  return (
    <>
      <Formik
        initialValues={s}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          /* createTask(values); */
          if (params.id) {
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
              {`${params.id ? "Actualiza" : "Registra"} tu venta`}
            </h2>

            {/* producto */}
            <div>
              <label htmlFor="productos" className={labelStyles}>
                Nombre de Producto:
              </label>
              <Field
                type="text"
                id="productos"
                name="productos"
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
                type="number"
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
              {params.id ? (
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

export default FormSales;
