import { useContext, useState, createContext } from "react";
import {
  createUser,
  createEmployee,
  getEmployee,
  getEmployeeRequestOne,
  updateEmployeeRequest,
  deleteEmployeeRequest,
  getSale,
  getSaleRequestOne,
  updateSaleRequest,
  deleteSaleRequest,
  getCompanies,
} from "../api/service.api";

export const month = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];

export const dataE = [
  {
    ci: 1,
    name: "John",
    apellido_p: "Doe",
    apellido_m: "Smith",
    direccion: "123 Main St",
  },
  {
    ci: 2,
    name: "Jane",
    apellido_p: "Smith",
    apellido_m: "Doe",
    direccion: "456 Elm St",
  },
  {
    ci: 3,
    name: "Michael",
    apellido_p: "Johnson",
    apellido_m: "Brown",
    direccion: "789 Oak St",
  },
  {
    ci: 4,
    name: "Emily",
    apellido_p: "Davis",
    apellido_m: "Wilson",
    direccion: "101 Pine St",
  },
  {
    ci: 5,
    name: "Robert",
    apellido_p: "Martinez",
    apellido_m: "Lee",
    direccion: "202 Maple St",
  },
  {
    ci: 6,
    name: "Jennifer",
    apellido_p: "Garcia",
    apellido_m: "White",
    direccion: "303 Cedar St",
  },
  {
    ci: 7,
    name: "David",
    apellido_p: "Hernandez",
    apellido_m: "Smith",
    direccion: "404 Birch St",
  },
  {
    ci: 8,
    name: "Mary",
    apellido_p: "Lopez",
    apellido_m: "Johnson",
    direccion: "505 Redwood St",
  },
  {
    ci: 9,
    name: "Daniel",
    apellido_p: "Gonzalez",
    apellido_m: "Davis",
    direccion: "606 Willow St",
  },
  {
    ci: 10,
    name: "Patricia",
    apellido_p: "Brown",
    apellido_m: "Miller",
    direccion: "707 Cedar St",
  },
  {
    ci: 11,
    name: "Jane",
    apellido_p: "Johnson",
    apellido_m: "Williams",
    direccion: "456 Elm St",
  },
  {
    ci: 12,
    name: "Michael",
    apellido_p: "Davis",
    apellido_m: "Brown",
    direccion: "789 Oak St",
  },
  {
    ci: 13,
    name: "Emily",
    apellido_p: "Martinez",
    apellido_m: "Lee",
    direccion: "101 Pine St",
  },
  {
    ci: 14,
    name: "Robert",
    apellido_p: "Garcia",
    apellido_m: "White",
    direccion: "202 Maple St",
  },
  {
    ci: 15,
    name: "Jennifer",
    apellido_p: "Hernandez",
    apellido_m: "Smith",
    direccion: "303 Cedar St",
  },
  {
    ci: 16,
    name: "David",
    apellido_p: "Lopez",
    apellido_m: "Johnson",
    direccion: "404 Birch St",
  },
  {
    ci: 17,
    name: "Mary",
    apellido_p: "Gonzalez",
    apellido_m: "Davis",
    direccion: "505 Redwood St",
  },
  {
    ci: 18,
    name: "Daniel",
    apellido_p: "Brown",
    apellido_m: "Miller",
    direccion: "606 Willow St",
  },
  {
    ci: 19,
    name: "Patricia",
    apellido_p: "Clark",
    apellido_m: "Moore",
    direccion: "707 Cedar St",
  },
  {
    ci: 20,
    name: "Richard",
    apellido_p: "Wright",
    apellido_m: "Anderson",
    direccion: "808 Oak St",
  },
];

export const dataVE = [
  {
    id: 1,
    productos: "Leche ",
    venta: 200,
  },
  {
    id: 2,
    productos: "Mantequilla",
    venta: 100,
  },
  {
    id: 3,
    productos: "Queso",
    venta: 800,
  },
  {
    id: 4,
    productos: "Harina",
    venta: 1000,
  },
  {
    id: 5,
    productos: "Manteca",
    venta: 500,
  },
];

export const dataVF = [
  {
    id: 1,
    productos: "Leche ",
    venta: 500,
  },
  {
    id: 2,
    productos: "Mantequilla",
    venta: 600,
  },
  {
    id: 3,
    productos: "Queso",
    venta: 800,
  },
];

const ServiceContext = createContext();

export const useServices = () => {
  const context = useContext(ServiceContext);
  if (!context) {
    throw new Error("useServices must be used within a ServiceContextProvider");
  }
  return context;
};

