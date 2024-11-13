import {createBrowserRouter} from "react-router-dom";
import { Login, Task, Setting } from "../pages";

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
