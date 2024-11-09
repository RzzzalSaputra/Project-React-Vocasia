import {createBrowserRouter} from "react-router-dom";
import FormLogin from "../assets/components/organisms/FormLogin";
import Task from "../pages/Task";
import UpdateProfile from "../pages/UpdateProfile";

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
        element: <UpdateProfile />,
    }
])
