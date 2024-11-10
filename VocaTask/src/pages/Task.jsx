import TaskList from "../assets/components/organisms/TaskList";
import UserProfile from "../assets/components/organisms/UserProfile/UserProfile";
const Task = () => (
  <div className="flex flex-col items-center justify-center h-screen">
    <div className="flex flex-row items-start justify-center space-x-5">
      <UserProfile />
      <TaskList />
    </div>
  </div>
);

export default Task;