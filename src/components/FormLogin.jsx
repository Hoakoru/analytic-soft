import img1 from "../assets/img/user.png";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useServices } from "../context/ServiceContext";

const FormLogin = () => {
  //estamos usando navigate para poder utilizarlo con otro nombre
  const navigate = useNavigate();
  const [formSend, setFormSend] = useState(false); //creamos un estado de fornsend prar mostrar mensajes de error
  const { user } = useServices();
  //en las siguinetes se puede ver las clases
  const fieldClasses =
    "border-b border-sky-600 w-full py-2 px-3 leading-tight text-sky-200 bg-gradient-to-l from-slate-900 to-sky-800 ronded rounded-md";
  const buttonClasses =
    "bg-gradient-to-b from-sky-900 to-blue-900 hover:from-sky-800 hover:to-blue-900 text-white tracking-widest font-semibold py-2 w-full mt-2 rounded-2xl opacity-80 shadow-md shadow-black";

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Correo electrónico no válido")
      .required("El correo electrónico es obligatorio")
      .matches(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        "Correo electrónico no válido"
      ),
    password: Yup.string()
      .required("La contraseña es obligatoria")
      .min(6, "La contraseña debe tener al menos 6 caracteres")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
        "La contraseña debe contener al menos una letra mayúscula, una letra minúscula, un número y un carácter especial (@$!%*?&)"
      ),
  });

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        resetForm();
        const comp = { email: values.email, password: values.password };
        if (
          comp.email !== user.email ||
          comp.password !== user.pass
        ) {
          setFormSend(true);
          setTimeout(() => setFormSend(false), 5000);
        } else {
          navigate("/application");
        }
      }}
    >
      {() => (
        <Form className="w-full lg:w-1/3 bg-slate-900 shadow-md shadow-gray-900 rounded-3xl mx-5 lg:mx-auto pt-6 px-10 pb-8 text-white bold space-y-6 relative z-30 -mt-6">
          {formSend && (
            <div className="border-2 border-red-800 text-red-600 text-lg font-semibold p-2 text-center">
              ¡Datos incorrectos!
            </div>
          )}
          <div className="w-40 h-40 mx-auto shadow-lg shadow-black rounded-full opacity-80">
            <img src={img1} alt="user.png" />
          </div>
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
              Iniciar Sesion
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormLogin;
