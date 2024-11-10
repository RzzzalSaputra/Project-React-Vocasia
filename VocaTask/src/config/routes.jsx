import {createBrowserRouter} from "react-router-dom";
import FormLogin from "../assets/components/organisms/FormLogin";
import Task from "../pages/Task";
import Setting from "../pages/Setting";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <FormLogin />,
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
