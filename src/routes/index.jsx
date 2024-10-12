import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login/index";
import SignUp from "../pages/signup/index";
import MainLayout from "../layout/mainlayout";
import About from "../pages/about";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout />
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/signup',
        element: <SignUp />
    },
    {
        path: '/about',
        element: <About />
    },

])

export default routes;