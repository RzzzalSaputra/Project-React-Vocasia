import { useContext } from "react";
import Checkbox from "../../atoms/CheckBox/CheckBox";
import { DataContext } from "../../../../config/Dummydata";
import Button from "../../atoms/Button/Button";

// eslint-disable-next-line react/prop-types
export const CardTask = ({ className, title, id, isDone }) => {
  const { ChangeStatus } = useContext(DataContext); // Mengambil fungsi ChangeStatus dari DataContext

  // Fungsi untuk menangani perubahan status task
  const handleCheckboxChange = () => {
    ChangeStatus(id);
  };

  return (
    <div className={`flex flex-row justify-between items-center p-2 border rounded shadow-lg text-white ${className}`}>
      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="space-x-1 mr-1">
        <Button className="btn-ghost">
          <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/trash--v1.png" alt="trash--v1"/>
        </Button>
        <Checkbox checked={isDone} onChange={handleCheckboxChange} />
      </div>
    </div>
  );
};