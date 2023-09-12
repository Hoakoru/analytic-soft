import axios from "axios";

/* crear nuevos clientes de suscripcion */
export const createUser = async () =>
  await axios.post("http://localhost:4000/user", data);

/* crear nuevos clientes de suscripcion */
export const getUser = async () =>
  await axios.get("http://localhost:4000/user");

/* listar empleados de cada empresa */
export const getEmployee = async () =>
  await axios.get("http://localhost:4000/employee");

/* crear nuevos empleados de cada empresa */
export const createEmployee = async () =>
  await axios.post("http://localhost:4000/employee", data);

/* eliminar empleado unico de la empresa */
export const deleteEmployeeRequest = async (id) =>
  await axios.delete(`http://localhost:4000/employee/${id}`);

/* listar un solo empleado de la empresa para modificar */
export const getEmployeeRequestOne = async () =>
  await axios.get(`http://localhost:4000/employee/${id}`);

/* actualizar empleado */
export const updateEmployeeRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/employee/${id}`, newFields);
  
/* listar ventas de cada empresa */
export const getSell = async () =>
  await axios.get("http://localhost:4000/sell");

/* crear nuevos ventas de cada empresa */
export const createSell = async () =>
  await axios.post("http://localhost:4000/sell", data);

/* eliminar venta unico de la empresa */
export const deleteSellRequest = async (id) =>
  await axios.delete(`http://localhost:4000/sell/${id}`);

/* listar un solo venta de la empresa para modificar */
export const getSellRequestOne = async () =>
  await axios.get(`http://localhost:4000/sell/${id}`);

/* actualizar venta */
export const updateSellRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/sell/${id}`, newFields);
