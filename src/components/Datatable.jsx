import DataTable from "react-data-table-component";
import { useState } from "react";
import { useServices } from "../context/ServiceContext";

const Datatable = ({ enunciado, columns, data }) => {
  const { employee } = useServices();
  const [records, setRecords] = useState(data);

  const handleFilter = (e) => {
    const newData = data.filter((row) =>
      row.nombre.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setRecords(newData);
  };

  return (
    <>
      <div className="max-h-screen lg:h-1/2 lg:mx-3 overflow-y-scroll rounded-md shadow-md shadow-black">
        <DataTable
          title={`Lista de ${enunciado}`}
          columns={columns}
          data={records}
          pagination
          highlightOnHover
          pointerOnHover
          persistTableHead
        />
      </div>
    </>
  );
};

export default Datatable;
