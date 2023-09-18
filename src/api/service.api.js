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
export const getSale = async () =>
  await axios.get("http://localhost:4000/sale");

/* crear nuevos ventas de cada empresa */
export const createSale = async () =>
  await axios.post("http://localhost:4000/sale", data);

/* eliminar venta unico de la empresa */
export const deleteSaleRequest = async (id) =>
  await axios.delete(`http://localhost:4000/sale/${id}`);

/* listar un solo venta de la empresa para modificar */
export const getSaleRequestOne = async () =>
  await axios.get(`http://localhost:4000/sale/${id}`);

/* actualizar venta */
export const updateSaleRequest = async (id, newFields) =>
  await axios.put(`http://localhost:4000/sale/${id}`, newFields);

/* importar datos empresas */
export const getCompanies = async () =>
  await axios.get("https://jsonplaceholder.typicode.com/posts");
