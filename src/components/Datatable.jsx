import DataTable from "react-data-table-component";
import { useState } from "react";
import { useServices } from "../context/ServiceContext";
import { Formik, Field, ErrorMessage } from "formik";

const Datatable = ({ enunciado, columns, data, month }) => {
  const { employee, setOption } = useServices();
  const [records, setRecords] = useState(data);
  const styleError = "text-red-500 text-md mt-1 italic tracking-tight";

  const handleChange = (e) => {
    setOption(parseInt(e.target.value));
  };

  const loadMonth = () => {
    return (
      <>
        <option>Selecciona el mes de venta</option>
        {month.length <= 0 ? (
          <option value={""} className="text-slate-500">
            No existen datos
          </option>
        ) : (
          month.map((e, index) => {
            return (
              <option key={e} value={index+1}>
                {e}
              </option>
            );
          })
        )}
      </>
    );
  };

  const handleFilter = (e) => {
    const newData = data.filter((row) =>
      row.nombre.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(newData);
  };

  // Estilos personalizados para las filas resaltadas
  const customStyles = {
    rows: {
      style: {
        backgroundColor: "lightblue", // Cambia el color de fondo de las filas resaltadas
        "&:hover": {
          backgroundColor: "lightyellow", // Cambia el color al pasar el mouse sobre las filas
        },
      },
    },
    headRow: {
      style: {
        // Estilos para la fila de encabezado
        backgroundColor: "rgb(15, 23, 42)",
        color: "rgb(241, 245, 249)",
      },
    },
    headCells: {
      style: {
        // Estilos para las celdas de encabezado (columnas)
        backgroundColor: "your-header-cell-background-color",
        color: "your-header-cell-text-color",
      },
    },
    cells: {
      style: {
        // Estilos para las celdas de datos (columnas)
        backgroundColor: "your-cell-background-color",
        color: "your-cell-text-color",
      },
    },
  };

  return (
    <div className=" max-h-screen lg:h-1/2 lg:mx-3 rounded-md shadow-md shadow-black overflow-y-scroll ">
      {enunciado === "ventas" && (
        <Formik>
          {() => (
            <div className="text-end bg-slate-100 sticky top-0 z-30">
              <Field
                as="select"
                name="month"
                id="month"
                className="appearance-none border-b border-sky-300 bg-cyan-100 rounded w-1/2 lg:w-1/4 py-2 px-3 leading-tight text-slate-900 ventas"
                onChange={handleChange}
              >
                {loadMonth()}
              </Field>
              <ErrorMessage
                name="month"
                component="div"
                className={styleError}
              />
            </div>
          )}
        </Formik>
      )}

      <DataTable
        columns={columns}
        data={records}
        pagination
        highlightOnHover
        pointerOnHover
        persistTableHead
        customStyles={customStyles}
      />
    </div>
  );
};

export default Datatable;
