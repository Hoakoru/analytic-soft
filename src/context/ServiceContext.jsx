import { useContext, useState, createContext } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequestOne,
  updateTaskRequest,
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

  const createTask = async (task) => {
    try {
      const response = await createTaskRequest(task);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      const response = await deleteTaskRequest(id);
      setUser(users.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  const getTask = async (id) => {
    try {
      const response = await getTaskRequestOne(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const updateTask = async (id, newFields) => {
    try {
      const response = await updateTaskRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ServiceContext.Provider
      value={{
        users,
        setUser,
        deleteTask,
        createTask,
        getTask,
        updateTask,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