export const ServiceContextProvider = ({ children }) => {
  /* estados del registor de usuario */
  const [user, setUser] = useState([]);
  const [plan, setPlan] = useState("");
  /* estados para los empleados */
  const [employee, setEmployee] = useState([]);
  /* estados para los ventas */
  const [sale, setSale] = useState([]);
  /* estado del grafico general */
  const [saleG, setSaleG] = useState([]);
  /* estado para el cambio de meses */
  const [option, setOption] = useState(0);
  /* estado de la importacion de empresas */
  const [company, setCompany] = useState([]);
  /* estado para controlar las ventanas modales */
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
  /* solicitar empleados */
  const getEmployeesService = async () => {
    try {
      /* const reponse = await getEmployee(); */
      setEmployee(dataE);
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
      setUser(user.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  /* todos todos estas funciones sirven para las funciones de un ventas */
  /* crear un venta */
  const createSaleService = async (task) => {
    try {
      const response = await createSale(task);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  /* solicitar ventas */
  const getSalesService = async () => {
    try {
      /* const reponse = await getSale(); */
      setSale(dataVE);
    } catch (error) {
      console.error(error);
    }
  };
  const getSalesServiceF = async () => {
    try {
      /* const reponse = await getSale(); */
      setSale(dataVF);
    } catch (error) {
      console.error(error);
    }
  };

  const getSalesServiceG = async () => {
    /* configuracion de colore predeterminados */
    const colores = [
      "rgba(255, 0, 0, 0.7)",
      "rgba(0, 0, 255, 0.7)",
      "rgba(255, 255, 0, 0.7)",
      "rgba(0, 0, 128, 0.7)",
      "rgba(135, 206, 235, 0.7)",
      "rgba(75, 0, 130, 0.7)",
      "rgba(0, 128, 0, 0.7)",
    ];
    /* los bordes predeterminados */
    const bordes = [
      "rgba(255, 128, 128, 1)",
      "rgba(128, 128, 255, 1)",
      "rgba(255, 255, 128, 1)",
      "rgba(128, 128, 192, 1)",
      "rgba(173, 216, 230, 1)",
      "rgba(106, 90, 205, 1)",
      "rgba(144, 238, 144, 1)",
    ];
    /* une ambos array */
    const mergedData = dataVE.map((itemVE) => {
      const matchingItem = dataVF.find(
        (itemVF) => itemVF.productos === itemVE.productos
      );
      if (matchingItem) {
        // Si hay un objeto con el mismo nombre en ambos arrays, combina las ventas en un array
        return {
          id: itemVE.id,
          productos: itemVE.productos,
          venta: [itemVE.venta, matchingItem.venta], // Combina las ventas en un array
        };
      } else {
        // Si no hay un objeto con el mismo nombre en el array VF, simplemente agrega el objeto del array VE
        return {
          id: itemVE.id,
          productos: itemVE.productos,
          venta: [itemVE.venta], // Puedes establecer un valor predeterminado para la segunda venta si es necesario
        };
      }
    });
    /* carga los datos del grafico linear */
    const dataLine = {
      labels: month,
      datasets: mergedData.map((item, index) => ({
        label: `${item.productos}`,
        data: item.venta,
        borderColor: bordes[index],
        backgroundColor: colores[index],
      })),
    };
    setSaleG(dataLine);
  };
  /* ambas funciones son para actualizar */
  /* solicitar un venta */
  const getSaleService = async (id) => {
    try {
      const response = await getSaleRequestOne(id);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };
  /* actualizar un venta */
  const updateSaleService = async (id, newFields) => {
    try {
      const response = await updateSaleRequest(id, newFields);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  /* eliminar un venta */
  const deleteSaleService = async (id) => {
    try {
      const response = await deleteSaleRequest(id);
      setUser(user.filter((user) => user.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  /* solictar datos de empresas */
  const getCompany = async () => {
    try {
      const result = await getCompanies();
      setCompany(result.data);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <ServiceContext.Provider
      value={{
        user,
        setUser,
        createUserService,
        employee,
        setEmployee,
        createEmployeeService,
        getEmployeesService,
        getEmployeeService,
        updateEmployeeService,
        deleteEmployeeService,
        sale,
        setSale,
        createSaleService,
        getSalesService,
        getSalesServiceF,
        saleG,
        getSalesServiceG,
        getSaleService,
        updateSaleService,
        deleteSaleService,
        isModalOpen,
        setIsModalOpen,
        getCompany,
        company,
        plan,
        setPlan,
        month,
        option,
        setOption,
      }}
    >
      {children}
    </ServiceContext.Provider>
  );
};
