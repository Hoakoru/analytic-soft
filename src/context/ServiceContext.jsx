import { useContext, useState, createContext } from "react";
import {
  createUser,
  createEmployee,
  getEmployee,
  getEmployeeRequestOne,
  updateEmployeeRequest,
  deleteEmployeeRequest,
} from "../api/service.api";

const ServiceContext = createContext();

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useServices must be used within a ServiceContextProvider");
  }
  return context;
};

export const ServiceContextProvider = ({ children }) => {
  const [users, setUser] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  /* crear un nuevo cliente */
  const createUserService = async (task) => {
    try {
      const response = await createUser(task);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  /* todos todos estas funciones sirven para las funciones de un empleado */
  /* crear un empleado */
  const createEmployeeService = async (task) => {
    try {
      const response = await createEmployee(task);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const getEmployeesService = async () => {
    try {
      const reponse = await getEmployee();
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  /* ambas funciones son para actualizar */
  /* solicitar un empleado */
  const getEmployeeService = async (id) => {
    try {
      const response = await getEmployeeRequestOne(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  /* actualizar un empleado */
  const updateEmployeeService = async (id, newFields) => {
    try {
      const response = await updateEmployeeRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  /* eliminar un empleado */
  const deleteEmployeeService = async (id) => {
    try {
      const response = await deleteEmployeeRequest(id);
      setUser(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ServiceContext.Provider
      value={{
        users,
        setUser,
        createUserService,
        createEmployeeService,
        getEmployeesService,
        getEmployeeService,
        updateEmployeeService,
        deleteEmployeeService,
        isModalOpen,
        setIsModalOpen,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
