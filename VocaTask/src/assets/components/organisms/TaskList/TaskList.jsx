import { useState, useEffect } from "react";
import  {Button, Input} from "../../atoms";
import { CardTask } from "../../molecules";
import taskStore from "../../../../store/TaskStore";
import Swal from "sweetalert2";

const TaskList = () => {
  const { task, createTask, getTask, MarkDoneTaskById, deleteTask } = taskStore();
  const [newTaskTitle, setNewTaskTitle] = useState("");

  useEffect(()=>{
    getTask() 
  },[])


  const handleAddTask = () => {
    if (newTaskTitle.trim() === "") {
      return;
    }
    createTask(newTaskTitle);
    setNewTaskTitle("");
  };

const handleDeleteTask = (_id) => {

  Swal.fire({
    title: 'Apakah kamu yakin?',
    text: "Tugas ini akan dihapus permanen!",
    icon: 'warning',
    showCancelButton: true,  
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Ya, hapus!',
    cancelButtonText: 'Batal'
  }).then((result) => {
    if (result.isConfirmed) {

      deleteTask(_id)

      Swal.fire(
        'Terhapus!',
        'Tugas telah dihapus.',
        'success',
        '2000'
      );
    }
  });
};

  return (
    <div className="bg-neutral-900 border-2 border-blue-400 p-4 rounded-md w-96 h-auto">
      <div className="flex flex-row items-center justify-between space-x-3">
        <Input
          name="title"
          type="text"
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
            key={t._id}
            id={t._id}         
            title={t.title}
            isDone={t.isDone}
            onClick={()=> handleDeleteTask(t._id)}
            onChange={() => MarkDoneTaskById(t._id)}
          />
        ))}
      </div>

      <p className="my-4">Task done</p>
      <div className="space-y-3">
        {task.filter(t => t.isDone).map((t) => (
          <CardTask
            key={t._id}
            id={t._id}
            title={t.title}
            isDone={t.isDone}
            className="line-through"
            onClick={()=> handleDeleteTask(t._id)}
            onChange={() => MarkDoneTaskById(t._id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
