import {createBrowserRouter} from "react-router-dom";
import Login from "../pages/Login";
import Task from "../pages/Task";
import Setting from "../pages/Setting";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Login />,
    },
    {
        path: "/task",
        element: <Task />,
    },
    {
        path: "/update-profile",
        element: <Setting />,
    }
])
