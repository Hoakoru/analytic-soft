import React, { useState, useEffect } from "react";
import { useServices } from "../context/ServiceContext";
import { useNavigate, Link,useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

/* objeto de validaciones */
const validationSchema = Yup.object({
  names: Yup.string()
    .required("El nombre es obligatorio")
    .min(10, "El nombre debe tener al menos 10 caracteres")
    .max(50, "El nombre no debe tener más de 50 caracteres")
    .matches(/^[a-zA-Z\s]*$/, "El nombre solo debe contener letras y espacios")
    .notOneOf(
      ["admin", "root", "superuser"],
      "Este nombre de usuario no está permitido"
    ),
  email: Yup.string()
    .email("Correo electrónico no válido")
    .required("El correo electrónico es obligatorio")
    .matches(
      /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      "Correo electrónico no válido"
    ),
  pass: Yup.string()
    .required("La contraseña es obligatoria")
    .min(6, "La contraseña debe tener al menos 6 caracteres")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
      "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (@$!%*?&)"
    ),
  address: Yup.string()
    .required("La dirección es obligatoria")
    .min(10, "La dirección debe tener al menos 10 caracteres")
    .matches(
      /^[a-zA-Z0-9 ,.-]+$/,
      "La dirección debe contener solo letras, números, comas, puntos y guiones"
    ),
  company: Yup.string().required("Selecciona una empresa"),
  year_exp: Yup.string().required("Selecciona la experiencia de la empresa"),
});

const FormRegister = () => {
  /* importacion de los metodos mediante el contexto */
  const { users, setUser, getCompany, company } = useServices();
  const styleError = "text-red-500 text-md mt-1   italic tracking-tight";
  const params=useParams()
  const navigate = useNavigate(); /* impotrtacion de navegacion */
  const years = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  const initialValues={
    names: "",
    email: "",
    pass: "",
    address: "",
    company: "",
    year_exp: "",
  }
  const [perfil, setPerfil] = useState(initialValues)

  useEffect(() => {
    getCompany();
    if(params.email){
      const user = users.find((e) => e.email === params.email);
      setPerfil(user)
    }
  }, []);

 /*  const loadCompanies = () => {
    return (
      <>
        <option value="">Elige tu empresa</option>
        {company.length <= 0 ? (
          <option className="text-slate-500">No existen datos</option>
        ) : (
          company.map((e) => {
            return (
              <option key={e.id} value={e.title} className="text-slate-900">
                {e.title}
              </option>
            );
          })
        )}
      </>
    );
  }; */

  const loadYears = () => {
    return (
      <>
        <option value="">Selecciona tu antiguedad</option>
        {years.length <= 0 ? (
          <option className="text-slate-500">No existen datos</option>
        ) : (
          years.map((e) => {
            return (
              <option key={e} value={e} className="text-slate-900">
                {e}
              </option>
            );
          })
        )}
      </>
    );
  };

  return (
    <Formik
      initialValues={perfil}
      validationSchema={validationSchema}
      onSubmit={async (values, { resetForm }) => {
        setUser(values);
        resetForm();
        navigate("/suscription/plans"); // Ajusta esto según tu navegación
      }}
    >
      {() => (
        <Form className="lg:w-6/12 bg-slate-800 border border-sky-500 rounded-3xl mx-4 lg:mx-auto my-10 p-10 text-white bold space-y-5 shadow-lg shadow-gray-900 relative z-30">
          <h2 className="text-blue-400 font-bold text-3xl text-start mb-10">
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
            <ErrorMessage name="names" component="div" className={styleError} />
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
            <ErrorMessage name="email" component="div" className={styleError} />
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
            <ErrorMessage name="pass" component="div" className={styleError} />
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
              className={styleError}
            />
          </div>

          <div className="flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
            {/* Nombre de la emnpresa */}
            <div className="w-full">
              <label htmlFor="company" className="block font-bold mb-2">
                Nombre de empresa:
              </label>
              <Field
               type="text"
                name="company"
                id="company"
                className="shadow appearance-none border border-sky-500 bg-gradient-to-r from-slate-800 to-slate-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
              />
                
              <ErrorMessage
                name="company"
                component="div"
                className={styleError}
              />
            </div>

            {/* Años de experiencia */}
            <div className="w-full ">
              <label htmlFor="year_exp" className="block font-bold mb-2">
                Años de experiencia:
              </label>
              <Field
                as="select"
                name="year_exp"
                id="year_exp"
                className="shadow appearance-none border border-sky-500 bg-gradient-to-r from-slate-800 to-slate-700 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline "
              >
                {loadYears()}
              </Field>
              <ErrorMessage
                name="year_exp"
                component="div"
                className={styleError}
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row items-center justify-center space-y-2 lg:space-x-2 lg:space-y-0">
            <button
              type="submit"
              className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-8 rounded-xl shadow-md shadow-gray-900 w-full lg:w-1/4  "
            >
              Siguiente
            </button>
            <Link
              to={"/"}
              className="bg-rose-900 hover:bg-rose-800 text-white text-center font-bold py-2 px-8 rounded-xl shadow-md shadow-gray-900 w-full lg:w-1/4 "
            >
              Volver
            </Link>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormRegister;
