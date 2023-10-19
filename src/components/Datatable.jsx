import DataTable from "react-data-table-component";
import { useState, useEffect } from "react";
import { useServices } from "../context/ServiceContext";

const Datatable = ({ enunciado, columns }) => {
  const { employee, sale } = useServices();
  const [records, setRecords] = useState([]);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const loadDataTable = async () => {
      if (enunciado === "empleados") {
        setPending(true);

        const timeout = setTimeout(() => {
          setRecords(employee);
          setPending(false);
        }, 2000);

        return () => clearTimeout(timeout);
      }
    };
    loadDataTable();
  }, [employee]);

  useEffect(() => {
    const loadDataTable = async () => {
      if (enunciado === "ventas") {
        setPending(true);

        const timeout = setTimeout(() => {
          setRecords(sale);
          setPending(false);
        }, 2000);

        return () => clearTimeout(timeout);
      }
    };
    loadDataTable();
  }, [sale]);

  /* const handleFilter = (e) => {
    const newData = data.filter((row) =>
      row.nombre.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(newData);
  }; */

  const paginationOptions = {
    rowsPerPageText: "Filas por página",
    rangeSeparatorText: "de",
    selectAllRowsItem: true,
    selectAllRowsItemText: "Todos",
  };
  // Estilos personalizados para las filas resaltadas
  const customStyles = {
    headRow: {
      style: {
        border: "none",
      },
    },
    headCells: {
      style: {
        backgroundColor: "rgb(15, 23, 42)",
        color: "rgb(241, 245, 249)",
        fontSize: "14px",
      },
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: "rgb(230, 244, 244)",
        borderBottomColor: "#FFFFFF",
        borderRadius: "25px",
        outline: "1px solid #FFFFFF",
      },
      style: {
        color: "rgba(0,0,0,.54)",
        fontWeight: 500,
      },
    },
    pagination: {
      style: {
        border: "none",
      },
    },
  };

  return (
    <div className="max-h-screen lg:h-1/2 lg:mx-3 shadow-md shadow-black overflow-y-auto lg:overflow-y-clip">
      <DataTable
        columns={columns}
        data={records}
        pagination
        paginationComponentOptions={paginationOptions}
        highlightOnHover
        pointerOnHover
        progressPending={pending}
        customStyles={customStyles}
        fixedHeader
        fixedHeaderScrollHeight="78%"
      />
    </div>
  );
};

export default Datatable;
