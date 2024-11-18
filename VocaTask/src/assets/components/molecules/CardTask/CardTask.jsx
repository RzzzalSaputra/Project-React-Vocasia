import Button from "../../atoms/Button/Button";

const CardTask = ({ className, title, isDone, onChange, onClick }) => {

  return (
    <div className={`flex flex-row justify-between items-center p-2 border rounded shadow-lg text-white ${className}`}>
      <h3 className="text-xl w-56 font-medium truncate">{title}</h3>
      <div className="space-x-0.5 mr-1 flex items-center m-0.5">
        <Button className="btn-ghost" onClick={onClick}>
          <img width="24" height="24" src="https://img.icons8.com/material-outlined/24/FFFFFF/trash--v1.png" alt="trash--v1"/>
        </Button>
        <input
          type="checkbox"
          className="checkbox checkbox-primary rounded"
          checked={isDone}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

export default CardTask;