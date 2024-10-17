import { createBrowserRouter } from "react-router-dom";

import Login from "../pages/login/index";
import SignUp from "../pages/signup/index";
import MainLayout from "../layout/mainlayout";
import About from "../pages/about";
import NotFound from "../pages/not-found";
import Galeri from "../pages/galeri";
import Favori from "../pages/favorites";
import Notes from "../pages/notes";

const routes = createBrowserRouter([
    {
        path:"/",
        element: <MainLayout     />
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
    {
        path: '/galeri',
        element: <Galeri />
    },
    {
        path: '/favori',
        element: <Favori />
    },
    {
        path: '/notlar',
        element: <Notes />
    },
    // {
    //     path: '/admin',
    //     element: < />
    // },
    {
        path: '*',
        element: <NotFound />
    },

])

export default routes;