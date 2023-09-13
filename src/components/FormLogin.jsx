import img1 from "../assets/img/user.png";
import { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const FormLogin = () => {
  //estamos usando navigate para poder utilizarlo con otro nombre
  const navigate = useNavigate();
  const [formSend, setFormSend] = useState(false); //creamos un estado de fornsend prar mostrar mensajes de error

  //en las siguinetes se puede ver las clases
  const fieldClasses =
    " border-b border-sky-600  w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-sky-200 bg-gradient-to-r from-slate-800 to-slate-600";
  const buttonClasses =
    "bg-gradient-to-b from-slate-800 to-indigo-950 hover:from-indigo-900 hover:to-indigo-950 text-white tracking-widest font-semibold py-4 px-4 mt-4 rounded-xl w-full opacity-80 shadow-lg";

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
          comp.email !== "jorgejoaquinmv@gmail.com" ||
          comp.password !== "26072001Joa!"
        ) {
          setFormSend(true);
          setTimeout(() => setFormSend(false), 5000);
        } else {
          console.log(values)
          navigate("/application");
        }
      }}
    >
      {() => (
        <Form className="w-full lg:w-1/3 bg-gradient-to-tr from-transparent via-transparent to-gray-800 opacity-90 shadow-md shadow-indigo-900 rounded-3xl mx-5 lg:mx-auto pt-10 px-10 pb-16 text-white bold space-y-6 relative z-40 ">
          {formSend && (
            <div className="border border-red-800 rounded-2xl text-sky-200 text-lg mt-1 mb-4 text-center">
              ¡Datos incorrectos!
            </div>
          )}
          <div className="w-40 h-40 mx-auto shadow-lg shadow-blue-900 rounded-full opacity-80">
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
