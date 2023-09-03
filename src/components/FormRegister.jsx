import React, { useState, useEffect } from "react";
import { useServices } from "../context/ServiceContext";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

const FormRegister = () => {
  /* logica de mostra emnsajes en el formulario */
  const [formSend, onChangeFormeSend] = useState(false);
  /* importacion de los metodos mediante el contexto */
  const { createTask } = useServices();
  const navigate = useNavigate(); /* impotrtacion de navegacion */

  return (
    <div className="my-16 flex justify-center items-center container mx-auto px-5">
      <Formik
        initialValues={{
          names: "",
          email: "",
          pass: "",
          address: "",
          company: "",
          year_exp: "",
        }}
        onSubmit={async (values, { resetForm }) => {
          /* createTask(values); */
          console.log(values)
          resetForm();
          navigate("/suscription/plans"); // Ajusta esto según tu navegación
        }}
      >
        {() => (
          <Form className="w-full lg:w-1/2 bg-gradient-to-br from-slate-900 to-slate-700 shadow-md rounded mx-auto mt-10 p-10  text-white bold space-y-5">
            <h2 className="text-blue-400 font-bold text-3xl text-start mb-16">
              Llena los campos...
            </h2>

            {/* Nombre del jefe */}
            <div>
              <label htmlFor="names" className="block font-bold mb-2">
                Nombre completo:
              </label>
              <Field
                type="text"
                id="names"
                name="names"
                className="shadow appearance-none border border-sky-500 bg-gradient-to-r from-slate-800 to-slate-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
              />
              <ErrorMessage
                name="names"
                component="div"
                className="text-sky-400 font-bold text-md mt-1"
              />
            </div>

            {/* Correo */}
            <div>
              <label htmlFor="email" className="block font-bold mb-2">
                Correo electronico:
              </label>
              <Field
                type="text"
                id="email"
                name="email"
                className="shadow appearance-none border border-sky-500 bg-gradient-to-r from-slate-800 to-slate-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sky-400 font-bold text-md mt-1"
              />
            </div>
            {/* contrasenia de la cuenta */}
            <div>
              <label htmlFor="pass" className="block font-bold mb-2">
                Contraseña:
              </label>
              <Field
                type="text"
                id="pass"
                name="pass"
                className="shadow appearance-none border border-sky-500 bg-gradient-to-r from-slate-800 to-slate-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
              />
              <ErrorMessage
                name="pass"
                component="div"
                className="text-sky-400 font-bold text-md mt-1"
              />
            </div>
            {/* direccion de la empresa */}
            <div>
              <label htmlFor="address" className="block font-bold mb-2">
                Direccion:
              </label>
              <Field
                type="text"
                id="address"
                name="address"
                className="shadow appearance-none border border-sky-500 bg-gradient-to-r from-slate-800 to-slate-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
              />
              <ErrorMessage
                name="address"
                component="div"
                className="text-sky-400 font-bold text-md mt-1"
              />
            </div>

            <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
              {/* Nombre de la emnpresa */}
              <div className="w-full">
                <label htmlFor="company" className="block font-bold mb-2">
                  Nombre de empresa:
                </label>
                <Field
                  as="select"
                  name="company"
                  id="company"
                  className="shadow appearance-none border border-sky-500 bg-gradient-to-r from-slate-800 to-slate-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                >
                  <option value="">Elige tu empresa</option>
                  <option value="option1">Opción 1</option>
                  <option value="option2">Opción 2</option>
                  <option value="option3">Opción 3</option>
                </Field>
                <ErrorMessage
                  name="company"
                  component="div"
                  className="text-sky-400 font-bold text-md mt-1"
                />
              </div>

              {/* Años de experiencia */}
              <div className="w-full">
                <label htmlFor="year_exp" className="block font-bold mb-2">
                  Años de experiencia:
                </label>
                <Field
                  as="select"
                  name="year_exp"
                  id="year_exp"
                  className="shadow appearance-none border border-sky-500 bg-gradient-to-r from-slate-800 to-slate-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                >
                  <option value="">Elige la edad de tu empresa</option>
                  <option value="option1">Opción 1</option>
                  <option value="option2">Opción 2</option>
                  <option value="option3">Opción 3</option>
                </Field>
                <ErrorMessage
                  name="year_exp"
                  component="div"
                  className="text-sky-400 font-bold text-md mt-1"
                />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <button
                type="submit"
                className="bg-gradient-to-bl from-blue-800 to-blue-950 hover:from-indigo-600 hover:to-indigo-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full lg:w-1/4"
              >
                Siguiente
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormRegister;
