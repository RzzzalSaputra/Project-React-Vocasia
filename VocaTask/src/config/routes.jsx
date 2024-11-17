import {createBrowserRouter} from "react-router-dom";
import { Login, Task, Setting, Register } from "../pages";

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
    },
    {
        path: "/register",
        element: <Register/>
    }
])
