import { useContext, useState } from "react";
import  {Button, Input} from "../../atoms";
import { CardTask } from "../../molecules";
import { DataContext } from "../../../../config/Dummydata";

const TaskList = () => {
  const { task, addTask, ChangeStatus } = useContext(DataContext); // Mengambil data dan fungsi dari konteks
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const handleAddTask = () => {
    if (newTaskTitle.trim() === "") {
      return;
    }
    addTask(newTaskTitle);
    setNewTaskTitle(""); // Reset input setelah menambahkan task
  };

  return (
    <div className="bg-neutral-900 border-2 border-blue-400 p-4 rounded-md w-96 h-auto">
      <div className="flex flex-row items-center justify-between space-x-3">
        <Input
          placeholder="Tambahkan Task Baru"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <Button onClick={handleAddTask}>
          <img
            src="https://img.icons8.com/fluency-systems-regular/48/FFFFFF/plus.png"
            alt="Plus Icon"
            className="w-6"
          />
        </Button>
      </div>

      <p className="my-4">Task to do - {task.filter(t => !t.isDone).length}</p>
      <div className="space-y-3">
        {task.filter(t => !t.isDone).map((t) => (
          <CardTask
            key={t.id}
            id={t.id}         
            title={t.title}    
            isDone={t.isDone}  
            onClick={() => ChangeStatus(t.id)}
          />
        ))}
      </div>

      <p className="my-4">Task done</p>
      <div className="space-y-3">
        {task.filter(t => t.isDone).map((t) => (
          <CardTask
            key={t.id}
            id={t.id}
            title={t.title}
            isDone={t.isDone}
            className="line-through"
            onClick={() => ChangeStatus(t.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
