import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";

const FormLogin = () => {
  //en las siguinetes se puede ver las clases
  const fieldClasses =
    "shadow appearance-none border border-sky-600 rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-sky-200 bg-gradient-to-r from-slate-800 to-slate-600";
  const buttonClasses =
    "bg-gradient-to-bl from-blue-800 to-blue-950 hover:from-indigo-700 hover:to-indigo-950 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-1/4";
  //estamos usando navigate para poder utilizarlo con otro nombre
  const navigate = useNavigate();
  const [formSend, onChangeFormeSend] = useState(false); //creamos un estado de fornsend prar mostrar mensajes de error
  
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="container">
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            const comp = { email: values.email, password: values.password };
            if (
              comp.email !== "jorgejoaquinmv@gmail.com" ||
              comp.password !== "26072001Joa"
            ) {
              onChangeFormeSend(true);
              setTimeout(() => onChangeFormeSend(false), 5000);
              
            } else {
              navigate("/main");
            }
            
          }}
          validate={(values) => {
            const errors = {};
            if (!values.email) {
              errors.email = "Campo requerido";
            } else if (!/\S+@\S+\.\S+/.test(values.email)) {
              errors.email = "Correo electrónico inválido";
            }

            if (!values.password) {
              errors.password = "Campo requerido";
            } else if (values.password.length < 8) {
              errors.password =
                "La contraseña debe tener al menos 8 caracteres";
            } else if (!/\d/.test(values.password)) {
              errors.password =
                "La contraseña debe contener al menos un número";
            } else if (!/[A-Z]/.test(values.password)) {
              errors.password =
                "La contraseña debe contener al menos una letra mayúscula";
            }

            return errors;
          }}
        >
          {() => (
            <Form className="max-w-md bg-gradient-to-b from-slate-800 to-slate-600 shadow-md rounded mx-auto px-8 pt-6 pb-8 mb-4 text-white bold">
              {formSend && (
                <div className="bg-red-800 text-white font-bold text-md mt-1 mb-4 text-center">
                  ¡Datos incorrectos!
                </div>
              )}
              <h2 className=" text-blue-400 font-bold text-4xl text-center mb-4 ">
                Login
              </h2>
              <div className="mb-4">
                <label htmlFor="email" className="block font-bold mb-2">
                  Email:
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  className={fieldClasses}
                />
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-sky-400 font-bold text-md mt-1"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="password"
                  className="block font-bold mb-2"
                  onChange={null}
                >
                  Contraseña:
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  className={fieldClasses}
                />
                <ErrorMessage
                  name="password"
                  component="div"
                  className="text-sky-400 font-bold text-md mt-1"
                />
              </div>

              <div className="flex items-center justify-center">
                <button type="submit" className={buttonClasses}>
                  Enviar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default FormLogin;
